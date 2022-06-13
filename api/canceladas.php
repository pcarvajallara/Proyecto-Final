<?php

include 'conex.php';

$query = "SELECT reserva.id_reserva, reserva.id_usuario,reserva.id_habitacion,reserva.fecha_entrada,reserva.fecha_salida,reserva.habitacion_reserva, reserva.persona_reserva,habitacion.imagen,usuario.nombre_usuario,reserva.estado,usuario.telefono_usuario FROM reserva INNER JOIN habitacion ON reserva.id_habitacion=habitacion.id_habitacion INNER JOIN usuario on reserva.id_usuario=usuario.id_usuario WHERE reserva.estado='cancelada' ;";
$result = mysqli_query($con, $query); 
$row = mysqli_fetch_assoc($result);

$datos = array();

while ($obj = mysqli_fetch_object($result)) {

     $datos[] = array('id_reserva'=> $obj->id_reserva 
                       ,'id_usuario'=> $obj->id_usuario
                       ,'fecha_entrada'=> $obj->fecha_entrada
                       ,'fecha_salida'=> $obj->fecha_salida
                       ,'habitacion_reserva'=> $obj->habitacion_reserva
                       ,'persona_reselva'=> $obj->personas_reserva
                       ,'imagen'=>$obj->imagen
                       ,'nombre'=>$obj->nombre_usuario
                       ,'estado'=>$obj->estado
                       ,'telefono'=>$obj->telefono_usuario
                        
                         
                );	 

}

if ($result->num_rows >= 1) {
    echo json_encode($datos);
}

?>