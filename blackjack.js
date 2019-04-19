
var cartas = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var listanumeros = []; // (Jhon Ortega) se crea um array vacio para almecenar datos jugador
var listanumerodiler = []; // (Jhon Ortega) se crea un array vacio para almacenar datos del diler
var listaconletrasdiler = [];
let nombre_jugador; //(Jhon Ortega) se arregla el input para que el nombre del jugador se asigne y salga en las alertas
document.querySelector('#pedir__carta').setAttribute('disabled', '');

//funcion de cambio de letra por numero
function cambio_de_valores(array){
  array.forEach(element => {
    if(element === "A"){
      array.splice(array.indexOf(element),1,11);
      array.reduce((a,b) => a+b);
    } else if (element === "J"){
      array.splice(array.indexOf(element),1,10);
      array.reduce((a,b) => a+b);
    } else if (element === "Q"){
      array.splice(array.indexOf(element),1,10);
      array.reduce((a,b) => a+b);
    } else if (element === "K"){
      array.splice(array.indexOf(element),1,10);
      array.reduce((a,b) => a+b);
    } //(Jhon Ortega) se añade un for each para darle valor al letra en numero
  });
}

function nombre_confirmar(){
  nombre_jugador = document.querySelector('#nombre').value;
} //(Jhon Ortega) se crea funcion para guardar el dato del input

//boton juego
function juego() {
  document.querySelector('#pedir__carta').removeAttribute('disabled', '');
  //carta aleatoria para el jugador
  var aleatoria_j1 = cartas.length-1;
  carta_aleatoria_j1 =cartas[Math.round(Math.random()*aleatoria_j1)];
  //(Jhon Ortega) se edita esta linea carta_aleatoria_j1 = Math.floor(Math.random()*aleatoria_j1);
  listanumeros.push(carta_aleatoria_j1);
  //document.getElementById("juego_jugador").value =cartas[carta_aleatoria_j1]; (jhon ortega) retirar linea no le veo en donde usarla.

  var aleatoria_j2 = cartas.length-1;
  carta_aleatoria_j2 = cartas[Math.round(Math.random()*aleatoria_j2)];
  //(Jhon Ortega) se edita esta linea carta_aleatoria_j2 = Math.floor(Math.random()*aleatoria_j2);
  listanumeros.push(carta_aleatoria_j2);
  document.getElementById("juego_jugador").value = listanumeros.join().replace(/,/g, " - ");


  //carta aleatoria para el diler
  var aleatoria_d1 = cartas.length-1;
  carta_aleatoria_d1 = cartas[Math.round(Math.random()*aleatoria_d1)]; //(Jhon Ortega) se modifica la linea ver linea 19
  listanumerodiler.push(carta_aleatoria_d1);
  listaconletrasdiler.push(carta_aleatoria_d1);
  document.getElementById("juego_diler").value = listaconletrasdiler.join().replace(/,/g, " - ");
  
  /*suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2];

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
    }*/
    //(Jhon Ortega) quito la suma y los if y el codigo no varia
    document.querySelector('#jugar').setAttribute('disabled', ''); //(Jhon Ortega) se desahiblita el boton jugar para que no se pida juego nuevo.
}

//boton carta del jugador
function carta() {
  //2 carta para jugador
  var aleatoria_j3 = cartas.length-1;
  carta_aleatoria_j3 = cartas[Math.round(Math.random()*aleatoria_j3)];
  listanumeros.push(carta_aleatoria_j3);
  document.getElementById("juego_jugador").value = listanumeros.join().replace(/,/g, " - ");
  cambio_de_valores(listanumeros);
  
  /*suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];

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
      }*/
    if (listanumeros.reduce((a,b) => a+b) > 21)
    {
      document.querySelector('#plantar').setAttribute('disabled', ''); //(Jhon Ortega) desabilita el boton cuando ya se paso de 21
      document.querySelector('#pedir__carta').setAttribute('disabled', ''); //(Jhon Ortega) desabilita el boton cuando ya se paso de 21
      alert(`Te volaste ${nombre_jugador}, Gana DILER`);
    }
}

function plantar() {
  listanumeros;
  cambio_de_valores(listanumeros);
  let suma_jugador = listanumeros.reduce((a,b) => a+b);  
  listanumerodiler;
  listaconletrasdiler;
  cambio_de_valores(listanumerodiler);
  while(listanumerodiler.reduce((a,b) => a+b) < 17){
    listanumerodiler;
    listaconletrasdiler;
    let aleatoria_d3 = cartas.length-1;
    carta_aleatoria_d3 = cartas[Math.round(Math.random()*aleatoria_d3)]; //(Jhon Ortega) se modifica la linea carta_aleatoria_d2 = Math.floor(Math.random()*aleatoria_d2); por la linea carta_aleatoria_d2 = cartas[Math.round(Math.random()*aleatoria_d2)];
    listanumerodiler.push(carta_aleatoria_d3);
    listaconletrasdiler.push(carta_aleatoria_d3);
    cambio_de_valores(listanumerodiler);
    document.getElementById("juego_diler").value = listaconletrasdiler.join().replace(/,/g, " - ");
  }
  let suma_diler = listanumerodiler.reduce((a,b) => a+b);
  
      /*suma2 =cartas[carta_aleatoria_d1]+cartas[carta_aleatoria_d2];

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
          }*/

  if (suma_diler > 21) {
    alert(`Felicitaciones  ${nombre_jugador} "¡¡¡GANASTE!!!`);
  } else if (suma_jugador>suma_diler) {
    alert(`Felicitaciones  ${nombre_jugador} "¡¡¡GANASTE!!!`)
  } else if (suma_jugador<suma_diler) {
    alert("PERDISTE");
  } else if (suma_diler===suma_jugador) {
    alert("EMPATADOS");
  }
}
