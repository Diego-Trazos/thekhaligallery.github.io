let slider = document.querySelectorAll(".slider")[0];

let imagenes = document.querySelectorAll(".slider img");

let index = 1;

setInterval(function(){
    let porcentaje = index * -100;
    slider.style.transform = "translateX("+ porcentaje +"%)";

    index++;
    if(index > (imagenes.length - 1)){
        index = 0;
    }
}, 4000);