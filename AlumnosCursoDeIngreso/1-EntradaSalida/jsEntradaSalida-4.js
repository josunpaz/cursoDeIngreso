/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var mensaje=prompt("Ingrese texto debajo","Esto sigue en blanco");
	document.getElementById('elNombre').value=mensaje;

}

