/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura = document.getElementById('Temperatura').value;
	var resultado = (temperatura -32.00)*(5/9);
	alert(resultado);
}

function CentigradosFahrenheit () 
{
	var temperatura = document.getElementById('Temperatura').value;
	var resultado = temperatura *1.8000 +(32.00);
	alert(resultado);

}
