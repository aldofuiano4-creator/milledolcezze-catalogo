let box = "";
let limite = 0;
let scelte = [];


function scegliBox(nome, massimo){

    box = nome;
    limite = massimo;
    scelte = [];

    document.getElementById("boxScelto").innerHTML =
    "Candy Box scelta: " + box;

    aggiorna();
}


function aggiungi(nome){

    if(box === ""){
        alert("Scegli prima una Candy Box");
        return;
    }

    if(scelte.length >= limite){
        alert("Hai raggiunto il limite di gusti per questa box");
        return;
    }

    scelte.push(nome);

    aggiorna();
}

function aggiorna(){

    let lista = document.getElementById("listaScelte");
    let contatore = document.getElementById("contatore");

    if(lista){

        lista.innerHTML = "";

        scelte.forEach(function(caramella, indice){

            let elemento = document.createElement("li");

            elemento.innerHTML =
            (indice + 1) + ") " + caramella;

            lista.appendChild(elemento);

        });

    }


    if(contatore){

        contatore.innerHTML =
        "Gusti scelti: " + scelte.length + "/" + limite;

    }

}

function ordina(){

    if(box === ""){
        alert("Scegli prima una Candy Box");
        return;
    }


    if(scelte.length === 0){
        alert("Scegli almeno un gusto");
        return;
    }


    let numero = "INSERISCI_NUMERO_WHATSAPP";


    let messaggio =
    "Ciao MILLEDOLCEZZE, vorrei ordinare una Candy Box da " 
    + box +
    ".\n\nGusti scelti:\n";


    scelte.forEach(function(caramella){

        messaggio += "- " + caramella + "\n";

    });


    let link =
    "https://wa.me/" +
    numero +
    "?text=" +
    encodeURIComponent(messaggio);


    window.open(link, "_blank");

}

window.onload = function(){

    let contenitore = document.getElementById("catalogo");


    if(contenitore){

        caramelle.forEach(function(item){


            let card = document.createElement("div");

            card.className = "caramella";


            card.innerHTML =

            "<img src='images/" + item.foto + "'>" +

            "<h3>" + item.emoji + " " + item.nome + "</h3>" +


            "<button onclick=\"aggiungi('" 
            + item.nome +
            "')\">Aggiungi</button>";


            contenitore.appendChild(card);


        });

    }

};
