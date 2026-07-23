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

    }

}

window.onload = function(){

    let contenitore = document.getElementById("caramelle");


    if(contenitore){


        caramelle.forEach(function(item){


            let card = document.createElement("div");

            card.className = "caramella";


            card.innerHTML =

            "<img src='images/" + item.foto + "'>" +

            "<h3>" + item.emoji + " " + item.nome + "</h3>" +

            "<button onclick=\"aggiungiCaramella('" 
+ item.nome.replace(/'/g, "\\'") +
"')\">Aggiungi</button>";


            contenitore.appendChild(card);


        });


    }

};function rimuovi(indice){

    scelte.splice(indice, 1);

    aggiorna();

}

