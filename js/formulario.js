function validarUsuario(){
    console.log("*******ingreso al metodo********");
    var nombreHardcodeado = "pedro@hotmail.com";
    var nombre = document.getElementById("usuario").value;
    var contraseniaCodeada = 1234;
    var contrasenia = document.getElementById("password").value;

    if(nombre !="" && contrasenia != "" ){
        if(nombre == nombreHardcodeado && contrasenia == contraseniaCodeada){
            //redirecciona a la pagina donde se va a consumir la api
            location.href = './infoapi.html';
            // redireccionar();
        }else {
            alert("usuario y o contrasenia incorrecta");
        }
    }

    // function redireccionar() {
    //     window.location.replace("./infoapi.html")
    // }
    

}