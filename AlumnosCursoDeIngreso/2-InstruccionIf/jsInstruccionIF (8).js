function Mostrar()
{
//tomo la edad  
var estadoCivil=document.getElementById('estadoCivil').value;
//alert(estadoCivil);
var edad=document.getElementById('edad').value;
	
if (estadoCivil=="Soltero"&& edad>18)
{
  alert("Es soltero y no es menor");

}

}//FIN DE LA FUNCIÓN