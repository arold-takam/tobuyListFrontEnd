const ulItem = document.querySelector('.pay ul');
const listUl = Array.from(ulItem.querySelectorAll('li'));

console.log(listUl);

ulItem.addEventListener('click', function (e) {
    // 1. Trouver l'élément actuellement actif dans toute la liste
    const currentActiveItem = ulItem.querySelector('.active');

    // 2. Déterminer l'élément suivant
    let nextItem;

    if (currentActiveItem) {
        // Si un élément est déjà actif, l'élément suivant est son voisin
        nextItem = currentActiveItem.nextElementSibling;

        // Retirer la classe de l'élément actuel
        currentActiveItem.classList.remove('active');
    }

    // 3. Gérer la boucle : si c'est le dernier élément ou s'il n'y a pas encore d'actif
    if (!nextItem) {
        // S'il n'y a pas d'élément suivant (on est à la fin), ou si aucun n'était actif,
        // on revient au premier élément de la liste.
        nextItem = listUl[0];
    }

    // 4. Ajouter la classe 'active' à l'élément suivant (ou au premier)
    nextItem.classList.add('active');
});