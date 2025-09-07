// JavaScript for handling contact form submission

// Replace with your WhatsApp phone number in international format (e.g., "972501234567")
const phoneNumber = 'PHONE_NUMBER';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Gather form data
      const name = encodeURIComponent(document.getElementById('name').value);
      const email = encodeURIComponent(document.getElementById('email').value);
      const message = encodeURIComponent(document.getElementById('message').value);
      // Construct WhatsApp message
      const text = `Nom: ${name}%0aEmail: ${email}%0aMessage: ${message}`;
      // Open WhatsApp chat in a new tab/window
      if (phoneNumber === 'PHONE_NUMBER') {
        alert('Veuillez définir votre numéro WhatsApp dans script.js');
      }
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    });
  }
});