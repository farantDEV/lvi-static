<!doctype html>
<html lang="fr-FR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Organisation et décoration de la maison">
        
        <link rel="icon" type="image/svg" href="assets/favicon/toits-lvi.svg">
        <link href="style.css" rel="stylesheet">
        
        <title>La vie d'intérieur</title>

    </head>
    <body>
        <header>
            <nav class="navbar">
                <div class="container ronds">
                    <button class="email-icon btn" type="button">
                        <img src="assets/icon/mail.svg" alt="email icon" class="icons">
                    </button>
                    <button class="phone-icon btn" type="button">
                        <img src="assets/icon/phone.svg" alt="phone icon" class="icons">
                    </button>
                    <button class="media-icon btn" type="button">
                        <img src="assets/icon/media.svg" alt="media icon" class="icons">
                    </button>
                </div>
                <img src="assets/logo/logolvi+rd.svg" class="logo">
             </nav>
        </header>
        <main class="hero">
            <div class="hero-text">
                <h1><span class="bcs">Bien chez soi ,</span> <span class="bes">bien en soi !</span></h1>
                <h2>Le corps est la demeure 
                    de l’âme Comme la maison 
                    est celle du corps.</h2>
            </div>
            <div class="promo">
                <h3>Nouveaux services en ligne disponibles prochainement</h3>
                <img class="circles" src="assets/logo/circles.gif" alt="animated circles logo LVI"/>
                <p>Renseignez votre email pour recevoir des promotions exclusives</p>
                <form method="post">
                    <input class="textarea" value="Entrez votre email" type="email" id="email" onfocus="if(this.value == 'Entrez votre email')this.value = '';" />
                    <input class="form-btn" type="button" value="Je veux !" onclick="sendEmail()"/>
                </form>
            </div>
        </main>
        <aside class="contact">
            <a href="" class="link">CGU</a> | <a href="" class="link"> FACEBOOK</a> | <a href="" class="link"> LINKEDIN </a>| <a href="" class="link"> INSTAGRAM </a>
        </aside>
        <footer>
            <a class="nok-link" href="https://www.nok-it.com" target="_blank" rel="noopener">©AnotherNokCreation</a>
        </footer>
    </body>
    
</html>