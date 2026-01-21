<?php
/**
 * LECTIApp - Admin: Ver Lista de Espera
 * Página simple para ver los emails registrados
 *
 * IMPORTANTE: Proteger este archivo en producción con autenticación
 */

// Contraseña simple (cambiar en producción)
$ADMIN_PASSWORD = 'lectiapp2024';

session_start();

// Verificar autenticación
$authenticated = isset($_SESSION['admin_auth']) && $_SESSION['admin_auth'] === true;

// Login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if ($_POST['password'] === $ADMIN_PASSWORD) {
        $_SESSION['admin_auth'] = true;
        $authenticated = true;
    }
}

// Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin-waitlist.php');
    exit;
}

// Cargar datos
$dataFile = __DIR__ . '/../data/waitlist.json';
$entries = [];
if (file_exists($dataFile)) {
    $entries = json_decode(file_get_contents($dataFile), true) ?: [];
}

// Exportar CSV
if ($authenticated && isset($_GET['export']) && $_GET['export'] === 'csv') {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=lectiapp-waitlist-' . date('Y-m-d') . '.csv');

    $output = fopen('php://output', 'w');
    fputcsv($output, ['Email', 'Sugerencia', 'Tipo Lector', 'Fecha', 'IP']);

    foreach ($entries as $entry) {
        fputcsv($output, [
            $entry['email'],
            $entry['suggestion'] ?? '',
            $entry['reader_type'] ?? '',
            $entry['timestamp'],
            $entry['ip'] ?? ''
        ]);
    }

    fclose($output);
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Lista de Espera | LECTIApp</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
    <div class="max-w-6xl mx-auto p-6">
        <?php if (!$authenticated): ?>
        <!-- Login Form -->
        <div class="max-w-md mx-auto mt-20">
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Admin LECTIApp</h1>
                <form method="POST">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-amber-500"
                        required
                    >
                    <button
                        type="submit"
                        class="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
        <?php else: ?>
        <!-- Admin Panel -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Lista de Espera</h1>
                <p class="text-gray-600"><?php echo count($entries); ?> registros</p>
            </div>
            <div class="flex gap-4">
                <a
                    href="?export=csv"
                    class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                    Exportar CSV
                </a>
                <a
                    href="?logout=1"
                    class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                    Salir
                </a>
            </div>
        </div>

        <?php if (empty($entries)): ?>
        <div class="bg-white rounded-xl shadow p-12 text-center">
            <p class="text-gray-500 text-lg">No hay registros todavía</p>
        </div>
        <?php else: ?>
        <div class="bg-white rounded-xl shadow overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-50 border-b">
                    <tr>
                        <th class="px-6 py-4 text-left text-sm font-medium text-gray-700">#</th>
                        <th class="px-6 py-4 text-left text-sm font-medium text-gray-700">Email</th>
                        <th class="px-6 py-4 text-left text-sm font-medium text-gray-700">Sugerencia</th>
                        <th class="px-6 py-4 text-left text-sm font-medium text-gray-700">Fecha</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    <?php foreach (array_reverse($entries) as $i => $entry): ?>
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 text-sm text-gray-500"><?php echo count($entries) - $i; ?></td>
                        <td class="px-6 py-4">
                            <a href="mailto:<?php echo htmlspecialchars($entry['email']); ?>" class="text-amber-600 hover:text-amber-800">
                                <?php echo htmlspecialchars($entry['email']); ?>
                            </a>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 max-w-md">
                            <?php echo htmlspecialchars($entry['suggestion'] ?? '-'); ?>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            <?php echo $entry['timestamp']; ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <?php endif; ?>
        <?php endif; ?>
    </div>
</body>
</html>
