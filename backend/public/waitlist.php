<?php
/**
 * LECTIApp - Endpoint Lista de Espera
 * Recibe emails y sugerencias, guarda en JSON
 */

// CORS headers para permitir requests desde el frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Manejar preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

// Leer JSON del body
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validar email
if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Email inválido']);
    exit;
}

// Preparar registro
$entry = [
    'email' => trim($data['email']),
    'suggestion' => isset($data['suggestion']) ? trim($data['suggestion']) : '',
    'reader_type' => isset($data['reader_type']) ? trim($data['reader_type']) : '',
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
];

// Archivo donde guardamos los registros
$dataDir = __DIR__ . '/../data';
$dataFile = $dataDir . '/waitlist.json';

// Crear directorio si no existe
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

// Leer registros existentes
$entries = [];
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    $entries = json_decode($content, true) ?: [];
}

// Verificar si el email ya existe
$emailExists = false;
foreach ($entries as $existing) {
    if (strtolower($existing['email']) === strtolower($entry['email'])) {
        $emailExists = true;
        break;
    }
}

if ($emailExists) {
    // No es error, simplemente ya está registrado
    echo json_encode([
        'success' => true,
        'message' => 'Ya estás en la lista',
        'already_registered' => true
    ]);
    exit;
}

// Agregar nuevo registro
$entries[] = $entry;

// Guardar archivo
if (file_put_contents($dataFile, json_encode($entries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode([
        'success' => true,
        'message' => 'Registro exitoso',
        'already_registered' => false
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Error al guardar']);
}
