// Función global
let iframeGlobal = (()=>{ 
    // Retorna objeto con la propiedad setURL y como valor el método constructor de la clase Reproductor
    return {
        setURL: (url, id) => {
            id.setAttribute('src', url); // Agregamos la URL a la propiedad src del iFrame
            id.style.display = 'block'; //Agregamos el estilo block al id seleccionado
        }
    };
})();

// Clase Multimedia
class Multimedia {
    constructor(url){
        this._url = url; 
    };

    get url(){
        return this._url;
    };
};

// Clase Reproductor
class Reproductor extends Multimedia {
    constructor(url,id){
        super(url);
        this._id = id;
    };
    
    playMultimedia(){
        iframeGlobal.setURL(this.url,this._id);
    };

    // Método para indicar el segundo en que comienza el video
    setStart(currentTime){
        this._id.setAttribute('src',`${this.url}?start=${currentTime}`) 
    };
};


// Instancias de cada categoría, pasando como segundo parámetro el id de cada iFrame
let playMusica = new Reproductor("https://www.youtube.com/embed/RXKabdUBiWM?si=8fdf8VhdZ656__oM", music);
playMusica.playMultimedia();
playMusica.setStart(10);

let playPelicula = new Reproductor("https://www.youtube.com/embed/YdhPAyApRQ4?si=TpQWSvMGynpEl8nA", movies);
playPelicula.playMultimedia();
playPelicula.setStart(180);

let playSerie = new Reproductor("https://www.youtube.com/embed/suHAySTvWBw?si=BTXFtUfyTioxjeeC", series);
playSerie.playMultimedia();