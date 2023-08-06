let name = document.getElementById("nombre");
let email = document.getElementById("email");
let enviar = document.getElementById("enviar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


let regexTel = /^[0-9]{10}$/;

let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




enviar.addEventListener("submin", function (event) {
  event.preventDefault();
  alertValidacionesTexto.innerHTML = "";
  isValid = true;
  nombre.value = nombre.value.trim();
  nombre.style.border = "";


  if (nombre.value.length < 3) {
    //error
    alertValidacionesTexto.insertAdjacentHTML("afterend", `
    El <strong> Nombre</strong> no es corecto. </br>`);
    nombre.style.border = "solid thin red";
    isValid = false;
  }
});