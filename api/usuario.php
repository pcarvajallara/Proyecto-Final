<?php


include('conex.php');
session_start();

$id_usu = $_SESSION['id'];

$query = "SELECT * FROM `usuario` WHERE id_usuario='{$id_usuario}'";

$result=mysqli_query($con, $query) or die(mysqli_error($con));
$row = mysqli_fetch_assoc($result);

if ($result->num_rows >= 1) {
   
    echo json_encode($row);
}

?>