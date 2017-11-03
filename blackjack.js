
var cartas = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var nombre_jugador = document.getElementById("nombre").value;
console.log(nombre_jugador);
//boton juego
function juego() {
  //carta aleatoria para el jugador
  var aleatoria_j1 = cartas.length;
  carta_aleatoria_j1 = Math.floor(Math.random()*aleatoria_j1);
  document.getElementById("juego_jugador").value =cartas[carta_aleatoria_j1];

  var aleatoria_j2 = cartas.length;
  carta_aleatoria_j2 = Math.floor(Math.random()*aleatoria_j2);
  document.getElementById("juego_jugador").value = (cartas[carta_aleatoria_j1] + " - " + cartas[carta_aleatoria_j2]);

  //carta aleatoria para el diler
  var aleatoria_d1 = cartas.length;
  carta_aleatoria_d1 = Math.floor(Math.random()*aleatoria_d1);
  document.getElementById("juego_diler").value =cartas[carta_aleatoria_d1];

  suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];

    if (cartas[carta_aleatoria_j1]===cartas[9]) {
      cartas[carta_aleatoria_j1]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j1]===cartas[10]) {
      cartas[carta_aleatoria_j1]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j1]===cartas[11]) {
      cartas[carta_aleatoria_j1]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j1]===cartas[12]) {
      cartas[carta_aleatoria_j1]=11;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }

    if (cartas[carta_aleatoria_j2]===cartas[9]) {
      cartas[carta_aleatoria_j2]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j2]===cartas[10]) {
      cartas[carta_aleatoria_j2]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j2]===cartas[11]) {
      cartas[carta_aleatoria_j2]=10;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }else if (cartas[carta_aleatoria_j2]===cartas[12]) {
      cartas[carta_aleatoria_j2]=11;
      suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];
    }
}

//boton carta del jugador
function carta() {
  //2 carta para jugador
  var aleatoria_j3 = cartas.length;
  carta_aleatoria_j3 = Math.floor(Math.random()*aleatoria_j3);
  document.getElementById("juego_jugador").value = (cartas[carta_aleatoria_j1] + " - " + cartas[carta_aleatoria_j2] + " - " + cartas[carta_aleatoria_j3]);

    suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];

      if (cartas[carta_aleatoria_j1]===cartas[9]) {
        cartas[carta_aleatoria_j1]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[10]) {
        cartas[carta_aleatoria_j1]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[11]) {
        cartas[carta_aleatoria_j1]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[12]) {
        cartas[carta_aleatoria_j1]=11;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }

      if (cartas[carta_aleatoria_j2]===cartas[9]) {
        cartas[carta_aleatoria_j2]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[10]) {
        cartas[carta_aleatoria_j2]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[11]) {
        cartas[carta_aleatoria_j2]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[12]) {
        cartas[carta_aleatoria_j2]=11;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }

      if (cartas[carta_aleatoria_j3]===cartas[9]) {
        cartas[carta_aleatoria_j3]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[10]) {
        cartas[carta_aleatoria_j3]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[11]) {
        cartas[carta_aleatoria_j3]=10;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[12]) {
        cartas[carta_aleatoria_j3]=11;
        suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }

    if (suma>21)
    {
      alert("Te volaste. \nGana DILER");
    }
}

function plantar() {
  var aleatoria_d2 = cartas.length;
  carta_aleatoria_d2 = Math.floor(Math.random()*aleatoria_d2);
  document.getElementById("juego_diler").value = (cartas[carta_aleatoria_d1] + " - " + cartas[carta_aleatoria_d2]);

      suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];

        if (cartas[carta_aleatoria_d1]===cartas[9]) {
          cartas[carta_aleatoria_d1]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d1]===cartas[10]) {
          cartas[carta_aleatoria_d1]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d1]===cartas[11]) {
          cartas[carta_aleatoria_d1]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d1]===cartas[12]) {
          cartas[carta_aleatoria_d1]=11;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }

        if (cartas[carta_aleatoria_d2]===cartas[9]) {
          cartas[carta_aleatoria_d2]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d2]===cartas[10]) {
          cartas[carta_aleatoria_d2]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d2]===cartas[11]) {
          cartas[carta_aleatoria_d2]=10;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }else if (cartas[carta_aleatoria_d2]===cartas[12]) {
          cartas[carta_aleatoria_d2]=11;
          suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];
        }

          //comparacion de resultados para pedir mas cartas
          if (suma2<suma) {
            var aleatoria_d3 = cartas.length;
            carta_aleatoria_d3 = Math.floor(Math.random()*aleatoria_d3);
            document.getElementById("juego_diler").value = (cartas[carta_aleatoria_d1] + " - " + cartas[carta_aleatoria_d2]+" - "+ cartas[carta_aleatoria_d3]);

            suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2] + cartas[carta_aleatoria_d3];

              if (cartas[carta_aleatoria_d1]===cartas[9]) {
                cartas[carta_aleatoria_d1]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d1]===cartas[10]) {
                cartas[carta_aleatoria_d1]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d1]===cartas[11]) {
                cartas[carta_aleatoria_d1]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d1]===cartas[12]) {
                cartas[carta_aleatoria_d1]=11;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }

              if (cartas[carta_aleatoria_d2]===cartas[9]) {
                cartas[carta_aleatoria_d2]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d2]===cartas[10]) {
                cartas[carta_aleatoria_d2]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d2]===cartas[11]) {
                cartas[carta_aleatoria_d2]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d2]===cartas[12]) {
                cartas[carta_aleatoria_d2]=11;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }

              if (cartas[carta_aleatoria_d3]===cartas[9]) {
                cartas[carta_aleatoria_d3]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d3]===cartas[10]) {
                cartas[carta_aleatoria_d3]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d3]===cartas[11]) {
                cartas[carta_aleatoria_d3]=10;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }else if (cartas[carta_aleatoria_d3]===cartas[12]) {
                cartas[carta_aleatoria_d3]=11;
                suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2]+ cartas[carta_aleatoria_d3];
              }
          }

      if (suma===suma2) {
        alert("EMPATADOS");
      }
      if (suma>suma2) {
        alert("Felicitaciones "+ nombre_jugador+"\n¡¡¡GANASTE!!!")
      }
      if (suma<suma2) {
        alert("PERDISTE");
      }
      if (suma2>21) {
        alert("Felicitaciones "+ nombre_jugador+"\n¡¡¡GANASTE!!!");
      }
}
