/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var uno = document.getElementById('PrecioUno').value;
	var dos = document.getElementById('PrecioDos').value;
	var tres= document.getElementById('PrecioTres').value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);
	alert("La suma es: "+(uno+dos+tres));

}
function Promedio () 
{
	var uno = document.getElementById('PrecioUno').value;
	var dos = document.getElementById('PrecioDos').value;
	var tres= document.getElementById('PrecioTres').value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);
	alert((uno+dos+tres)/3);

}
function PrecioFinal () 
{
	var uno = document.getElementById('PrecioUno').value;
	var dos = document.getElementById('PrecioDos').value;
	var tres= document.getElementById('PrecioTres').value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);
	var cuatro=(uno+dos+tres)/100*21;
	alert("Su precio final es: "+(cuatro+uno+dos+tres));

}