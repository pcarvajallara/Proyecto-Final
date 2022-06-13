<?php

    include('conex.php');
    session_start();

    $id_usuario = $_SESSION['id'];
    $id_hababitacion = $_POST['id_habitacion'];
    $habitacion = $_POST['habitacion'];
    $fecha_entrada=$_POST['fecha_entrada'];
    $fecha_salida=$_POST['fecha_salida'];
    $persona=$_POST['persona'];
    
    

    $query = "INSERT INTO `reserva`(`id_reserva`, `id_usuario`, `id_habitacion`, `fecha_entrada`, `fecha_salida`, `habitacion_reserva`, `persona_reserva`, `estado`)
     VALUES (NULL,'$id_usuario','$id_habitacion','$fecha_entrada','$fecha_salida','$habitacion','$persona','activo')";

    $resul=mysqli_query($con, $query) or die(mysqli_error($con));

    echo json_encode('ok');

    




?>