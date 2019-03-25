var canvas = document.getElementById("imgCajero");
var lienzo = canvas.getContext("2d");
var fondo = new Image();

fondo.src = "cajero.gif";
fondo.addEventListener("load", dibujarFondo);

function dibujarFondo()
{
	lienzo.drawImage(fondo, 0 ,0);
	lienzo.font = "16px Arial";
	lienzo.fillStyle = 'white';
	lienzo.fillText("Bienvenido ", 175, 240,);
	lienzo.font = "14px Arial";
	lienzo.fillText("Por favor, seleccione la accion que desea", 175, 260,)
  lienzo.font = "12px Arial";
	lienzo.fillText("*Puede encontrar las opciones debajo del cajero", 170, 437,)
}

var imagenes = [];
imagenes["100"] = "cien.png";
imagenes["50"] = "cincuenta.png";
imagenes["20"] = "veinte.png";
imagenes["10"] = "diez.png";
imagenes["5"] = "cinco.png";

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var caja = [];
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 5) );
caja.push( new Billete(5, 2) );

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
	var dibujado = [];
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	if (total >= dinero)
	{
		for(bi of caja)
		{
			if (dinero > 0)
			{
				div = Math.floor(dinero/bi.valor);
				if (div>bi.cantidad)
				{
					papeles = bi.cantidad;
				}
				else
				{
					papeles = div;
				}
					bi.cantidad = bi.cantidad-papeles;
				for (var i = 0; i < papeles; i++)
				{
					dibujado.push ( new Billete(bi.valor, 1) );
				}
				dinero -= (bi.valor * papeles);
			}
		}
		if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: $" + t.value + "<br />";
			for(var e of dibujado)
			{
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();
		}
		else
		{
			resultado.innerHTML += "El cajero no cuenta con billetes de esa nominacion. Intente otro valor. <hr />";
		}

	}
	else
	{
		resultado.innerHTML += "El cajero se encuentra sin dinero disponible. <hr />";
	}
}
function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}

var b_saldo = document.getElementById("b_saldo");
b_saldo.addEventListener("click", saldo);

function saldo()
{
 monto = 0
 for(var m of caja)
 {
   monto = monto + m.valor * m.cantidad;
 }
  resultado.innerHTML += "El saldo actual de la cuenta es de: $ " + monto + "<hr />";
  console.log(monto);
 }

 var dep = document.getElementById("depositar");
dep.addEventListener("click", deposito);

function actualizar() {
  var saldo = 0;
  for (var v of caja) {
    saldo = saldo + v.valor * v.cantidad;
    total = saldo;
  }
}

var boton_depositar = document.getElementById("depositar");
boton_depositar.addEventListener("click", deposito);

function deposito() {
  var monto = prompt("Indique el valor del billete a depositar: 100, 50, 20, 10, o 5 ");
if ( monto == 100 || monto == 50 || monto == 20 || monto == 10 || monto == 5) {

   if (monto == 100) {

     var cant_cien = prompt("Indíque la cantidad de billetes", 1);

     while (isNaN(cant_cien)) {
       cant_cien = prompt(cant_cien + " No es un valor correcto, Por favor indíque un valor");
     }

     caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
     actualizar();
     resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";

    }

    if (monto == 50) {
      var cant_cincuenta = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cincuenta)) {
        cant_cincuenta = prompt(cant_cincuenta + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 20) {
      var cant_veinte = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_veinte)) {
        cant_veinte = prompt(cant_veinte + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_veinte + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 10) {
      var cant_diez = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_diez)) {
        cant_diez = prompt(cant_diez + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_diez + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 5) {
      var cant_cinco = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cinco)) {
        cant_cinco = prompt(cant_cinco + " No es un valor correcto, Por favor indíque un valor");
    }

    caja[4].cantidad = caja[4].cantidad + parseInt(cant_cinco);
    actualizar();
    resultado.innerHTML += "Se ha depositado " + cant_cinco + " Billetes de: $" + monto + "<hr />";

    }
  }
 else{
   resultado.innerHTML =("Valor no valido, por favor indicar los valores correspondientes para depositar" + "<hr />");
  }

}
