var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var backG = {
  url: "tile.png",
  cargaOK: false
}

var cow = {
  url: "vaca.png",
  cargaOK: false
};

var pig = {
  url: "cerdo.png",
  cargaOK: false
}

var chicken = {
  url: "pollo.png",
  cargaOK: false
}

// cantidad de veces que se apareceran la imagen vaca y pollo cuando se recargue
var cantidad = random(1, 10);

//clases
pig.imagen = new Image();  // declaracion de la clase
pig.imagen.src = pig.url;
pig.imagen.addEventListener("load", cargarCerdo);

backG.imagen = new Image();
backG.imagen.src = backG.url;
backG.imagen.addEventListener("load", cargarFondo);

cow.imagen = new Image();
cow.imagen.src = cow.url;
cow.imagen.addEventListener("load", cargarVacas);

chicken.imagen = new Image();
chicken.imagen.src = chicken.url;
chicken.imagen.addEventListener("load", cargarPollo);

document.addEventListener("keydown", moverCerdo);
var xPig = 10;
var yPig = 10;

var xCow = new Array();
var yCow = new Array();

var xChicken = new Array();
var yChicken = new Array();

function moverCerdo( xinicial, yinicial, xfinal, yfinal, papel) {
  papel.beginPath();
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.closePath();
}

function moverCerdo(e) {
  var movimiento = 10;
  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

  switch(e.keyCode)
  {
    case teclas.UP:
      yPig = yPig - movimiento;
      dibujar(xPig, yPig);

    break;
    case teclas.DOWN:
      yPig = yPig + movimiento;
			dibujar(xPig, yPig);

    break;
    case teclas.LEFT:
      xPig = xPig - movimiento
      dibujar(xPig, yPig);

    break;
    case teclas.RIGHT:
      xPig = xPig + movimiento;
      dibujar(xPig, yPig);
    break;
  }
}

function mantenerPosicion(){
	if(cow.cargaOK) {
    //var cantidad = random(1, 5);
		for(var i=0; i<cantidad; i++) {
			var x = random(0, 7);
			var y = random(0, 7);
			x = x*60;
			y = y*60;
			xCow[i] = x;
			yCow[i] = y;
		}
	} if(chicken.cargaOK) {
		//var cantidad = random(1, 5);
		for(var i=0; i<cantidad; i++) {
			var x = random(0, 7);
			var y = random(0, 7);
			x = x*60;
			y = y*60;
			xChicken[i] = x;
			yChicken[i] = y;
		}
	}
}

// funciones que carga las imagenes
function cargarFondo () {
  backG.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  cow.cargaOK = true;
  mantenerPosicion();
  dibujar();
}

function cargarCerdo() {
  pig.cargaOK = true;
  dibujar();
}
function cargarPollo(){
  chicken.cargaOK = true;
  mantenerPosicion();
  dibujar();
}

// funtion donde se empieza a dibujar todo
function dibujar() {
  if(backG.cargaOK) {
    papel.drawImage(backG.imagen, 0, 0);
  }
  if(cow.cargaOK) {
    for(var i=0; i< cantidad; i++) {
      papel.drawImage(cow.imagen, xCow[i], yCow[i]);
    }
  } if (chicken.cargaOK) {
    for(var i=0; i< cantidad; i++) {
      papel.drawImage(chicken.imagen, xChicken[i], yChicken[i]);
    }
  }
  if (pig.cargaOK) {
    papel.drawImage(pig.imagen, xPig, yPig);
  }
}

// function que nos da un numero matematico aleatoriamente
function random(min, maxi) {
  var res;
  res = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return res;
}
