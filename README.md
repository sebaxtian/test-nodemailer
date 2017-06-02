# test-nodemailer
Repositorio creado para probar el uso de Nodemailer en el envio de Emails usando OAuth2 de Gmail SMTP.


## Configuración
No pude generar el *refreshToken* desde [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)

Para poder generar el *refreshToken* utilizo la herramienta que dispone el componente de PHPMailer la cual
permite ejecutando *get_oauth_token.php* obtener el *refreshToken* configurando el *clientId* y *clientSecret*
desde [Google API Manager](https://console.developers.google.com/)

* Ver Credenciales.png

* Reemplazar en *get_oauth_token.php* los atributos $redirectUri, $clientId y $clientSecret
* Ubicar el directorio *OAuth2-Token* en el directorio html de Apache asi:
$redirectUri = 'http://localhost/OAuth2-Token/get_oauth_token.php';

* Configurar Nodemailer usando la guía [Nodemailer OAuth2](https://nodemailer.com/smtp/oauth2/)
* Reemplazar en *app.js* los atributos clientId, clientSecret, refreshToken con los generados.
* Ejecutar *node app.js*


## Versioning

Release | Fecha
--------|--------
1.0.0   | jue jun  1 22:21:01 COT 2017
        |


## Authors

* **Sebastian Rios Sabogal** - *Initial work* - [Sebaxtian](https://about.me/sebaxtian)
