
var cartas = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

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
}

//boton carta del jugador
function carta() {
  //2 carta para jugador
  var aleatoria_j3 = cartas.length;
  carta_aleatoria_j3 = Math.floor(Math.random()*aleatoria_j3);
  document.getElementById("juego_jugador").value = (cartas[carta_aleatoria_j1] + " - " + cartas[carta_aleatoria_j2] + " - " + cartas[carta_aleatoria_j3]);

    var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];

      if (cartas[carta_aleatoria_j1]===cartas[9]) {
        cartas[carta_aleatoria_j1]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[10]) {
        cartas[carta_aleatoria_j1]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[11]) {
        cartas[carta_aleatoria_j1]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j1]===cartas[12]) {
        cartas[carta_aleatoria_j1]=11;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }

      if (cartas[carta_aleatoria_j2]===cartas[9]) {
        cartas[carta_aleatoria_j2]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[10]) {
        cartas[carta_aleatoria_j2]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[11]) {
        cartas[carta_aleatoria_j2]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j2]===cartas[12]) {
        cartas[carta_aleatoria_j2]=11;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }

      if (cartas[carta_aleatoria_j3]===cartas[9]) {
        cartas[carta_aleatoria_j3]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[10]) {
        cartas[carta_aleatoria_j3]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[11]) {
        cartas[carta_aleatoria_j3]=10;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }else if (cartas[carta_aleatoria_j3]===cartas[12]) {
        cartas[carta_aleatoria_j3]=11;
        var suma =cartas[carta_aleatoria_j1]+cartas[carta_aleatoria_j2]+cartas[carta_aleatoria_j3];
      }
    console.log(suma);
}
