datos = document.getElementById("datos");

datos.addEventListener('click',function(){
    obtenerInfo();
})


function obtenerInfo() {
    console.log("le acabas de dar click");

    // let url = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10';

    // instancio la peticion con in XMLHttpRequest
    const api = new XMLHttpRequest();
    // le voy a pasar el metodo, en este caso es get porque es para agarrar la info de la api
    api.open('GET',url,true);
    api.send();

    // aca le ponemos para verificar que no haya error al llamar a la api
    api.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            console.log(this.responseText);

            //vamos a transformar el contenido en un json

            let response = JSON.parse(this.responseText)
            confirm,sole.log(response);

            // pokemon = response["results"][0]["name"];
            // console.log(pokemon);

            // let resultado = document.getElementById("resultado");
            // resultado.innerHTML = "";
            // resultado.innerHTML += '<p>' + pokemon + '</p>';




        }
    }



}