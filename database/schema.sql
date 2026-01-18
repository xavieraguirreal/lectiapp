-- =====================================================
-- LECTIApp - Biblioteca Digital
-- Esquema de Base de Datos MySQL 8
-- =====================================================

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- =====================================================
-- 1. TABLA PRINCIPAL: TITULOS (contenido unificado)
-- =====================================================

CREATE TABLE IF NOT EXISTS titulos (
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- Metadatos básicos
    titulo VARCHAR(500) NOT NULL,
    autor VARCHAR(500) NULL,
    descripcion TEXT NULL,
    genero VARCHAR(100) NULL,
    idioma VARCHAR(10) DEFAULT 'es',
    anio_publicacion INT NULL,
    portada_url VARCHAR(1000) NULL,

    -- Flags de tipo de contenido
    es_audiolibro TINYINT(1) DEFAULT 0,
    es_epub TINYINT(1) DEFAULT 0,
    es_video TINYINT(1) DEFAULT 0,
    es_paper TINYINT(1) DEFAULT 0,
    es_articulo_wikipedia TINYINT(1) DEFAULT 0,
    es_texto_wikisource TINYINT(1) DEFAULT 0,
    es_audio_general TINYINT(1) DEFAULT 0,

    -- IDs externos para evitar duplicados
    internet_archive_id VARCHAR(255) NULL,
    librivox_id VARCHAR(100) NULL,
    openalex_id VARCHAR(100) NULL,
    wikipedia_id VARCHAR(255) NULL,
    wikisource_id VARCHAR(255) NULL,
    gutenberg_id VARCHAR(50) NULL,
    doi VARCHAR(255) NULL,

    -- URLs de contenido
    url_epub VARCHAR(1000) NULL,
    url_audio_rss VARCHAR(1000) NULL,
    url_audio_zip VARCHAR(1000) NULL,
    url_video VARCHAR(1000) NULL,
    url_pdf VARCHAR(1000) NULL,
    url_texto VARCHAR(1000) NULL,
    url_fuente VARCHAR(1000) NULL COMMENT 'URL original de la fuente',

    -- Metadatos de audio
    duracion_total VARCHAR(20) NULL COMMENT 'Formato HH:MM:SS',
    duracion_segundos INT NULL,
    num_capitulos_audio INT NULL,
    narrador VARCHAR(500) NULL,

    -- Metadatos de papers/artículos
    publicacion VARCHAR(500) NULL COMMENT 'Nombre de la revista/conferencia',
    abstract TEXT NULL,
    keywords VARCHAR(500) NULL,
    citations_count INT NULL,

    -- Estado y control
    activo TINYINT(1) DEFAULT 1,
    destacado TINYINT(1) DEFAULT 0,
    fecha_importacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    ultima_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Índices
    INDEX idx_titulo (titulo(100)),
    INDEX idx_autor (autor(100)),
    INDEX idx_genero (genero),
    INDEX idx_idioma (idioma),
    INDEX idx_activo (activo),

    -- Índices únicos para IDs externos
    UNIQUE INDEX idx_internet_archive (internet_archive_id),
    UNIQUE INDEX idx_librivox (librivox_id),
    UNIQUE INDEX idx_openalex (openalex_id),
    UNIQUE INDEX idx_gutenberg (gutenberg_id),

    -- Índices para tipos de contenido
    INDEX idx_es_audiolibro (es_audiolibro),
    INDEX idx_es_epub (es_epub),
    INDEX idx_es_video (es_video),
    INDEX idx_es_paper (es_paper)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Tabla principal de contenido - unifica todos los tipos de medios';


-- =====================================================
-- 2. TABLA: AUDIO_CAPITULOS
-- =====================================================

CREATE TABLE IF NOT EXISTS audio_capitulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_id INT NOT NULL,

    numero INT NOT NULL COMMENT 'Número de capítulo (1, 2, 3...)',
    titulo_capitulo VARCHAR(500) NULL,
    duracion VARCHAR(20) NULL COMMENT 'Formato HH:MM:SS',
    duracion_segundos INT NULL,
    url_mp3 VARCHAR(1000) NOT NULL,
    archivo_cache VARCHAR(255) NULL COMMENT 'Nombre del archivo en caché local',
    tamanio_bytes BIGINT NULL,
    lector VARCHAR(255) NULL COMMENT 'Lector específico de este capítulo',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uk_titulo_capitulo (titulo_id, numero),
    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE,
    INDEX idx_titulo (titulo_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Capítulos individuales de audiolibros';


-- =====================================================
-- 3. TABLA: USUARIOS
-- =====================================================

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) NULL,
    password_hash VARCHAR(255) NULL,

    -- Identificador de dispositivo para usuarios anónimos
    device_id VARCHAR(100) NULL,

    avatar_url VARCHAR(500) NULL,
    preferencias JSON NULL COMMENT 'Preferencias de usuario (tema, velocidad, etc.)',

    activo TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_actividad DATETIME NULL,

    UNIQUE INDEX idx_email (email),
    INDEX idx_device (device_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Usuarios del sistema';


-- =====================================================
-- 4. TABLA: SESIONES_AUDIO
-- =====================================================

CREATE TABLE IF NOT EXISTS sesiones_audio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_id INT NOT NULL,
    usuario_id INT NULL,
    device_id VARCHAR(100) NULL COMMENT 'Para usuarios no registrados',

    -- Progreso
    capitulo_actual INT DEFAULT 1,
    posicion_segundos INT DEFAULT 0 COMMENT 'Posición dentro del capítulo',
    progreso_porcentaje DECIMAL(5,2) DEFAULT 0.00 COMMENT 'Progreso total del libro',

    -- Configuración de reproducción
    velocidad DECIMAL(3,2) DEFAULT 1.00,

    -- Tiempos
    fecha_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_reproduccion DATETIME DEFAULT CURRENT_TIMESTAMP,
    tiempo_total_escuchado INT DEFAULT 0 COMMENT 'Segundos totales escuchados',

    -- Estado
    estado ENUM('en_curso', 'completada', 'pausada') DEFAULT 'en_curso',

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,

    INDEX idx_titulo (titulo_id),
    INDEX idx_usuario (usuario_id),
    INDEX idx_device (device_id),
    INDEX idx_estado (estado),
    INDEX idx_ultima (fecha_ultima_reproduccion)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Sesiones de escucha de audiolibros';


-- =====================================================
-- 5. TABLA: SESIONES_LECTURA
-- =====================================================

CREATE TABLE IF NOT EXISTS sesiones_lectura (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_id INT NOT NULL,
    usuario_id INT NULL,
    device_id VARCHAR(100) NULL,

    -- Tipo de lectura
    tipo_lectura ENUM('epub', 'pdf', 'wikipedia', 'wikisource', 'texto') NOT NULL,

    -- Posición (varía según el tipo)
    cfi_posicion VARCHAR(500) NULL COMMENT 'CFI para EPUB',
    pagina_actual INT NULL COMMENT 'Para PDF',
    porcentaje_posicion DECIMAL(5,2) DEFAULT 0.00,

    -- Configuración de lectura
    tamano_fuente INT DEFAULT 16,
    tema VARCHAR(20) DEFAULT 'light' COMMENT 'light, dark, sepia',

    fecha_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_lectura DATETIME DEFAULT CURRENT_TIMESTAMP,

    estado ENUM('en_curso', 'completada', 'pausada') DEFAULT 'en_curso',

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,

    INDEX idx_titulo (titulo_id),
    INDEX idx_usuario (usuario_id),
    INDEX idx_device (device_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Sesiones de lectura de EPUBs y textos';


-- =====================================================
-- 6. TABLA: SESIONES_VIDEO
-- =====================================================

CREATE TABLE IF NOT EXISTS sesiones_video (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_id INT NOT NULL,
    usuario_id INT NULL,
    device_id VARCHAR(100) NULL,

    posicion_segundos INT DEFAULT 0,
    progreso_porcentaje DECIMAL(5,2) DEFAULT 0.00,
    velocidad DECIMAL(3,2) DEFAULT 1.00,

    fecha_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_ultima_reproduccion DATETIME DEFAULT CURRENT_TIMESTAMP,

    estado ENUM('en_curso', 'completada', 'pausada') DEFAULT 'en_curso',

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,

    INDEX idx_titulo (titulo_id),
    INDEX idx_usuario (usuario_id),
    INDEX idx_device (device_id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Sesiones de reproducción de video';


-- =====================================================
-- 7. TABLA: FAVORITOS
-- =====================================================

CREATE TABLE IF NOT EXISTS favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uk_usuario_titulo (usuario_id, titulo_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Títulos favoritos de usuarios';


-- =====================================================
-- 8. TABLA: HISTORIAL_BUSQUEDAS
-- =====================================================

CREATE TABLE IF NOT EXISTS historial_busquedas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NULL,
    device_id VARCHAR(100) NULL,

    query_original VARCHAR(500) NOT NULL,
    keywords_generados VARCHAR(500) NULL COMMENT 'Keywords generados por IA',
    resultados_count INT DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    INDEX idx_usuario (usuario_id),
    INDEX idx_fecha (created_at)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Historial de búsquedas para analytics';


-- =====================================================
-- 9. VISTA: CONTINUAR DONDE QUEDASTE
-- =====================================================

CREATE OR REPLACE VIEW v_continuar_reproduccion AS
SELECT
    'audio' AS tipo_sesion,
    sa.usuario_id,
    sa.device_id,
    sa.titulo_id,
    t.titulo,
    t.autor,
    t.portada_url,
    sa.progreso_porcentaje,
    sa.fecha_ultima_reproduccion AS fecha_ultima,
    sa.capitulo_actual,
    sa.posicion_segundos,
    t.num_capitulos_audio AS total_capitulos
FROM sesiones_audio sa
JOIN titulos t ON sa.titulo_id = t.id
WHERE sa.estado = 'en_curso'
  AND sa.progreso_porcentaje < 100

UNION ALL

SELECT
    'lectura' AS tipo_sesion,
    sl.usuario_id,
    sl.device_id,
    sl.titulo_id,
    t.titulo,
    t.autor,
    t.portada_url,
    sl.porcentaje_posicion AS progreso_porcentaje,
    sl.fecha_ultima_lectura AS fecha_ultima,
    NULL AS capitulo_actual,
    NULL AS posicion_segundos,
    NULL AS total_capitulos
FROM sesiones_lectura sl
JOIN titulos t ON sl.titulo_id = t.id
WHERE sl.estado = 'en_curso'
  AND sl.porcentaje_posicion < 100

UNION ALL

SELECT
    'video' AS tipo_sesion,
    sv.usuario_id,
    sv.device_id,
    sv.titulo_id,
    t.titulo,
    t.autor,
    t.portada_url,
    sv.progreso_porcentaje,
    sv.fecha_ultima_reproduccion AS fecha_ultima,
    NULL AS capitulo_actual,
    sv.posicion_segundos,
    NULL AS total_capitulos
FROM sesiones_video sv
JOIN titulos t ON sv.titulo_id = t.id
WHERE sv.estado = 'en_curso'
  AND sv.progreso_porcentaje < 100;


-- =====================================================
-- 10. VISTA: ESTADÍSTICAS DE TÍTULOS
-- =====================================================

CREATE OR REPLACE VIEW v_estadisticas_titulos AS
SELECT
    t.id,
    t.titulo,
    t.autor,
    CASE
        WHEN t.es_audiolibro = 1 THEN 'audiolibro'
        WHEN t.es_epub = 1 THEN 'epub'
        WHEN t.es_video = 1 THEN 'video'
        WHEN t.es_paper = 1 THEN 'paper'
        WHEN t.es_articulo_wikipedia = 1 THEN 'wikipedia'
        WHEN t.es_texto_wikisource = 1 THEN 'wikisource'
        ELSE 'otro'
    END AS tipo_principal,
    (SELECT COUNT(*) FROM sesiones_audio sa WHERE sa.titulo_id = t.id) AS sesiones_audio,
    (SELECT COUNT(*) FROM sesiones_lectura sl WHERE sl.titulo_id = t.id) AS sesiones_lectura,
    (SELECT COUNT(*) FROM sesiones_video sv WHERE sv.titulo_id = t.id) AS sesiones_video,
    (SELECT COUNT(*) FROM favoritos f WHERE f.titulo_id = t.id) AS total_favoritos
FROM titulos t
WHERE t.activo = 1;


-- =====================================================
-- MENSAJE DE CONFIRMACIÓN
-- =====================================================

SELECT 'LECTIApp: Esquema de base de datos creado exitosamente' AS mensaje;
