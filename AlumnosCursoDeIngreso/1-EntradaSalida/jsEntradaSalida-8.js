/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var uno=document.getElementById('numeroDividendo').value;
	var dos=document.getElementById('numeroDivisor').value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	alert("El resto es "+uno%dos);
}
