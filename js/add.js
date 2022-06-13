function admin(){
    $.ajax({
        url: '../api/admin.php',
        dataType: 'json',
        type: 'POST',
        
        success: function (datos) {
    
          console.log(datos)
        
    
          $(datos).each(function (index, tabla) {
            $("#contenido").append("<div class='row container tarjeta mt-3'><div class='col-md-4'><img src='../"+datos[index].imagen+"' height='170px' width='280px'class='mt-2' alt=''></div><div class='col-md-6 '><h3>Fecha de Entrada " + datos[index].fecha_entrada + "</h3><h3>Fecha de Salida " + datos[index].fecha_salida + "</h3><p>Cantidad de personas " + datos[index].personas_res + ", No. de habitacion: " + datos[index].habitacion_res + " </p><button onclick='cancelarReserva(" + datos[index].id_res + ")' class='btn btn-danger '>Cancelar</button>  <a href='https://wa.me/+1"+datos[index].telefono+"' class='btn btn-success'>WhatsApp</a></div></div>")
          });
    
        },
        error: function () {
    
          $("#nombreP").text("Algo Anda Mal");
        }
      });
    
}

function canceladas(){
  $.ajax({
    url: '../api/canceladas.php',
    dataType: 'json',
    type: 'POST',
    
    success: function (datos) {

      console.log(datos)
    

      $(datos).each(function (index, tabla) {
        $("#contenido").append("<div class='row container tarjeta mt-3'><div class='col-md-4'><img src='../"+datos[index].imagen+"' height='170px' width='280px'class='mt-2' alt=''></div><div class='col-md-6 '><h3>Fecha de Entrada " + datos[index].fecha_entrada + "</h3><h3>Fecha de Salida " + datos[index].fecha_salida + "</h3><p>Cantidad de personas " + datos[index].personas_res + ", No. de habitacion: " + datos[index].habitacion_res + " </p><button onclick='activar(" + datos[index].id_res + ")' class='btn btn-primary me-2'>Activar</button><button onclick='eliminar(" + datos[index].id_res + ")' class='btn btn-danger'>Eliminar</button>  </div></div>")
      });

    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });
  
 


}
function cancelarReserva(id) {
 

  let parametros = {

    'idReserva': id
  }


  $.ajax({
    url: '../api/eliminarReserva.php',
    dataType: 'json',
    type: 'POST',
    data: parametros,
    success: function (datos) {

      if (datos == 'ok') {
        $("#contenido").html(' ');
        raeadImg();
        window.location = "index.html";
      }


    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });
}

function eliminar(id){
  
  let parametros = {

    'idReserva': id
  }


  $.ajax({
    url: '../api/eliminar.php',
    dataType: 'json',
    type: 'POST',
    data: parametros,
    success: function (datos) {

      if (datos == 'ok') {
        $("#contenido").html(' ');
        raeadImg();
        window.location = "canceladas.html";
      }


    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });

}

function activar(id){
  
  let parametros = {

    'idReserva': id
  }


  $.ajax({
    url: '../api/activar.php',
    dataType: 'json',
    type: 'POST',
    data: parametros,
    success: function (datos) {

      if (datos == 'ok') {
        $("#contenido").html(' ');
        raeadImg();
        window.location = "canceladas.html";
      }


    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });

}

function habitaciones() {

  $.ajax({

    url: '../api/cargarimagen.php',
    dataType: 'json',
    type: 'POST',
    success: function (datos) {

    
      
     
      $(datos).each(function (index, tabla) {
        let cantidad=Math.floor( Math.random()*(1-50)+50);
        $("#contenido").append("<div class='card mt-2 bg-dark border border-white' style='width: 18rem;'><img id='img'src='../" + datos[index].imagen + "' class='card-img-top' height='170px' width='280px'><div class='card-body '> <h5 class='card-title'>" + datos[index].tipo_habitacion + "</h5><p class='card-text'> Disponible: " + cantidad + "</p></div></div>")

      });
      
    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });
}