function ajouter() {
    //va chercher ds ID "desc" la valeur et la donner à la variable item
    var item = document.getElementById("desc").value;

    //Créer une balise <li>
    let nouveauLi = document.createElement("li");

    //Créer une variable pour la valeur et lui donner la valeur de l'ID "valeur"
    let prix = document.getElementById("valeur").value;

    //Écrire dans le paragraphe
    nouveauLi.innerText = item;

    //va mettre "nouveauLi" ds le ID "maListe" à la fin de la liste -- Ajouter le paragraphe à la ligne
    document.getElementById("maListe").append(nouveauLi);

    //mettre la variable "valeur" dans le li de l'item. --> nouveauLi
    nouveauLi.innerText = item + " : " + prix + " $ ";

    //créer un span sur la valeur monétaire
    let nouveauSpan = document.createElement("span");

    nouveauLi.innerTest = item + " : "
    nouveauSpan.innerTest = prix + " $ "

    document.getElementById("maListe").append(nouveauLi);


    //Mettre à jour le total

    let ancienPrix = document.getElementById("Total").innerText;
    let nouveauPrix = +ancienPrix + +prix;  //+varible : convertir en numérique


}


//Inscrit dans la page "item" après avoir clické sur le bouton ajouter
document.getElementById("maListe").append(item);

//Créer un Pop-up d'alerte
alert("L'item est bien ajouté")











