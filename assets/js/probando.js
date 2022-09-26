$(document).ready(function(){

$('#titulo').text('Creando cosas en jquery')

// $('#btnagregar').click(function(){
//     $('tbody').append('<tr><td>'+
//      prompt('ingrese id: ') + '</td><td>' + 
//      prompt('ingrese nombre: ') + '</td><td>' + 
//      prompt('ingrese correo: ') + '</td><td>' + 
//      prompt('ingrese numero: ') + '</td><td>' + '<button type="button" class="eliminar">eliminar</button>' + '</td></tr>');
//      var eliminar = $('.eliminar');
//      eliminar[1].click(function(){
//         $('tr').remove();
//      })
// });

// $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
//     function(datos){
//         $.each(datos, function(index,item){
//             $("#tabla").append("<tr><td>" + item.id + "</td><td>" + item.nombre +
//             "</td><td>" + item.email + "</td><td>" + 
//             '<button type="buuton" id="aliminar" class="eliminar">eliminar</button>');
//             });
//             var borrar = $('.eliminar');
//             eliminar.click(function(){
//                 $(this).parents('tr').remove();
//         });
//     }
// )


// $('#agregarF').click(function(){
//     confirm('estas seguro de querer agregar una fila');
//     $('#tabla').append('<tr><td>'+
//          prompt('ingrese id: ') + '</td><td>' + 
//          prompt('ingrese nombre: ') + '</td><td>' + 
//          prompt('ingrese correo: ') + '</td><td>' + 
//          prompt('ingrese numero: ') + '</td><td>' + '<button type="button" class="eliminar">eliminar</button>' + '</td></tr>');
// })
$('#agregar').click(function(){
    $.get("https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
                function (datos) { //los datos json lo guardamos en la variable datos y lo recorremos

                    $.each(datos, function (i, item) { //posicion = i / item = el dato donde se almacenara el elemento json y tiene categorias con datos por ejemplo .nombre tiene el dato de juan perez, etc.

                        $("#tabla").append("<tr><td>" + item.id + "</td><td>" + item.nombre +
                            "</td><td>" + item.email + "</td><td>" + "<button class='eliminar'>Eliminar</button>" + "</td></tr>");

                        // este codigo solo se ejecutara en los datos del ajax
                        var eliminar = $('.eliminar');
                        eliminar.click(function () {
                            $(this).parents('tr').remove(); //seleccionamos y hacemos referencia al boton que esta metido en un td con la clase .eliminar y seleccionamos a los elementos padres de este td que seria el tr
                        });

                    });

                });
})


})