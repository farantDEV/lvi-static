const btn = document.getElementById('button');

document.getElementById('emailForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_dot5k1s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      window.location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});