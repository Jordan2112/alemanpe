

    $('document').ready(function () {

        $('#Boton').click(botonIniciarSesion);
        
        $('#Contraseña').keypress(function(e) {
                if (e.keyCode == 13 ) { botonIniciarSesion(); }
        });

        function botonIniciarSesion() {

            var vLog = $('#Login').val();
            var vPas = $('#Contraseña').val();
        
                if (vLog == 'Jordan' && vPas=='Aleman') {
        
                    console.log('Inicio de sesion con exito');
        
                    $('#myModal .modal-header').addClass('modal-header-success');
                    $('#myModal .modal-header h2').text('Acceso Concedido');
                    $('#myModal .modal-body h3').text('Bienvenido');
                    $('#myModal').modal();
        
                    $("#myModal").on('shown.bs.modal',function() {
                        $('#botonCerrar').focus();
                        });
                    $("#myModal").on('hidden.bs.modal',function() {
                    
                        $('#myModal .modal-header').removeClass('modal-header-success');
                        
                        });
        
                    
        
                }
                else {
                    console.log('login incorrecto');
        
                    $('#myModal .modal-header').addClass('modal-header-danger');
                    $('#myModal .modal-header h2').text('Error en datos');
                    $('#myModal .modal-body h3').text('Intentelo de nuevo');
                    $('#myModal').modal();
        
                    $("#myModal").on('shown.bs.modal',function() {
                        $('#botonCerrar').focus();
                    });
                    $("#myModal").on('hidden.bs.modal',function() {
                        $('#myModal .modal-header').removeClass('modal-header-danger');
                        $('Boton').focus();
                    });
        
                }
        
        }});