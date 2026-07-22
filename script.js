let box = "";
let limite = 0;
let scelte = [];


function scegliBox(nome, massimo){

    box = nome;
    limite = massimo;
    scelte = [];

    document.getElementById("boxScelta").innerHTML =
    "Candy Box scelta: <b>" + box + "</b>";

    aggiorna();

}



function aggiungi(caramella){

    if(limite === 0){

        alert("Prima scegli una Candy Box!");

        return;
    }


    if(scelte.length >= limite){

        alert("Hai completato la tua Candy Box!");

        return;
    }


    scelte.push(caramella);

    aggiorna();

}



function aggiorna(){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";


    scelte.forEach(function(item){

        let li = document.createElement("li");

        li.innerHTML = "🍬 " + item;

        lista.appendChild(li);

    });



    let contatore = document.getElementById("contatore");


    if(limite > 0){

        contatore.innerHTML =
        "Hai scelto " + scelte.length +
        " gusti su " + limite;

    }


}



function ordina(){

    if(box === ""){

        alert("Scegli prima la Candy Box");

        return;

    }


    let messaggio =
    "Ciao MILLEDOLCEZZE, vorrei ordinare una Candy Box " 
    + box +
    ".\n\nLe mie caramelle:\n";


    scelte.forEach(function(item){

        messaggio += "- " + item + "\n";

    });


    let numero = "INSERISCI_NUMERO_WHATSAPP";


    window.open(
    "https://wa.me/" + numero +
    "?text=" + encodeURIComponent(messaggio)
    );


}
window.onload = function(){

    let contenitore = document.getElementById("caramelle");

    caramelle.forEach(function(item){

        let bottone = document.createElement("button");
  bottone.innerHTML =
"<img src='milledolcezze-catalogo/immagini/" + item.foto + "' width='100'><br>" +
item.emoji + " " + item.nome + " +";

        bottone.onclick = function(){

            aggiungi(item.nome);

        };

        contenitore.appendChild(bottone);

    });

};
