<?php

include 'conex.php';

$id=$_POST['id'];

$query = "SELECT reserva.id_reserva, reserva.id_usuario,reserva.id_habitacion,reserva.fecha_entrada,reserva.fecha_salida,reserva.habitacion_reserva, reserva.persona_reserva,habitacion.imagen,usuario.nombre_usuario,reserva.estado,usuario.telefono_usuario FROM reserva INNER JOIN habitacion ON reserva.id_habitacion=habitacion.id_habitacion INNER JOIN usuario on reserva.id_usuario=usuario.id_usuario WHERE reserva.id_reserva='{$id}' ;";


$result=mysqli_query($con, $query) or die(mysqli_error($con));
$row = mysqli_fetch_assoc($result);

if ($result->num_rows >= 1) {
   
    echo json_encode($row);
}

?>