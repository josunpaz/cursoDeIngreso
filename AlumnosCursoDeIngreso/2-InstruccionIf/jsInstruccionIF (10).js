function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor((Math.random() * 10) + 1);
if(random>4)
{
	if (random>=9)
	{
		alert("Excelente");
	}
	else
	{
		alert("Aprobo");
	}
	
}
else
{
	alert("Vamos la proxima se puede");
}

}//FIN DE LA FUNCIÓN