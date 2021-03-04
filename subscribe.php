<! doctype html>
<html lang="fr-FR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Bien chez soi, bien en soi: Recevez nos offres de Promotions">
        <link href="button.css" rel="stylesheet">
        <link rel="icon" type="image/svg" href="assets/favicon/fav3.svg">


        <title>La vie d'intérieur | Inscriptions</title>

    </head>
    <body>

        <div class="text-promo">
            <p>Renseignez votre email pour recevoir des promotions exclusives</p>
        </div>
        <div class="container">

            <form id="singular-form">

                <button class="shown" type="button" id="trigger">Je veux !</button>

                <div id="input-container">
                    <input id="u-mail" name="user_email" type="text" placeholder="E-mail">
                    <button id="button" type="submit">Envoyer</button>
                </div>

                <div id="success">Merci !</div>

            </form>

        </div>
        <div class="text-promo" id="backHome">
            <p>Vous allez être redirigé vers la page d'accueil, si ce n'est pas le cas cliqué <a href="http://localhost/lvi-static/">ICI</a>
            </p>
        </div>

        <script src="button.js"></script>
        <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
        </script>
        <script type="text/javascript">
           (function(){
              emailjs.init("user_NXMQ7YnAIYzxPlZZscsiF");
           })();
        </script>
        <script src="sendEmail.js"></script>
        <script src="hide.js"></script>

    </body>
</html>
