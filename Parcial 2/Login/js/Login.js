function validar(){
    var usuario = $("#user").val();
    var password = $("#password").val();
    
    if(usuario == "Jordan" && password == "1234"){
        
        swal("Validación", "Bienvenido", "success");
    }
    else{
        swal("Validación", "Usuario y/o contraseña invalidos", "error");
    }
 }

    