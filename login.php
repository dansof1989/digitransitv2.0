<?php
// verifica si se ha enviado el formulario de inicio de sesion
if ($_SERVER["REQUEST_METHOD"] == "POST") {  // condicional para verificar que se ha enviado el formulario con el metodo post para el envio de informacion confidencial
    // obtiene los valores del campo usuario y contrasena
    $usuario = $_POST["usuario"]; 
    $contrasena = $_POST["contrasena"];

    // comprueba que los datos ingresados coninciden con los establecidos
    if ($usuario === "Sena1234" && $contrasena === "Sena1234") { // datos configurados de incio de sesion
        // Redirige a modulos.html en caso de digitar los datos correctos
        header("Location: modulos.html");
        exit;
    } else {
        // mostrar un mensaje de error si los datos son incorrectos
        echo "Usuario o contraseña incorrectos. Por favor, intente de nuevo."; // echo para mostrar mensjae en pantalla
    }
}
?>