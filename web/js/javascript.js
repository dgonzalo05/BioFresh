/* --- Slider -- */
//Cargador de eventos al iniciar la página
window.addEventListener('load',iniciar,false);

//Contador inicializado en cero
var contador=0;

function iniciar(){
    setInterval('cambiarImg()',6000);
}

function cambiarImg(){
    var obj=document.getElementById('slider');
    var obj2=obj.getElementsByTagName('img');

    if(contador==obj2.length){
        for(var i=0; i<obj2.length; i++){
            obj2[i].style.opacity='0';
            contador--;
        }
        obj2[contador].style.opacity='1';
    } else {
        obj2[contador].style.opacity='1';
        contador++
    }
}

/* --- navigation menu --- */
function select(num){
    deselect = document.getElementsByClassName("selected");
    for (var i = 0; i < deselect.length; i++){
        deselect[i].className = "noselected";
    }
    document.getElementsByClassName("noselected")[num].className = "selected";
}