function redirec(){
    document.location.href="https://nok-it.com";
}


document.getElementById('singular-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_dot5k1s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      setTimeout(redirec(), 2000);

    }, (err) => {
      btn.value = 'Réessayez';
      alert(JSON.stringify(err));
    });
});