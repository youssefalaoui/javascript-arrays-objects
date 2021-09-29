var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/* -------------------------------------------------------------------------- */
/*                               Tableau (Array)                              */
/* -------------------------------------------------------------------------- */
var maListeDeCourse = ['lait', 'fromage', 'confiture', 'pates', 'riz'];
console.log(maListeDeCourse[1]);
/* -------------------------------------------------------------------------- */
/*                               Objet (Object)                               */
/* -------------------------------------------------------------------------- */
var Bureau = /** @class */ (function () {
    function Bureau() {
    }
    return Bureau;
}());
var monBureau = new Bureau();
monBureau.fabricant = "Ikea";
monBureau.modele = "334-A";
monBureau.annee = '2019';
console.log(monBureau.fabricant); // ou bien monBureau["fabricant"]
/* -------------------------------------------------------------------------- */
/*         Les caractéristiques de Array et Object  /Tableaux (arrays)        */
/* -------------------------------------------------------------------------- */
// ajouter un élément 
maListeDeCourse.push('pain de mie'); // [ 'lait', 'fromage', 'confiture', 'pates', 'riz', 'pain de mie' ]
console.log(maListeDeCourse);
// supprimer le dernier élément du tableau
maListeDeCourse.pop(); // [ 'lait', 'fromage', 'confiture', 'pates', 'riz' ]
console.log(maListeDeCourse);
//  ajouter des éléments en début du tableau
maListeDeCourse.unshift('sirop', 'salade'); // [ 'sirop', 'salade', 'lait', 'fromage', 'confiture', 'pates', 'riz' ]
console.log(maListeDeCourse);
// supprimer le premier élément du tableau
maListeDeCourse.shift(); // [ 'salade', 'lait', 'fromage', 'confiture', 'pates', 'riz' ]
console.log(maListeDeCourse);
/* ---------------------- L’itération dans un tableau : --------------------- */
// For
for (var i = 0; i < maListeDeCourse.length; i++) {
    console.log(maListeDeCourse[i]); // afficher les elements de maListeDeCourse
}
// For of
for (var _i = 0, maListeDeCourse_1 = maListeDeCourse; _i < maListeDeCourse_1.length; _i++) {
    var item = maListeDeCourse_1[_i];
    console.log(item); // afficher les elements de maListeDeCourse
}
// Ou forEach()
maListeDeCourse.forEach(function (item) {
    console.log(item); // afficher les elements de maListeDeCourse
});
var bat = {
    nom: "Les Colibris",
    adresse: "33 rue Dupont",
    type: "residence"
};
// changer la valeur de la propriété nom
bat.nom = 'Les Champions'; // ou bien bat['nom'] = 'Les Champions'; // Resultat: { nom: 'Les Champions', adresse: '33 rue Dupont', type: 'residence' }
console.log(bat);
//  ajouter une nouvelle propriété 
bat.hauteur = 20;
bat.residents = ['Mr Dupont', 'Mme Dupont', 'Mme Jokivard'];
console.log(bat);
// supprimer une prop
delete bat.type; // ou bien delete bat['type']; // Resultat: { nom: 'Les Champions', adresse: '33 rue Dupont', hauteur: 20, residents: [ 'Mr Dupont', 'Mme Dupont', 'Mme Jokivard' ]}
console.log(bat);
/* ----------------------- L’itération dans un objet : ---------------------- */
// Boucle For in
for (var key in bat) {
    console.log(key); // cles de mon objet
    console.log(bat[key]); // valeurs associees aux cles
}
// Foreach
Object.keys(bat).forEach(function (key) {
    console.log(key); // cles de mon objet
    console.log(bat[key]); // valeurs associees aux cles
});
/* -------------------------------------------------------------------------- */
/*                                L’utilisation                               */
/* -------------------------------------------------------------------------- */
/* --------------------------- Le cas Insertion : --------------------------- */
// Insertion dans le cadre de tableaux:
var noms = ['Ahmed', 'Nicolas'];
var nomsPlusFin = __spreadArray(__spreadArray([], noms), ['Daniel']); // Resulat: ['Ahmed', 'Nicolas', Daniel];
var nomsPlusDebut = __spreadArray(['Axel'], noms); // Resulat: [‘Axel’, 'Ahmed', 'Nicolas'];
console.log(nomsPlusDebut);
// Inserer Jack au milieu
var indexMilieu = Math.round((noms.length - 1) / 2);
var nomPlusMilieu = __spreadArray(__spreadArray(__spreadArray([], noms.slice(0, indexMilieu)), [
    'Jack'
]), noms.slice(indexMilieu)); // Resultat: [ 'Ahmed', 'Jack', 'Nicolas' ]
console.log(nomPlusMilieu);
// Insertion dans le cadre d'objets:
bat.codePostal = 34000; // Resultat : { nom: 'Les Champions', adresse: '33 rue Dupont', hauteur: 20, residents: [ 'Mr Dupont', 'Mme Dupont', 'Mme Jokivard' ], codePostal: 34000}
console.log(bat);
/* -------------------------- Le cas Suppression : -------------------------- */
// Suppression dans le cadre de tableaux
var nomsGarcons = ["Ahmed", "Nicolas", "Sami", "Jack", "James"];
var nomSansLePremier = nomsGarcons.slice(1); //Resultat [ 'Nicolas', 'Sami', 'Jack', 'James' ]
var nomSansLeDernier = nomsGarcons.slice(0, -1); // Resultat [ 'Ahmed', 'Nicolas', 'Sami', 'Jack' ]
//- identifier le milieu pour pouvoir le supprimer
var milieu = Math.round((nomsGarcons.length - 1) / 2);
var nomsSansLeMilieu = __spreadArray(__spreadArray([], nomsGarcons.slice(0, milieu)), nomsGarcons.slice(milieu + 1)); // Resultat [ 'Ahmed', 'Nicolas', 'Jack', 'James' ]
//- supprimer Jack
var nomsSansJack = nomsGarcons.filter(function (nom) { return nom !== 'Jack'; }); // Resultat: [ 'Ahmed', 'Nicolas', 'Sami', 'James' ]
console.log(nomsSansJack);
// Suppression dans le cadre d'objets:
var bati = {
    nom: "Les Colibris",
    adresse: "33 rue Dupont",
    type: "residence"
};
delete bati.adresse; // Resultat: { nom: 'Les Colibris', type: 'residence' }
console.log(bati);
/* ------------------------- Le cas de Mise à Jour : ------------------------ */
// Mise a jour dans le cadre de tableaux
var nomsMisAJour = __spreadArray(__spreadArray(__spreadArray([], nomsGarcons.slice(0, 1)), ["Nico"]), nomsGarcons.slice(2)); // Resultat: [ 'Ahmed', 'Nico', 'Sami', 'Jack', 'James' ]
console.log(nomsMisAJour);
// Parcourir le tableau pour trouver le nom recherche 
var nomsMisAJourAvecRecherche = nomsGarcons.map(function (nom) {
    if (nom === 'Nicolas')
        return 'Nico';
    return nom;
}); // Resultat [ 'Ahmed', 'Nico', 'Sami', 'Jack', 'James' ]
console.log(nomsMisAJourAvecRecherche);
// Mise a jour dans le cadre d'objets
bati.type = "villa"; // Resultat: { nom: 'Les Colibris', type: 'villa' }
console.log(bati);
/* ---------------------------- Le cas iteration ---------------------------- */
// Tableau
var nomsMaj = nomsGarcons.map(function (nom) { return nom.toUpperCase(); }); // [ 'AHMED', 'NICOLAS', 'SAMI', 'JACK', 'JAMES' ]
// Objet
bat = {
    nom: "Les Colibris",
    adresse: "33 rue Dupont",
    type: "residence"
};
for (var key in bat)
    if (bat[key].toString().toUpperCase() != bat[key]) {
        bat[key] = bat[key].toString().toUpperCase();
    }
// Resultat { nom: 'LES CHAMPIONS', adresse: '33 RUE DUPONT', hauteur: 20, residents: 'MR DUPONT,MME DUPONT,MME JOKIVARD', codePostal: 34000}
console.log(bat);
// console.log(valeursEnMajuscule(bat));
var batimentTranformeEnArray = Object.keys(bat).map(function (key) { return bat[key]; }); // Resultat: [ 'LES CHAMPIONS', '33 RUE DUPONT', 20, 'MR DUPONT,MME DUPONT,MME JOKIVARD', 34000]
console.log(batimentTranformeEnArray);
// Autre manipulations de tableau
var prenoms = ["Ahmed", "Nicolas", "Sami", "Jack", "James"];
// noms ne depassant pas 4 characteres inclues.
var prenomsCourts = prenoms.filter(function (prenom) { return prenom.length < 5; }); // Resultat [ 'Sami', 'Jack' ]
// renverser l'ordre
prenomsCourts.reverse(); // [ 'James', 'Jack', 'Sami', 'Nicolas', 'Ahmed' ]
// calculer le nombre total de characteres dans le tableau
var nombreTotalDeChars = prenoms.reduce(function (total, name) {
    return total + name.length;
}, 0); // 25
console.log(nombreTotalDeChars);
