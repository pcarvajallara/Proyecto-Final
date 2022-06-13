<?php
include 'conex.php'; 


$idReserva = $_POST['id_reserva']; 

$query = "DELETE FROM reserva WHERE id_reserva = '{$id_reserva}' ";
$result = mysqli_query($con, $query); 
echo json_encode('ok');

?>