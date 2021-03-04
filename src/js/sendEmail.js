const btn = document.getElementById('button');

document.getElementById('emailForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'En cours...';

   const serviceID = 'default_service';
   const templateID = 'template_dot5k1s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "C'est fait";
      alert('Envoyé!');
      window.location.reload();
    }, (err) => {
      btn.value = 'Réessayez';
      alert(JSON.stringify(err));
    });
});