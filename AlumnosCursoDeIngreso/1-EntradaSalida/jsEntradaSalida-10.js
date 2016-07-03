/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var uno=document.getElementById('importe').value;
	uno=parseInt(uno);
	var dos=(uno/100)*25;
	document.getElementById('resultado').value=(uno-dos);

}
