//Esta funcion carga las imagenes de las habatacion en el index
function cargarImagenes(){

    $.ajax({
    
      url: 'api/cargarimagen.php',
      dataType:'json', 
      type: 'POST',
      success: function(datos){
          
        let imagen1 = datos[0]['imagen'];
        $("#imagen1").html("<a href='reserva.html'><img class='img-fluid' src='"+ imagen1 +"' alt=''></a>")
        
        localStorage.setItem('id',datos[0].id)
        localStorage.setItem('imagen',datos[0].imagen )
        localStorage.setItem('precio',datos[0].precio )
        localStorage.setItem('descripcion',datos[0].descripcion)
        
        localStorage.setItem('id',datos[1].id)
        localStorage.setItem('imagen1',datos[1].imagen )
        localStorage.setItem('precio1',datos[1].precio )
        localStorage.setItem('descripcion1',datos[1].descripcion)
        
        $(datos).each(function (index, tabla) {
          $("#contenido").append("<div class='card mt-2' style='width: 18rem;'><img id='img'src='" + datos[index].imagen + "' class='card-img-top'><div class='card-body'> <h5 class='card-title'>" + datos[index].tipo_habitacion + "</h5><p class='card-text'>" + datos[index].descripcion + "</p></div></div> ")
  
        });
        },
      error: function(){
    
        $("#nombreP").text("Algo Anda Mal"); 
      }
    }); 
    }
    
    function cargarHabitacion(){
      let imagen = localStorage.getItem('imagen')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio'))
        $("#despHabitacion").html(localStorage.getItem('descripcion'))
    }
    
    function cambiarHabitacion(){
      let habitacion = $("#tipoHabitacion").val()
      console.log(habitacion)
      localStorage.setItem('habitacion', habitacion)

      $.ajax({
  
        url: 'api/cargarimagen.php',
        dataType: 'json',
        type: 'POST',
        success: function (datos) {
    
      
      
      if (habatacion == 0 ){
        let imagen = localStorage.getItem('imagen')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio'))
        $("#despHabitacion").html(localStorage.getItem('descripcion'))
      }   
      if (habitacion == 1 ){
        let imagen = localStorage.getItem('imagen1')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio1'))
        $("#despHabitacion").html(localStorage.getItem('descripcion1'))
      }  
      if (habitacion == 2 ){
        let imagen = localStorage.getItem('imagen2')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio2'))
        $("#despHabitacion").html(localStorage.getItem('descripcion2'))
      }  
      if (habitacion == 3){
        let imagen = localStorage.getItem('imagen3')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio3'))
        $("#despHabitacion").html(localStorage.getItem('descripcio3'))
      } 
      if (habitacion == 4 ){
        let imagen = localStorage.getItem('imagen4')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio4'))
        $("#despHabitacion").html(localStorage.getItem('descripcion4'))
      }  
      if (habitacion == 5 ){
        let imagen = localStorage.getItem('imagen5')
        $("#imagenHabitacion").html("<img id='imagenHabitacion' class='img-fluid mt-3' src='"+imagen+"' alt=''></img>")
        $("#precioHabitacion").html(localStorage.getItem('precio5'))
        $("#despHabitacion").html(localStorage.getItem('descripcion5'))
      }   
    
    
    },
  });
    }

   
    //Esta funcion carga las imagenes de las habatacion en el index
    function enviarDatos(){
      
    
      let habitacion = $("#tipoHabitacion").val()
      let fecha_entrada = $("#fecha_entrada").val()
      let fecha_salida = $("#fecha_salida").val()
      let persona = $("#persona").val()
    
        let parametros = {
    
          'habitacion' : habitacion,
          'fecha_entrada' : fecha_entrada,
          'fech_salida' : fecha_salida,
          'persona' : persona
          
    
        }
    
    
      $.ajax({
        url: 'api/reserva.php',
        dataType:'json', 
        type: 'POST',
        data: parametros , 
        success: function(datos){
          if (datos=='ok'){
            window.location = "areacliente.php";
    
          }
    
      
    
          },
        error: function(){
      
          $("#nombreP").text("Algo Anda Mal"); 
        }
      }); 
      }
    
    
      //Esta funcion carga las imagenes de las habatacion en el index
    function login(){
    
      let correo = $("#correo").val()
      let contra = $("#contrasena").val()
    
        let parametros = {
    
          'correo' : correo,
          'contrasena' : contrasena,
        }
    
    
      $.ajax({
        url: 'api/login.php',
        dataType:'json', 
        type: 'POST',
        data: parametros , 
        success: function(datos){
          console.log(datos)
          
          if (datos.id_usuario > 0) {
            localStorage.setItem("id_usuario",datos.id_usuario )
            localStorage.setItem("nombre_usuario",datos.nombre_usuario )
            window.location = "areacliente.php"; 
          }
          if (datos.tipo_usuario == 1) {
            localStorage.setItem("id_usuario", datos.id_usuario)
            localStorage.setItem("nombre_suario", datos.nombre_usuario)
            window.location = "areacliente.php";
          }
          else if (datos.tipo_usuario == 0) {
            window.location = "index.html"
          }
    
          localStorage.setItem('id',datos.id_usuario)
        },
    
          
        error: function(){
      
          $("#nombreP").text("Algo Anda Mal"); 
        }
      }); 
      }
    

     //Esta funcion carga las imagenes de las habatacion en el index
     function cargarReserva() {
  
      id = localStorage.getItem('id')
    
      $.ajax({
        url: 'api/cargarReserva.php',
        dataType: 'json',
        type: 'POST',
        data: { id: id },
        success: function (datos) {
    
          console.log(datos)
        
    
          $(datos).each(function (index, tabla) {
            $("#contenido").append("<div class='row container tarjeta mt-3'><div class='col-md-4'><img src='"+datos[index].imagen+"' height='170px' width='280px'class='mt-2' alt=''></div><div class='col-md-6 '><h3>Fecha de Entrada " + datos[index].fecha_entrada + "</h3><h3>Fecha de Salida " + datos[index].fecha_salida + "</h3><p>Cantidad de personas " + datos[index].persona_reserva + ", No. de habitacion: " + datos[index].habitacion_reserva + " </p><button onclick='eleminarReserva(" + datos[index].id_reserva + ")' class='btn btn-danger'>Cancelar</button></div></div>")
          });
    
        },
        error: function () {
    
          $("#nombreP").text("Algo Anda Mal");
        }
      });
    }

function eleminarReserva(id){


  let parametros = {

    'id_reserva' : id 
  }


$.ajax({
  url: 'api/eliminarReserva.php',
  dataType:'json', 
  type: 'POST',
  data: parametros , 
  success: function(datos){
    
    if (datos == 'ok'){
      $("#contenido").html(' ');
      cargarReserva();
      window.location = "areacliente.php";
    }


    },
  error: function(){

    $("#nombreP").text("Algo Anda Mal"); 
  }
}); 
}
function editarReserva() {
  
  let id=localStorage.getItem("habitacion");
  
  $.ajax({
    url: 'api/editarReserva.php',
    dataType: 'json',
    type: 'POST',
    
    success: function (datos) {

      console.log(datos)


    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });
}

function registro(){
  
  let nombre=$("#nombre").val();
  let correo=$("#correo").val();
  let contrasena=$("#contrasena").val();
  let direccion=$("#direccion").val();
  let telefono=$("#telefono").val();

  let parametros={
    'nombre':bombre,
    'correo':correo,
    'contrasena':contrasena,
    'direccion':direccion,
    'telefono':telefono,
  }


  $.ajax({
    url: 'api/registro.php',
    dataType: 'json',
    type: 'POST',
    data: parametros,
    success: function (datos) {
      if (datos=='ok'){
        window.location = "areacliente.php";

      }

    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });

}

function usuario(){

  $.ajax({
    url: 'api/usuario.php',
    dataType: 'json',
    type: 'POST',
    
    success: function (datos) {
     
      $("#name").html(datos.nombre_usuario)


    },
    error: function () {

      $("#nombreP").text("Algo Anda Mal");
    }
  });

}

