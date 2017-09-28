/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(movX, movY, tecla) {
      Jugador.x += movX;
      Jugador.y += movY;
      Jugador.sprite = 'imagenes/auto_rojo_' + tecla + '.png';
      if (tecla === 'arriba' || tecla === 'abajo') {
          Jugador.ancho = 15;
          Jugador.alto = 30;
      } else {
          Jugador.ancho = 30;
          Jugador.alto = 15;
      }
  },
  perderVidas: function(danio) {
      Jugador.vidas -= danio;
  }
}
