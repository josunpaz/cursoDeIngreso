/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var uno=document.getElementById('sueldo').value;
	uno=parseInt(uno);
	var dos=(uno/100)*10;
	document.getElementById('resultado').value=(uno+dos);



}
