<?php
// Conexión a la base de datos
$servername = "localhost"; // Cambia si tu servidor de base de datos está en otro lugar
$username = "user"; 
$password = "user"; 
$dbname = "main_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtiene los datos del formulario
$name = $_POST['name'];
$forenames = $_POST['forenames'];
$email = $_POST['email'];
$ndate = $_POST['ndate'];
$sexo = $_POST['sexo']
$send_form_confirmation = $_POST['send_form_confirmation'];
$more_info = $_POST['more_info'];

// Inserta los datos en la base de datos
$sql = "INSERT INTO tabla (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
