<?php 

include 'conex.php'; 
 session_start();

 $id_reserva = $_POST['id_reserva']; 

$query = "UPDATE reserva SET estado = 'cancelada' where id_reserva = '{$id_reserva}' ";
$result = mysqli_query($con, $query); 
echo json_encode('ok');

?>

