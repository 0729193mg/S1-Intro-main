
compteur = 1;


function ajouter() {

    //va chercher ds ID "desc" la valeur et la donner à la variable item
    let item = document.getElementById("desc").value;

    //Créer une variable pour la valeur et lui donner la valeur de l'ID "valeur"
    let prix = document.getElementById("valeur").value;

    //Créer une balise <li>
    let nouveauLi = document.createElement("li");

    //créer un span sur la valeur monétaire
    let nouveauSpan = document.createElement("span");

    //Écrire dans la liste nouvellement créé
    nouveauLi.innerTest = item + " : "
    nouveauSpan.innerTest = prix + " $ "

    //va mettre "nouveauLi" ds le ID "maListe" à la fin de la liste -- Ajouter le paragraphe à la ligne
    document.getElementById("maListe").append(nouveauLi);

    //mettre le nouveauSpan à la fin du nouveauLi
    nouveauLi.append(nouveauSpan);


    //Mettre à jour le total
    let ancienPrix = document.getElementById("Total").innerText;
    let nouveauPrix = +ancienPrix + +prix;  //+varible : convertir en numérique
document.getElementById("Total").innerText = nouveauPrix;

//Creer des nouveaux input hidden dans le formulaire pour envoyer par courriel
    nouveauInput=document.createElement("input");
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name","Item_"+compteur);
    nouveauInput.setAttribute("value",item);
    document.forms[0].append(nouveauInput);
    compteur++;





}

function ajouterEmail(){
    var email=document.getElementById("email").value;
    document.forms[0].action="mailto:"+email;
}

function effacer(){
    docum.forms[0].action="";
}






//Inscrit dans la page "item" après avoir clické sur le bouton ajouter
//document.getElementById("maListe").append(item);

//Créer un Pop-up d'alerte
//alert("L'item est bien ajouté")





/*//Code non expliqué
nouveauInput = document.createElement("input");
nouveauInput.setAttribute("value", item);
nouveauInput.setAttribute("hidden",true);
nouveauInput.setAttribute("name", "item "+compteur);
compteur++;
document.forms[0].append(nouveauInput);
//alert("L'item est bien ajouté"); // Pop-up
}

function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}

console.log("Bonjour");*/







