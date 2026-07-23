let box = "";
let limite = 0;
let scelte = [];


function scegliBox(nome, massimo){

    box = nome;
    limite = massimo;
    scelte = [];

    document.getElementById("boxScelta").innerHTML =
    "Candy Box scelta: " + box;

    aggiorna();

}


function aggiungi(nome){

    if(box === ""){

        alert("Scegli prima una Candy Box");

        return;

    }


    if(scelte.length >= limite){

        alert("Hai raggiunto il limite di gusti");

        return;

    }


    scelte.push(nome);

    aggiorna();

}

function aggiorna(){

    let lista = document.getElementById("lista");


    if(lista){

        lista.innerHTML = "";


        scelte.forEach(function(caramella, indice){


            let elemento = document.createElement("li");


            elemento.innerHTML =
            (indice + 1) + ") " + caramella;


            lista.appendChild(elemento);


        });

    }

}
