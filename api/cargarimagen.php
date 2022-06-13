<?php
include 'conex.php'
$tipo =$_GET["tipo"];

$query = "SELECT * FROM habitacion";
$resultado = mysqli_query($con, $query);

$datos = array();

while ($obj = mysqli_fetch_object($resultado)){

    $datos[] = array('id'=> $ obj=>id_habitacion
                     , 'cama'=> $obj->cama_habitacion
                     , 'numero'=> $obj->numero_habitacion
                     , 'edificio'=> $obj->edificio_habitacion
                     , 'imagen'=> $obj->imagen
                     , 'precio'=> $obj->precio_habitacion
                     , 'descripcion'=> $obj->descripcion

                    );
                }

                $fila = mysqli_num_rows($resultado);
            
                if ($fila > 0) {
                    
                    echo json_encode($datos);
                }else{
                }
            
            ?>