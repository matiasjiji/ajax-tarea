$(document).ready(function(){
    
    $.get({
        url: 'https://reqres.in/api/users', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        }
    });
/*
    $.post({
        url: 'https://reqres.in/api/users?page=2', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        } 
    })

    $.post({
        url: 'https://reqres.in/', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        } 
    })
*/
//----------------------------------------------------
//probando
/*
    $.get({
        url: 'https://my-json-server.typicode.com/alaravena/ldp3101/usuarios', //DIRECCIÓN SERVER
        data: JSON, //Optativo
        dataType: 'json', //Optativo
        success: function(respuesta) {
            console.table(respuesta);
        },
        error: function() {
            console.error("Sin Respuesta");
        }
    });
*/
//----------------------------------------------------
//probando



// $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
// function(data){
//     $.each(data, function(i, item){
//         $('#table').append('<tr><td>'+ item.id + '</td><td>' + item.nombre + 
//         '</td><td>' + item.email + '</td><td>' + '</td><td>' + item.edad +
//         '</td><td><img src=' + item.avatar +'></td><td><button id="eliminar" class="eliminar" type="button">Quitar</button></td></tr>');
//     });
//     $('.eliminar').click(function(){
//         var probando = $('tr');
//         probando[1].remove();
//     });
//     $('#agregar').click(function(data){
//         $('#table').append('<tr><td>jiji</td><td>jiji</td><td>hola</td><td>hola</td><td>hola</td><td><img src=></td><td><button id="eliminar" class="eliminar" type="button">Quitar</button></td></tr>');
//         // $('#table').append(data);
//     })
// });


//------------------------------------------------------------------------------------------------------------------------------------------

// este es de prueba aun me faltan unas cuantas cosas que probar
$('#agregar').click(function(){
    $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
        function(data){
            $.each(data, function(i, item){
                $('#table').append('<tr><td class="bgid">'+ item.id + '</td><td class="bgname">' + item.nombre + 
                '</td><td class="bgemail">' + item.email + '</td><td class="bgedad">'  + item.edad +
                '</td><td><img src=' + item.avatar +'></td> <td><button id="eliminar" class="eliminar" type="button">Quitar</button></td> <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button></td></tr>');

                var eliminar = $('.eliminar');
                eliminar.click(function(){
                    $(this).parents('tr').remove();
                });
                    var id = item.id;
                    var nombre = item.nombre;
                    var email = item.email;
                    var edad = item.edad;
                    var modal = $('.modal-body');
                    // var id = $('.bgid');
                    // var nombre = $('.bgname');
                    // var email = $('.bgemail');
                    // var edad = $('.bgedad');
                    // var fila = $('.bgid') +  $('.bgname') + $('.bgemail') + $('.bgedad');
                    $('tbody').show(function(){
                        modal.text(id + ' ' + nombre + ' ' + email + ' ' + edad);
                        // $('.modal-body').text(id + ' ' + nombre + ' ' + email + ' ' + edad);
                        // $('.modal-body').text(fila);
                    })
            });

        });
        
        //CTRL + SHIFT + Z == DEVUELVE
})



                //OPCION 2
                // $('.eliminar').click(function(){
                // // var probando = $('tr');
                // // probando[index].remove();
                // var index = $('.eliminar').index(this) + 1
                // console.log(index);
                // var probando = $('tr');
                // probando[index].remove();
                // });
                //OPCION 3
                // $('.eliminar').click(function(){
                //     var probando = $('tr');
                //     probando[1].remove();
                //     });

});