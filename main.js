// Fonction pour ouvrir le menu mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
// Marque le lien actif selon la page courante
function marqueLienActif() {
    const pageCourante = window.location.pathname.split('/').pop();
    const liens = document.querySelectorAll('.nav-links a');
    liens.forEach(lien => {
        const hreflien = lien.getAttribute('href');
        if (hreflien === pageCourante) {
            lien.classList.add('active');
        }
    });
}
// Ouvrir/fermer un accordeon
function toggleAccordeon(bouton) {
    const contenu = bouton.nextElementSibling;
    const estOuvert = contenu.classList.contains('ouvert');
    // Fermer tous les accordeons ouverts
    document.querySelectorAll('.accordeon-contenu').forEach(c => { c.classList.remove('ouvert'); });
    document.querySelectorAll('.accordeon-titre').forEach(b => { b.classList.remove('actif'); });
    // Si l'accordeon cliqué était fermé, l'ouvrir
    if (!estOuvert) {
        contenu.classList.add('ouvert');
        bouton.classList.add('actif');
    }
}
// Filtrer le contenu avec la barre de recherche
function filtrerContenu() {
    const recherche = document.getElementById('recherche').value.toLowerCase();
    const accordeons = document.querySelectorAll('.accordeon');
    accordeons.forEach(accordeon => {
        const texte = accordeon.textContent.toLowerCase();
        if (texte.includes(recherche)) {
            accordeon.style.display = 'block';
        } else {
            accordeon.style.display = 'none';
        }
    })
}