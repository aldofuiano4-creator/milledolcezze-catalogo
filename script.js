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
