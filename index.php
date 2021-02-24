<!doctype html>
<html lang="fr-FR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Organisation et décoration de la maison">
        
        <link rel="icon" type="image/svg" href="assets/favicon/toits-lvi.svg">
        <link href="style.css" rel="stylesheet">
        <link href="modal.css" rel="stylesheet">
        <link rel="stylesheet"    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        
        
        <title>La vie d'intérieur</title>

    </head>
    <body>
        <header>
            <nav class="navbar">
                <div class="container ronds">
                    <button class="email-icon btn animate__animated animate__fadeIn" type="button" >
                        <a href="admin/mailto.php">
                            <img src="assets/icon/mail.svg" alt="email icon" class="icons">
                        </a>
                    </button>
                    <button class="phone-icon btn animate__animated animate__fadeIn" type="button">
                        <a href="admin/phoneto.php">
                            <img src="assets/icon/phone.svg" alt="phone icon" class="icons">
                        </a>
                    </button>
                    <button data-modal="#modal-youtube" class="media-icon btn animate__animated animate__fadeIn" type="button">
                        <img src="assets/icon/media.svg" alt="media icon" class="icons">
                    </button>
                </div>
                <img src="assets/logo/logolvi+rd.svg" class="logo">
             </nav>
        </header>
        <div class="modal" data-modal-window id="modal-youtube">
            <iframe class="media-player" src="https://www.youtube.com/embed/CRS6yABFKBo" frameborder="0" allowfullscreen></iframe>
            <button data-modal-close>X</button>
            <div class="modal-text">
                <img class="modal-logo-lvi" src="assets/logo/logo-LVI-alt-clr.svg" alt="logo la vie d'intérieur">
                <h2 class="discount">jusqu'a -50% de remise</h2>
                <img class="modal-logo-rd" src="assets/logo/3rds.svg" alt="logo 3 ronds la vie d'intérieur">
                <p class="discount">Bénéficiez d'une remise de 10% lorsque vous recommandez nos services à votre entourage, offre cumulable jusqu'à 5 fois. <a href="">Voir conditions</a></p><br/>
                <p>Partagez sur vos réseaux</p>
                <div id="share-buttons">
                    <!-- Facebook -->
                    <a href="http://www.facebook.com/sharer.php?u=https://nok-it.com" target="_blank">
                        <img class="logo-rs" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                    </a>
                     <!-- LinkedIn -->
                    <a  href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://nok-it.com" target="_blank">
                        <img class="logo-rs" src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                    </a>
                    <!-- Twitter -->
                    <a href="https://twitter.com/share?url=https://nok-it.com&amp;text=La%20vie%20dinterieur&amp;hashtags=nok-it" target="_blank">
                        <img class="logo-rs" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                    </a>
                </div>
                
            </div>
        </div>
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
                    <form id="emailForm" >
                         <input class="emailArea" name="user_email" value="Entrez votre email" type="email" id="email" onfocus="if(this.value == 'Entrez votre email')this.value = '';" />
                        <input id="button" class="form-btn" type="submit" value="Je veux !"/>
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
        
        <script src="modal.js"></script>
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
        </script>
        <script type="text/javascript">
           (function(){
              emailjs.init("user_NXMQ7YnAIYzxPlZZscsiF");
           })();
        </script>
        <script src="sendEmail.js"></script>
        <script type=text/javascript> var name = "dupont" ;     var domain = "spam.com" ; var subject =             "subject=Anti spam" ; 
         function contactMail(){   
        document.write('<a href="mailto:' + name + '@' + domain + ' ?' + subject + '">') ; document.write(name + '@' + domain + '</a>') ;
         }
        </script>
    </body>
    
</html>