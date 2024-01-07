function calcular(){
    let expo = document.getElementById("expo").value;
    let adults = document.getElementById("adults").value;
    let kids = document.getElementById("kids").value;

    let precio_adulto;
    let precio_niño;

    if (expo == "select-expo" || adults == "select-adults"){
        document.getElementById("error").innerHTML = "Rellene los campos necesarios";
    }
    else{
        if (adults == "a-1"){
            precio_adulto = (15 * 1);
        }
        else if(adults == "a-2"){
            precio_adulto = (15 * 2);
        }
        else if(adults == "a-3"){
            precio_adulto = (15 * 3);
        }
        else if(adults == "a-4"){
            precio_adulto = (15 * 4);
        }
        else if(adults == "a-5"){
            precio_adulto = (15 * 5);
        }
        else{
            precio_adulto = (15 * 6);
        }

        console
        
        if (kids == "select-kids"){
            precio_niño = (0);
        }
        else if (kids == "k-1"){
            precio_niño = (7.35 * 1);
        }
        else if(kids == "k-2"){
            precio_niño = (7.35 * 2);
        }
        else if(kids == "k-3"){
            precio_niño = (7.35 * 3);
        }
        else if(kids == "k-4"){
            precio_niño = (7.35 * 4);
        }
        else{
            precio_niño = (7.35 * 5);
        }

        let precio_final = precio_adulto + precio_niño;
        console.log(precio_final + "€");
        document.getElementById("output-precio").innerHTML = precio_final + "€";
    }
}