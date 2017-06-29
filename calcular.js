function calcularDecimal(numero,base2)
{
	switch(base2)
	{
		case "Decimal":
			document.getElementById("resultado").value = numero;
			break;
		case "Binário":
			decimalBinario(numero);
			break;
		case "Octal":
			var res = Number(numero);
			res = res.toString(8);
			document.getElementById('resultado').value = res;
			break;
		case "Hexadecimal":
			var res = Number(numero);
			res = res.toString(16);
			document.getElementById('resultado').value = res.toUpperCase();
			break;
		default:
			alert("Não foi possível calcular");
			break;
	}
}

function binaryToDecimal(binary)
{
	var decimal = 0;

	for(var i = binary.length - 1; i >= 0; i--)
	{
		decimal += parseInt(binary.charAt(i)) * Math.pow(2, binary.length - i - 1);
	}

	console.log("decimal: " + decimal);
}

function calcularBinario(numero,base2)
{
	switch(base2)
	{
		case "Decimal":
			binaryToDecimal(numero);
			var res = parseInt(numero, 2);
			document.getElementById('resultado').value = res;
			break;
		case "Binário":
			var res = numero;
			document.getElementById('resultado').value = res;
			break;
		case "Octal":
			var res = parseInt(numero, 2).toString(8);
			document.getElementById('resultado').value = res;
			break;
		case "Hexadecimal":
			var res = parseInt(numero, 2).toString(16);
			document.getElementById('resultado').value = res.toString().toUpperCase();
			break;
		default:
			alert("Infelizmente, houve um erro ao processar o cálculo");
			break;
	}
}

function calcularOctal(numero,base2)
{
	var res;
	switch(base2)
	{
		case "Decimal":
			res = parseInt(numero, 8);
			document.getElementById('resultado').value = res;
			break;
		case "Binário":
			res = parseInt(numero, 8).toString(2);
			document.getElementById('resultado').value = res;
			break;
		case "Octal":
			res = numero;
			document.getElementById('resultado').value = res;
			break;
		case "Hexadecimal":
			res = parseInt(numero, 8).toString(16);
			document.getElementById('resultado').value = res.toString().toUpperCase();
			break;
		default:
			alert("Infelizmente, houve um erro ao processar o cálculo");
			break; 
	}
}

function calcularHexadecimal(numero,base2)
{
	var res;
	switch(base2)
	{
		case "Decimal":
			res = parseInt(numero,16);
			document.getElementById('resultado').value = res;
			break;
		case "Binário":
			res = parseInt(numero,16).toString(2);
			document.getElementById('resultado').value = res.toString().toUpperCase();
			break;
		case "Octal":
			res = parseInt(numero,16).toString(8);
			document.getElementById('resultado').value = res;
			break;
		case "Hexadecimal":
			res = numero;
			document.getElementById('resultado').value = res;
			break;
		default:
			alert("Infelizmente, houve um erro ao processar o cálculo");
			break;
	}
}
function decimalBinario(numero)
{
	var decimal = numero;
	var numbinarios = new Array();
	while(decimal > 1 )
	{
		if(decimal % 2 == 0)
		{
			numbinarios.push(0);
			decimal = decimal / 2;
		}
		else
		{
			numbinarios.push(1);
			decimal = (decimal - 1)/2;
		}
	}
	var binario = "";
	var i;
	if(decimal == 1)
	{
		numbinarios.push(1);
		for(i=numbinarios.length;i>0;i--)
		{
			binario += numbinarios[i-1];
		}
	}
	else
	{
		if(decimal == 0)
		{
			binario = 0;
		}
	}
	document.getElementById('resultado').value = binario;
}

