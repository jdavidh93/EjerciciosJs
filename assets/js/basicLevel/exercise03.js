//Ejercicio numero 4
const btnUser = document.getElementById("btnUser");

const userData = () => {
    
  let userName = prompt("¿De que departamento deseas saber la capital?");

  console.log(userName);

  if (userName == "Amazonas" || userName == "amazonas") {
    alert("La capitan es Leticia");
  } else {
    if (userName == "Antioquia" || userName == "antioquia") {
      alert("La capital es Medellín");
    } else {
      if (userName == "Arauca" || userName == "arauca") {
        alert("La capital es Arauca");
      } else {
        if (userName == "Atlántico" || userName == "atlántico" || userName == "Atlantico" || userName == "atlantico") {
            alert("La capital es Barranquilla");
        } else {
            if (userName == "Bolívar" || userName == "bolívar" || userName == "Bolivar" || userName == "bolivar") {
                alert("La capital es Cartagena de indias");
            } else {
                if (userName == "Boyacá" || userName == "boyacá" || userName == "Boyaca" || userName == "boyaca") {
                    alert("La capital es Tunja");
                } else {
                    if (userName == "Caquetá" || userName == "caquetá" || userName == "Caqueta" || userName == "caqueta") {
                        alert("La capital es Yopal");
                    } else {
                        if (userName == "Cauca" || userName == "cauca") {
                            alert("La capital es Popayán");
                        } else {
                            if ( userName == "Cesar" || userName == "cesar") {
                                alert("La capital es Valledupar");
                            } else {
                                if (userName == "Chocó" || userName == "chocó" || userName == "Choco" || userName == "choco") {
                                    alert("La capital es Quibdó");
                                } else {
                                    if (userName == "Cundinamarca" || userName == "cundinamarca") {
                                        alert("La capital es Bogotá");
                                    } else {
                                        if (userName == "Guainía" || userName == "guainía" || userName == "Guainia" || userName == "guainia") {
                                            alert("La capital es Inírida");
                                        } else {
                                            if (userName == "Guaviare" || userName == "guaviare") {
                                                alert("La capital es San josé del guaviare");
                                            } else {
                                                if (userName == "Huila" || userName == "huila") {
                                                    alert("La capital es Neiva");
                                                } else {
                                                    if (userName == "Magdalena" || userName == "magdalena") {
                                                        alert("La capital es Santa Marta");
                                                    } else {
                                                        if (userName == "Meta" || userName == "meta") {
                                                            alert("La capita es Santa Villavicencio");
                                                        } else {
                                                            if (userName == "Nariño" || userName == "nariño") {
                                                                alert("La capital es San jose de pasto");
                                                            } else {
                                                                if (userName == "Norte de santander" || userName == "norte de santander") {
                                                                    alert("La capital es San josé de cúcuta");
                                                                } else {
                                                                    
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      }
    }
  }
};

//Evento
btnUser.onclick = () => {
  userData();
};
