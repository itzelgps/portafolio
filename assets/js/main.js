let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let lastname = document.getElementById("lastname");
let tel = document.getElementById("tel");
let msg = document.getElementById("msg");
let asunto = document.getElementById("asunto");
let enviar = document.getElementById("enviar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


enviar.addEventListener("click", function (event) {
  event.preventDefault();
  isValid = true;
  let regexTel = /^[0-9]{10}$/;
  let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  alertValidacionesTexto.innerHTML = "";
  nombre.value = nombre.value.trim();
  email.value = email.value.trim();
  tel.value = tel.value.trim();
  lastname.value = lastname.value.trim();
  asunto.value = asunto.value.trim();
  msg.value = msg.value.trim();

  if (nombre.value.length < 3) {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> Nombre</strong> no es corecto. </br>`);
    nombre.style.border = "solid thin red";
    isValid = false;
  }
  
  if (lastname.value.length < 3) {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    Los <strong> Apellidos</strong> no son corectos. </br>`);
    lastname.style.border = "solid thin red";
    isValid = false;
  }
  if (!regexEmail.test(email.value)) {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> correo </strong> es incorectos. </br>`);
    email.style.border = "solid thin red";
    isValid = false;
  }
  if (!regexTel.test(tel.value)) {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> telefono</strong> es incorectos. </br>`);
    tel.style.border = "solid thin red";
    isValid = false;
  }

  if (asunto.value === '') {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> asunto</strong> es vacio. </br>`);
    tel.style.border = "solid thin red";
    isValid = false;
  }

  if (msg.value === '') {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> mensaje </strong> es vacio. </br>`);
    tel.style.border = "solid thin red";
    isValid = false;
  }


});