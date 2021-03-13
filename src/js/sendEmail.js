document.getElementById('singular-form')
.addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_dot5k1s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {

    
      setTimeout(function(){
        window.location.href = 'http://localhost/lvi-static/';
      }, 1500);

    }, (err) => {

      alert(JSON.stringify(err));
    });
});
