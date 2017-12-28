/* --- Slider -- */
//Cargador de eventos al iniciar la página
window.addEventListener('load',startSlider,false);

// Iniciando el slider;
function startSlider(){
    setInterval(slide,8000);
}

// Imagenes que forman el slider
var image = ["img/frame-01.jpg","img/frame-02.jpg"]
var contSlide = 0;

// Cambio de imagenes
function slide(){
    contSlide++;
    if (contSlide >= image.length){
        contSlide = 0;
    }
    document.getElementById("slider").src = image[contSlide];
}
/* --- /Slider --- */

/* --- Menu de navegación --- */
function select(num){
    deselect = document.getElementsByClassName("selected");
    for (var i = 0; i < deselect.length; i++){
        deselect[i].className = "noselected";
    }
    document.getElementsByClassName("noselected")[num].className = "selected";
}
/* --- /Menu de navegación --- */

function showArticle(pos){
    var tec = document.getElementById("tec");
    // Mostrando lo seleccionado
    tec.getElementsByClassName("visible")[1].removeAttribute("class");
    tec.getElementsByTagName("article")[pos].setAttribute("class","visible");
    
    // Subrrallando la opcion clicada
    var lista = tec.getElementsByTagName("ul")[0];
    lista.getElementsByClassName("selected")[0].removeAttribute("class");
    lista.getElementsByTagName("li")[pos - 1].setAttribute("class","selected");
    
}