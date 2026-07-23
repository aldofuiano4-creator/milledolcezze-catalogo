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
