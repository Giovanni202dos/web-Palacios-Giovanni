var menu = document.getElementById('menu'); //referencia al contenedor del menu
var menuli = document.getElementsByTagName('li')  //referencias a todos los li(trae una lista)

var botonMenu = document.getElementById('boton-menu');  //referencia al boton del menu

function toggleMenu() {
  //console.log('yeaa')
  menu.classList.toggle('visible');
  for (var i = 0; i < menuli.length; i++) {//para ponerlos uno arriba del otro
    var elementoActual = menuli[i];
    elementoActual.style.display='list-item';
  }
}

botonMenu.addEventListener('click', toggleMenu);  //si hay un click en la referencia del boton

// window.addEventListener('resize', function() {
//   var screenWidth = window.innerWidth;
//   if (screenWidth >= 360) {
//     menu.classList.remove('visible');
//   }
// });








  



