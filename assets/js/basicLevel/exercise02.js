//Ejercicio numero 3.
let userName = prompt(
  "Ingresa una de las siguintes palabras: casa, mesa, perro ,gato) para mirar el resultado en ingles"
);

house = "casa";
desk = "mesa";
dog = "perro";
cat = "gato";

switch (userName) {
  case "casa":
    alert("Casa en ingles es: House");
    break;
  case "mesa":
    alert("Mesa en ingles es: Desk");
    break;
  case "perro":
    alert("Perro en ingles es: Dog");
    break;
  case "gato":
    alert("Gato en ingles es: Cat");
    break;
  default:
    alert("Por favor ingrese una de las palabras mencionadas");
    break;
}
