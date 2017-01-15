/* traduciendo titulo */
document.getElementById("form-signin-heading").innerHTML="Por favor inicia sesión";

/* traduciendo email */
var email = document.getElementById("inputEmail");
email.value="";
email.placeholder = "Correo Electrónico";


/* traduciendo contraseña */
var contraseña = document.getElementById ("inputPassword");
contraseña.value = "";
contraseña.placeholder = "Contraseña";


/* traduciendo checkbox */
document.querySelector("span").innerHTML="Recordar datos";

/* traduciendo botón*/
document.querySelector("button").innerHTML="Iniciar Sesión";