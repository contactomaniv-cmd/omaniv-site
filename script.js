// Script to handle the contact form submission on all pages

// Remplacer par votre numéro WhatsApp en format international (sans +)
const phoneNumber = '972555088549';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Récupération des valeurs du formulaire et encodage pour l'URL
      const name = encodeURIComponent(document.getElementById('name').value.trim());
      const email = encodeURIComponent(document.getElementById('email').value.trim());
      const message = encodeURIComponent(document.getElementById('message').value.trim());
      // Construction du message WhatsApp (séparé par des sauts de ligne)
      const text = `Nom: ${name}%0aEmail: ${email}%0aMessage: ${message}`;
      // Ouverture de la conversation WhatsApp dans un nouvel onglet
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    });
  }
});