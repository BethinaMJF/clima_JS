let valorInput;
let container = document.getElementById('container');

function temperatura(){
    valorInput = Number(document.getElementById("input").value);

    if(valorInput <0){
        container.style.backgroundImage = 'url(img/gelado.gif)';
        document.getElementById("textoClima").innerHTML="GELADO";
    }
    else if (valorInput === 0 || valorInput < 20 ){
        container.style.backgroundImage = 'url(img/frio.gif)';
        document.getElementById("textoClima").innerHTML="FRIO";
    }
    else if (valorInput === 20 || valorInput < 30){
        container.style.backgroundImage = 'url(img/ameno.gif)';
        document.getElementById("textoClima").innerHTML="AMENO";
    }
    else if (valorInput === 30 || valorInput < 40){
        container.style.backgroundImage = 'url(img/quente.gif)';
        document.getElementById("textoClima").innerHTML="QUENTE";
    }
    else if (valorInput === 40 || valorInput < 50){
        container.style.backgroundImage = 'url(img/escaldante.gif)';
        document.getElementById("textoClima").innerHTML="ESCALDANTE";
    }
    else if (valorInput >= 50){
        container.style.backgroundImage = 'url(img/encandescente.gif)';
        document.getElementById("textoClima").innerHTML="ENCANDESCENTE";
    }
}