<?php
 include('conex.php');

 $nombre=$_POST['nombre'];
 $correo=$_POST['correo'];
 $contrasena=$_POST['contrasena'];
 $direccion=$_POST['direccion'];
 $telefono=$_POST['telefono'];

 $query="INSERT INTO `usuario`(`id_usuario`, `nombre_usuario`, `correo_usuario`, `contrasena_usuario`, `direccion_usuario`, `telefono_usuario`,'estado') 
        VALUES (NULL,'$nombre','$correo','$contrasena','$direccion','$telefono','1')";
 $resul=mysqli_query($con, $query) or die(mysqli_error($con));

 echo json_encode('ok');

 


?>