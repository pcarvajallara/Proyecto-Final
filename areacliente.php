<?php
 session_start(); 
 if (empty($_SESSION['id'])){
     header('Location: login.html');
 }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="css/estilo.css">   
<title>Document</title>
</head>
<body onload="Reserva(); usuario()">


    <div id="header"  class="row">
        <div class="col logo">
            <img class="img-fluid" style="height:100px ;" src="img/logo.jpg" alt="">
        </div>
        <div class="col">
            <nav>
                <ul>
                    <li><a href="areacliente.html">Area Cliente</a></li>
                    <?php
                         if ($_SESSION['id']){
                        echo ' <li><a href="api/logout.php">LogOut</a></li>';
                    }
                ?>
                   
                    <li><a href="registro.html">registro</a></li>
                    <li><a id="accion" href="reserva.html">Reserva</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    <div id="nombreCliente" class="row container ">

        <div class="col">
            <h1>Nombre de la persona</h1>
        </div>
        <div class="col">
            <img src="img/foto.jpg" height="100"  width="100" alt="">
        </div>
      </div>
  
        <div class="row">
            <div class="col-md-2"></div>
            <div id="contenido" class="col-md-8">
        
             
     
                  
            </div>
            <div class="col-md-2"></div>
        </div>

<script src="js/jquery.js"></script>
<script src="js/app.js"></script>
</body>
</html>