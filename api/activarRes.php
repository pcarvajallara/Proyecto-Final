<?php 

include 'conex.php'; 
 session_start();

 $idReserva = $_POST['idReserva']; 

$query = "UPDATE reserva SET estado = 'activo' where id_reserva = '{$id_reserva}' ";
$result = mysqli_query($con, $query); 
echo json_encode('ok');

?>