let box = "";

let limite = 0;

let scelte = [];


let categoriaAttuale = "Tutte";

let ricercaAttuale = "";




function scegliBox(nome, massimo){


    box = nome;

    limite = massimo;

    scelte = [];


    aggiorna();


}





function aggiungiCaramella(nome){


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





function rimuovi(indice){


    scelte.splice(indice,1);


    aggiorna();


}





function aggiorna(){


    let lista = document.getElementById("lista");



    if(lista){


        lista.innerHTML = "";



        scelte.forEach(function(caramella, indice){



            let elemento = document.createElement("li");



            elemento.innerHTML =

            (indice + 1) +
            ") " +
            caramella +
            " <button onclick=\"rimuovi(" +
            indice +
            ")\">❌</button>";



            lista.appendChild(elemento);



        });


    }



    let riepilogo = document.getElementById("boxScelta");



    if(riepilogo){



        if(box === ""){


            riepilogo.innerHTML =
            "Nessuna Candy Box selezionata";


        }else{


            riepilogo.innerHTML =

            "🍬 Candy Box scelta: " +
            box +
            "<br>Gusti scelti: " +
            scelte.length +
            "/" +
            limite;


        }


    }
    
let progress = document.getElementById("progress");

if(progress && limite > 0){

    let percentuale = (scelte.length / limite) * 100;

    progress.style.width = percentuale + "%";

}


}

function mostraCaramelle(){


    let contenitore = document.getElementById("caramelle");



    if(!contenitore){

        return;

    }



    contenitore.innerHTML = "";



    caramelle.forEach(function(item){



        let categoriaOk =

        categoriaAttuale === "Tutte" ||

        item.categoria === categoriaAttuale;



        let ricercaOk =

        item.nome.toLowerCase().includes(ricercaAttuale);



        if(categoriaOk && ricercaOk){



            let card = document.createElement("div");


            card.className = "card";



            card.innerHTML =


            "<img src='" +
            item.foto +
            "'>" +



            "<h3>" +
            item.emoji +
            " " +
            item.nome +
            "</h3>" +



            "<button onclick=\"aggiungiCaramella('" +

            item.nome.replace(/'/g,"\\'") +

            "')\">" +

            "➕ Aggiungi" +

            "</button>";



            contenitore.appendChild(card);



        }



    });



}




function filtraCategoria(categoria){


    categoriaAttuale = categoria;


    mostraCaramelle();


}





function filtraCaramelle(){


    let campo = document.getElementById("ricerca");



    if(campo){


        ricercaAttuale = campo.value.toLowerCase();


    }



    mostraCaramelle();



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




    let numero = "393669382980";



    let messaggio =

    "Ciao MILLEDOLCEZZE, vorrei ordinare:\n\n" +

    "🍬 Candy Box: " +
    box +

    "\n\n🍭 Gusti scelti:\n";




    scelte.forEach(function(caramella){


        messaggio +=

        "- " +
        caramella +
        "\n";


    });




    let link =

    "https://wa.me/" +

    numero +

    "?text=" +

    encodeURIComponent(messaggio);




    window.open(link, "_blank");


}




window.onload = function(){


    mostraCaramelle();


};
