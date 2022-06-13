<?php 

    include 'conex.php'; 
    session_start();

    $correo = $_POST['correo']; 
    $contra  = $_POST['contrasena'];

  
    $query = "SELECT * FROM usuario where correo_usuario = '{$correo}' and contrasena_usuario = '{$contrasena}' ";
    $result = mysqli_query($con, $query); 
    $row = mysqli_fetch_assoc($result);

    if ($result->num_rows >= 1) {
            $_SESSION['id'] = $row['id_usuario'];
           
            echo json_encode($row);
        }

?>

