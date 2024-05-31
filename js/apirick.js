// function buscarPersonajes(done){
//     const resultados = fetch("https://rickandmortyapi.com/api/character")

//     resultados.then(response => response.json())
//     .then(datos => {
//         done(datos)
//     });
    

// }

// buscarPersonajes(datos => {
//     console.log(datos)

//     nombre = datos[results]
//     console.log(nombre)

//     // datos.resultados.array.forEach(personaje => {
//     //     const articulo = document.createRange().createContextualFragment();
        
//     // });



// });``

function buscarPersonajes(){
    console.log("busc");
    let url = 'https://rickandmortyapi.com/api/character';

    const api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);

            // vamos a convertir el contenido en un json
            let respuesta = JSON.parse(this.responseText)
            // console.log("esta es la respuesta: " , respuesta)
            // console.log(respuesta.results[0].name)
            personajes = respuesta.results;
            console.log(personajes);

            // rick = personajes[0].name;
            // console.log(rick);
            for(personaje in personajes){
                nombre = personajes[personaje].name;
                imagen = personajes[personaje].image;
                especie = personajes[personaje].species;
                


                // creo el contenedor de los personajes asique cada personaje tiene su propio contenedor
                contenedor = document.createElement("section");
                contenedor.classList.add("contenedor")

                // ahora creo el div donde va a estar la imagen, como le voy a poner un display flex lepongo una clase tambien
                divImagen = document.createElement("div");
                divImagen.classList.add("image-container");

                // creo el elemento imagen que luego agregaré en el div contenedor de la imagen
                imagenPersonaje = document.createElement("img");
                
                // le agrego el source de la imagen que anteriormente puse en una variable en el loop
                imagenPersonaje.src= imagen;

                //creo el elemento titulo de cada personaje
                nombrePers = document.createElement("h2");
                nombrePers.innerHTML = nombre;
                

                // creo el parrafo en el que va a aparecer la especie del personaje
                especiePers = document.createElement("p");
                especiePers.innerHTML = especie;
                


                // selecciono el elemnto padre ya existente en el doc
                elementoPadre = document.querySelector("main");

                // le inserto al div contenedor de imagen su imagen ya creada
                divImagen.appendChild(imagenPersonaje);

                // le agrego al contenedor el div con la imagen que acabo, de insertar
                contenedor.appendChild(divImagen);

                // le agrego al contender el titulo del personaje
                contenedor.appendChild(nombrePers);

                // le agrego al contenedor el parrafo que muestro la especie del personaje
                contenedor.appendChild(especiePers);

                //le inserto al elemento padre ya existente en el documento el contenedor que contendra eldiv y la imagen 
                elementoPadre.appendChild(contenedor)



                // const divdocumento = document.createElement("div");
                // textoNombre = document.createTextNode(nombre);


                
                // divImagen.appendChild(imagenPersonaje);
                
                // elementoPadre.appendChild(divdocumento);
                // divdocumento.appendChild(textoNombre);
                // divdocumento.appendChild(imagenPersonaje);
                
                



                
            }
        }
    }



}

buscarPersonajes();