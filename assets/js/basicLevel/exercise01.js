//Ejercicio numero 1.
const btnUser = document.getElementById("btnUser");
const wellcome = document.getElementById("wellcome");

//Funciones
const userData = () => {
  let userName = prompt("Ingresa nombre");
  let lastName = prompt("Ingresa apellido");
  let age = prompt("Ingresa la edad");
  let telephone = prompt("Ingresa numero de telefono");
  let mobile = prompt("Ingresa el numero de celular");
  let direction = prompt("Ingresa la direccion");

  localStorage.setItem("name", userName);
  localStorage.setItem("apell", lastName);
  localStorage.setItem("edad", age);
  localStorage.setItem("tel", telephone);
  localStorage.setItem("mob", mobile);
  localStorage.setItem("direc", direction);
};

if (localStorage.getItem("name")) {
  wellcome.innerHTML =
    "Informacion:" +
    localStorage.getItem("name") +
    localStorage.getItem("apell") +
    localStorage.getItem("edad") +
    localStorage.getItem("tel") +
    localStorage.getItem("mob") +
    localStorage.getItem("direc");
}

//Evento
btnUser.onclick = () => {
  userData();
};
