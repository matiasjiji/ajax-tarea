$(document).ready(function(){

$('#titulo').text('Creando cosas en jquery')

$('#btnagregar').click(function(){
    $('tbody').append('<tr><td>'+
     prompt('ingrese id: ') + '</td><td>' + 
     prompt('ingrese nombre: ') + '</td><td>' + 
     prompt('ingrese correo: ') + '</td><td>' + 
     prompt('ingrese numero: ') + '</td><td><button type="button" class="eliminar">eliminar</button></td></tr>');
});

$('#prueba').append('#titulo')


})