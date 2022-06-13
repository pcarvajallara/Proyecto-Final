<?php 


include 'conex.php'; 
 session_start();

 $id = $_SESSION['id']; 

 $query = "SELECT reserva.id_reserva, reserva.id_usuario,reserva.id_habitacion,reserva.fecha_entrada,reserva.fecha_salida,reserva.habitacion_reserva, reserva.persona_reserva,habiacion.imagen,usuario.nombre_usuario,reserva.estado FROM reserva INNER JOIN habitacion ON reserva.id_habacion=habitacion.id_habitacion INNER JOIN usuario on reserva.id_usuario=usuario.id_usuario WHERE reserva.estado='activo' and reserva.id_usuario='{$id}';";
 $result = mysqli_query($con, $query); 
 $row = mysqli_fetch_assoc($result);

 $datos = array();

 while ($obj = mysqli_fetch_object($result)) {

      $datos[] = array('id_reserva'=> $obj->id_reserva
                   ,'id_usuario'=> $obj->id_usuario
                   ,'id_oferta'=> $obj->id_oferta
                   ,'fecha_entrada'=> $obj->fecha_entrada
                   ,'fecha_salida'=> $obj->fecha_salida
                   ,'habitacion_reserva'=> $obj->habitacion_reserva
                   ,'persona_reserva'=> $obj->persona_reserva
                    ,'estado'=> $obj->estado
                 );	 

 }

 if ($result->num_rows >= 1) {
            echo json_encode($datos);
     }

?>