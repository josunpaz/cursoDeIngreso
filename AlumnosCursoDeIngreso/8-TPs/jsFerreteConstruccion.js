/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = document.getElementById('Largo').value;
	var ancho = document.getElementById('Ancho').value;
	var perimetro = (2*largo)+(2*ancho);
	var resultado = (perimetro * 3);
	
	alert(resultado + " Mtrs de alambre necesario");

	
}
function Circulo () 
{
	var radio = document.getElementById('Radio').value;
	var diametro = radio * 2;
	var circunferencia = (diametro * 3.14);
	var resultado = (circunferencia * 3);
	alert(resultado + " Mtrs de alambre necesario aproximadamente");


}
function Materiales () 
{
	var largo = document.getElementById('Largo').value;
	var ancho = document.getElementById('Ancho').value;
	var area = (largo*ancho);
	var cemento = ( 2 * area);
	var cal = ( 3 * area);
	alert("Usted necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");


}