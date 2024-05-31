// Desafío grupal opcional(Promesas): Carla Hernandez, Karina Rivera, Germán Trigo

let cardsContainer = document.getElementById('cards');

// 1. Implementar ES6 para toda la estructura del código.
// 2. Crear una función asíncrona para obtener los datos de la URL.
const procesarDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const nAlbums = 20;
    let j = 0;
    // 3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await 
    //    para recibir el valor directamente de la promesa.
    try {
        let response = await fetch(url);
        let albums = await response.json();
        // 4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar 
        //    solamente los primeros 20 títulos de los datos recibidos.
        let album = '';
        for(let i = 0; i < nAlbums; i++) {
            album += `
                <div class="card col-6 bg-black mt-1">
                    <div class="card-body text-center">
                        <p class="card-title text-white fw-bold">Título id: ${albums[i].id}</p>
                        <span class="fw-bolder">${albums[i].title}</span>
                    </div>
                </div>
            `;
        };
        cardsContainer.innerHTML = album;

    } catch(error) {
        console.log("Error obteniendo la información", error)
    };
};


// 5. Crear una función que retorne una promesa después de tres (3) segundos utilizando 
//    setTimeout. El mensaje a retornar debe ser un string que indique: “Información 
//    Enviada”.
const success = () => {
    let segundos = 3000;
    return setTimeout(() => {
        console.log('¡Información Enviada!');
    }, segundos);
};

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en 
//    el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola 
//    del navegador, agregando el llamado a las dos funciones principales.
const getInfo = async () => {
    try {
        await success();
        await procesarDatos();
    } catch(error) {
        console.log('Información no disponible');
    };
};

getInfo();