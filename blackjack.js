
var cartas = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

function juego() {
  //carta aleatoria para el jugador
  var aleatoria_j1 = cartas.length;
  carta_aleatoria_j1 = Math.floor(Math.random()*aleatoria_j1);
  console.log(cartas[carta_aleatoria_j1]);
  document.getElementById("juego_jugador").value =cartas[carta_aleatoria_j1];

  //carta aleatoria para el diler
  var aleatoria_d1 = cartas.length;
  carta_aleatoria_d1 = Math.floor(Math.random()*aleatoria_d1);
  console.log(cartas[carta_aleatoria_d1]);
  document.getElementById("juego_diler").value =cartas[carta_aleatoria_d1];

}
