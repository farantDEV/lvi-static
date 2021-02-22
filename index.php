<!doctype html>
<html lang="fr-FR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Organisation et décoration de la maison">
        
        <link rel="icon" type="image/svg" href="assets/favicon/toits-lvi.svg">
        <link href="style.css" rel="stylesheet">
        <link rel="stylesheet"    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        
        <title>La vie d'intérieur</title>

    </head>
    <body>
        <header>
            <nav class="navbar">
                <div class="container ronds">
                    <button class="email-icon btn animate__animated animate__fadeIn" type="button">
                        <img src="assets/icon/mail.svg" alt="email icon" class="icons">
                    </button>
                    <button class="phone-icon btn animate__animated animate__fadeIn" type="button">
                        <img src="assets/icon/phone.svg" alt="phone icon" class="icons">
                    </button>
                    <button class="media-icon btn animate__animated animate__fadeIn" type="button">
                        <img src="assets/icon/media.svg" alt="media icon" class="icons">
                    </button>
                </div>
                <img src="assets/logo/logolvi+rd.svg" class="logo">
             </nav>
        </header>
        <main class="hero">
            <div class="hero-text">
                <h1 class="animate__animated animate__fadeInLeft"><span class="bcs ">Bien chez soi ,</span> <span class="bes animate__animated animate__fadeIn">bien en soi !</span></h1>
                <h2 class="bcs animate__animated animate__backInUp">Le corps est la demeure 
                    de l’âme Comme la maison 
                    est celle du corps.</h2>
            </div>
            <div class="promo">
                <h3 class="animate__animated animate__flipInX">Nouveaux services en ligne disponibles prochainement</h3>
                <img class="circles" src="assets/logo/circles.gif" alt="animated circles logo LVI"/>
                <div class="contact-form animate__animated animate__backInUp">
                    <p>Renseignez votre email pour recevoir des promotions exclusives</p>
                    <form method="post" action="#" enctype="text/plain" id="emailForm" onsubmit="sendMail()">
                        <input class="textarea" value="Entrez votre email" type="email" id="email" onfocus="if(this.value == 'Entrez votre email')this.value = '';" />
                        <input class="form-btn" type="submit" value="Je veux !" />
                    </form>
                </div>
                
            </div>
        </main>
        <aside class="contact">
            <a href="" class="link">CGU</a> | <a href="" class="link"> FACEBOOK</a> | <a href="" class="link"> LINKEDIN </a>| <a href="" class="link"> INSTAGRAM </a>
        </aside>
        <footer>
            <a class="nok-link" href="https://www.nok-it.com" target="_blank" rel="noopener">©AnotherNokCreation</a>
        </footer>
        <script>
            function sendMail(){
	           document.getElementById('emailForm').action = "mailto:mail@exemple?subject=liste%20des%20utilisateurs&body=Inscrivez-moi" + document.getElementById('email').value;
            }
        </script>
    </body>
    
</html>