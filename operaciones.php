<?php
$operacion = $_POST['operacion'];
$numero1 = $_POST['numero1'];
$numero2 = $_POST['numero2'];

$resultado = null;

switch ($operacion) {
    case 'sumar':
        $resultado = $numero1 + $numero2;
        break;
    case 'restar':
        $resultado = $numero1 - $numero2;
        break;
}

echo $resultado;
?>
