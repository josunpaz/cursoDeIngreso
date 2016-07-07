function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
/*if(edad>17)
	{
		alert("es mayor");
	}
if (edad<14) 
{
	alert("es niño");
}
if(edad<17&&edad>12)
{
	alert("es adolescente");
}
*/
/*
if(edad<13) //me dice que es menor y que es mayor, esta mal no lo hago nunca mas en la vida
{
	alert("es menor");
}
if(edad<17&&edad>12)
{
	alert("es adolescente");
}
else
{
	alert("es mayor");
}
*/
if(edad<=13)
{
	alert("es menor");
}
else
{
	if(edad>18)
	{


	
			alert("Es mayor");

		
	}
	else
	{
		alert("es adolescente");
	}
}

}//FIN DE LA FUNCIÓN