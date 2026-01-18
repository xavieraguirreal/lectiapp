# Plan de Implementación: LECTIApp

## Biblioteca Digital con Backend PHP + Frontend React PWA

**Ubicación local:** `E:\AppLECTIApp`
**Hosting:** Donweb/Ferozo con sincronización Git

---

## Estructura General del Proyecto

```
E:\AppLECTIApp\
├── landing/          # Landing page (Fase 0) - HTML + CSS + JS
├── blog/             # Blog (Fase 0) - PHP + MySQL + IA
├── backend/          # API REST - PHP Slim
├── frontend/         # App PWA - React
└── database/         # Schemas SQL
```

---

## Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Backend | PHP 8.1+ con Slim Framework 4 |
| Frontend | React 18 + TypeScript + Vite (PWA) |
| Base de datos | MySQL 8 |
| Estilos | Tailwind CSS |
| Estado | Redux Toolkit |
| Deploy | Git push → Donweb/Ferozo |

---

## Flujo de Deploy con Git

```
LOCAL                                    SERVIDOR (Donweb/Ferozo)
──────                                   ────────────────────────
frontend/src/ (código React)
      │
      ▼
npm run build
      │
      ▼
frontend/dist/ (HTML/CSS/JS estáticos)
      │
      ├──────────── git push ──────────────► frontend/dist/
      │                                           │
backend/src/ (código PHP)                         ▼
      │                                      Se sirve como
      ├──────────── git push ──────────────► archivos estáticos
      │                                           +
      ▼                                      API PHP
```

**Pasos antes de cada deploy:**
```bash
cd frontend
npm run build      # Genera dist/
cd ..
git add .
git commit -m "descripción"
git push origin main
```

**Estructura en servidor:**
```
public_html/lectiapp/
├── index.php              # Entry point API
├── .htaccess              # Rutas API + SPA fallback
├── api/                   # Backend PHP
└── app/                   # Frontend (contenido de dist/)
    ├── index.html
    ├── assets/
    └── ...
```

---

## Estructura de Carpetas (Local)

```
E:\AppLECTIApp\
├── backend/
│   ├── public/
│   │   └── index.php              # Entry point API
│   ├── src/
│   │   ├── Actions/               # Controllers REST
│   │   │   ├── Catalog/           # CRUD títulos
│   │   │   ├── Import/            # Importación desde APIs
│   │   │   ├── Streaming/         # Proxy audio/epub/video
│   │   │   ├── Session/           # Tracking de progreso
│   │   │   └── Search/            # Búsqueda inteligente
│   │   ├── Domain/                # Entidades y repositorios
│   │   ├── Infrastructure/        # BD, clientes externos, cache
│   │   └── Services/              # Lógica de negocio
│   ├── config/
│   ├── cache/                     # Audio, EPUB, video cacheados
│   ├── composer.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   ├── manifest.json
│   │   └── sw.js                  # Service Worker
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/            # Header, Footer, Loading, Modal
│   │   │   ├── catalog/           # CatalogGrid, TitleCard, Filters
│   │   │   ├── player/            # AudioPlayer, ChapterList, Controls
│   │   │   ├── reader/            # EpubReader, ArticleReader
│   │   │   ├── video/             # VideoPlayer
│   │   │   └── import/            # ImportWizard, SearchResults
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   └── types/
│   ├── dist/                      # BUILD - se sube al servidor
│   ├── vite.config.ts
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── .gitignore
└── PLAN-LECTIAPP.md
```

---

## Modelo de Datos Principal

### Tabla `titulos` (contenido unificado)
```sql
- id, titulo, autor, descripcion, genero, idioma, anio, portada_url
- es_audiolibro, es_epub, es_video, es_paper, es_articulo_wikipedia, es_texto_wikisource, es_audio_general
- internet_archive_id, librivox_id, openalex_id, wikipedia_id, wikisource_id, doi
- url_epub, url_audio_rss, url_video, url_pdf
- duracion_segundos, num_capitulos, narrador (para audio)
- created_at, updated_at
```

### Tabla `audio_capitulos`
```sql
- id, titulo_id, numero, titulo_capitulo, duracion_segundos, url_mp3
```

### Tabla `sesiones_audio`
```sql
- id, titulo_id, usuario_id, session_id
- capitulo_actual, posicion_segundos, progreso_porcentaje
- fecha_inicio, fecha_fin, estado
```

### Tabla `sesiones_lectura`
```sql
- id, titulo_id, usuario_id, session_id, tipo_lectura
- cfi_posicion (EPUB), porcentaje_posicion
- fecha_inicio, fecha_fin, estado
```

### Tabla `sesiones_video`
```sql
- id, titulo_id, usuario_id, session_id
- posicion_segundos, progreso_porcentaje
- fecha_inicio, fecha_fin, estado
```

---

## Endpoints REST API

### Catálogo
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/titles` | Listar con paginación y filtros |
| GET | `/api/v1/titles/{id}` | Detalle con capítulos |
| POST | `/api/v1/titles` | Crear título |
| PUT | `/api/v1/titles/{id}` | Actualizar |
| DELETE | `/api/v1/titles/{id}` | Eliminar |

### Streaming (con caché y Range Requests)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/stream/audio` | Proxy audio (params: url, title_id, chapter) |
| GET | `/api/v1/stream/epub` | Proxy EPUB |
| GET | `/api/v1/stream/video` | Proxy video |

### Importación
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/import/internet-archive/search` | Buscar en IA |
| POST | `/api/v1/import/internet-archive` | Importar desde IA |
| GET/POST | `/api/v1/import/openalex` | Papers académicos |
| GET/POST | `/api/v1/import/wikipedia` | Artículos Wikipedia |
| GET/POST | `/api/v1/import/wikisource` | Textos Wikisource |

### Sesiones/Progreso
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/sessions/audio` | Iniciar sesión audio |
| PUT | `/api/v1/sessions/audio/{id}` | Actualizar progreso |
| GET | `/api/v1/users/{id}/continue` | "Continuar donde quedaste" |

### Búsqueda
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/search/smart` | Búsqueda con OpenAI |

---

## Componentes React Principales

### Páginas
- `HomePage` - Inicio con "Continuar" y destacados
- `CatalogPage` - Catálogo con filtros por tipo
- `AudioPlayerPage` - Reproductor de audiolibros
- `EpubReaderPage` - Lector EPUB
- `VideoPlayerPage` - Reproductor video
- `ImportPage` - Wizard de importación

### Componentes clave
- `CatalogGrid` - Grid responsive con cards
- `TitleCard` - Card con portada, tipo, título, autor
- `TypeFilter` - Filtros por tipo de contenido
- `AudioPlayer` - Reproductor completo con capítulos
- `EpubReader` - Wrapper de epub.js
- `ImportWizard` - Importación paso a paso

### Hooks
- `useAudioPlayer` - Estado y controles de audio
- `useProgress` - Sincronizar progreso con backend
- `useOffline` - Detectar conexión para PWA

---

## Fases de Implementación

### Fase 0: Landing Page + Blog (PRIMERO)

**Landing Page** (`landing/`) - Basada en `E:\appTerrapp\landing`
- [ ] Crear `index.html` con estructura SEO + Open Graph
- [ ] Implementar `assets/js/i18n.js` para multiidioma
- [ ] Diseñar secciones: Hero, Características, Cómo funciona, CTA
- [ ] Crear `privacy.html` y `terms.html`
- [ ] Integrar Google Analytics
- [ ] Assets: logos, mockups de la app

**Estructura landing:**
```
landing/
├── index.html              # Página principal
├── privacy.html            # Política de privacidad
├── terms.html              # Términos de servicio
└── assets/
    ├── css/styles.css
    ├── js/i18n.js          # Traducciones multiidioma
    └── images/             # Logos, mockups
```

**Blog** (`blog/`) - Basado en `E:\appTerrapp\blog`
- [ ] Crear estructura de archivos
- [ ] Configurar `admin/config/database.php` para MySQL
- [ ] Implementar `scriptum.php` para meta tags dinámicos
- [ ] Crear endpoints en `admin/api/`:
  - `guardar_articulo.php` - CRUD
  - `cambiar_estado.php` - Publicar/borrador
  - `registrar_vista.php` - Analytics
- [ ] Integrar OpenAI para generación de artículos (opcional)
- [ ] Frontend con Tailwind CSS
- [ ] RSS feed

**Estructura blog:**
```
blog/
├── index.html              # Lista de artículos
├── scriptum.php            # Artículo individual (meta tags dinámicos)
├── assets/
│   ├── css/blog.css
│   └── js/blog.js
├── data/
│   └── articulos.json      # Cache de artículos
└── admin/
    ├── config/
    │   ├── config.php      # API keys
    │   └── database.php    # Conexión MySQL
    ├── api/                # Endpoints PHP
    ├── includes/           # Clases PHP
    └── index.php           # Dashboard admin
```

**Tablas MySQL para blog:**
```sql
- articulos (id, titulo, slug, contenido, categoria, tags, estado, fecha)
- categorias (id, nombre, slug)
- vistas (id, articulo_id, ip, fecha)
- reacciones (id, articulo_id, tipo, fecha)
```

---

### Fase 1: Fundamentos de la App
- [ ] Inicializar repo git
- [ ] Setup Slim Framework + MySQL
- [ ] CRUD de títulos (API)
- [ ] Setup React + Vite + Tailwind
- [ ] Catálogo básico con grid
- [ ] Configurar deploy a Donweb

### Fase 2: Streaming de Audio
- [ ] Proxy audio con caché (60 días)
- [ ] Soporte Range Requests
- [ ] AudioPlayer con controles
- [ ] Lista de capítulos
- [ ] Control de velocidad

### Fase 3: Lector EPUB y Textos
- [ ] Integración epub.js
- [ ] Proxy EPUB
- [ ] Readers para Wikipedia/Wikisource
- [ ] Controles de lectura

### Fase 4: Tracking de Sesiones
- [ ] Endpoints de sesiones
- [ ] Guardar/recuperar progreso
- [ ] "Continuar donde quedaste"

### Fase 5: Importación
- [ ] Cliente Internet Archive
- [ ] Cliente OpenAlex, Wikipedia, Wikisource
- [ ] Wizard de importación

### Fase 6: Búsqueda Inteligente
- [ ] Cliente OpenAI
- [ ] Búsqueda en lenguaje natural

### Fase 7: Video y Enriquecimiento
- [ ] VideoPlayer
- [ ] Enriquecimiento Wikidata

### Fase 8: PWA Completa
- [ ] Service Worker
- [ ] Offline fallback
- [ ] Optimización móvil

---

## Archivos de Referencia (app existente)

| Archivo | Qué replicar |
|---------|--------------|
| `E:\appBatán\biblioteca\proxy-audio.php` | Lógica caché + Range Requests |
| `E:\appBatán\biblioteca\proxy-epub.php` | Streaming EPUB |
| `E:\appBatán\biblioteca\biblioteca.js` | Patrones API |
| `E:\appBatán\biblioteca\buscar-ia.php` | Búsqueda OpenAI |

---

## Dependencias

### Backend (composer.json)
```json
{
  "require": {
    "php": "^8.1",
    "slim/slim": "^4.12",
    "slim/psr7": "^1.6",
    "php-di/php-di": "^7.0",
    "vlucas/phpdotenv": "^5.5",
    "guzzlehttp/guzzle": "^7.8"
  }
}
```

### Frontend (package.json)
```json
{
  "dependencies": {
    "react": "^18.2",
    "react-dom": "^18.2",
    "react-router-dom": "^6.20",
    "@reduxjs/toolkit": "^2.0",
    "axios": "^1.6",
    "epubjs": "^0.3.93"
  },
  "devDependencies": {
    "vite": "^5.0",
    "vite-plugin-pwa": "^0.17",
    "typescript": "^5.3",
    "tailwindcss": "^3.3"
  }
}
```

---

## Configuración .htaccess (Servidor)

```apache
# API routes
RewriteEngine On
RewriteBase /

# Si es archivo o directorio existente, servir directamente
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# API requests → backend
RewriteRule ^api/(.*)$ api/index.php [QSA,L]

# Todo lo demás → React SPA
RewriteRule ^ app/index.html [L]
```

---

## Verificación

1. **Local backend:** `php -S localhost:8080 -t backend/public`
2. **Local frontend:** `cd frontend && npm run dev`
3. **Build:** `cd frontend && npm run build`
4. **Deploy:** `git push origin main`
5. **Test remoto:** Verificar catálogo y reproductor en URL de Donweb
