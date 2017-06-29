function verificarNumero()
{
	console.log(mudou);
	var numero = document.getElementById("numero").value;
	var base2 = document.getElementById('base2').value;
	numero = numero.replace(/\s/g, '');
	if(numero.length > 0)
	{
		var base1= document.getElementById("base1").value;
		switch(base1)
		{
			case "Decimal":
				validarDecimal(numero,base2);
				break;
			case "Binário":
				validarBinario(numero,base2);
				break;
			case "Octal":
				validarOctal(numero,base2);
				break;
			case "Hexadecimal":
				validarHexadecimal(numero,base2);
				break;
			default:
				document.getElementById('mensagem').innerHTML = "Não foi possível calcular";
				mostrar();
				break;
		}
	}
	else
	{
		if(mudou === 1)
		{
			document.getElementById('base2').value = oldValue;
			mudou = 0;
		}
		document.getElementById('mensagem').innerHTML = "Campo 'Número' não preenchido";
		mostrar();
		}
}

function focusBase()
{
	oldValue = document.getElementById('base2').value;
}

function validarDecimal(numero,base2) 
{
	var i,valido=1;
	for(i=0;i<numero.length;i++)
	{
		var letra = numero.charAt(i);
		if("0123456789".indexOf(letra) < 0)
		{
			valido = 0;
			break;
		}
	}
	switch(valido)
	{
		case 0:
			if(mudou === 1)
			{
				document.getElementById('base2').value = oldValue;
				mudou = 0;
			}
			document.getElementById('mensagem').innerHTML = "Número inválido para a base decimal :(";
			mostrar();
			break;
		case 1:
			calcularDecimal(numero,base2);
			break;
		default:
			mudou = 0;
			document.getElementById('mensagem').innerHTML = "Erro!";
			mostrar();
			break;
	}
}

function validarBinario(numero,base2)
{
	var i,valido=1;
	for(i=0;i<numero.length;i++)
	{
		var letra = numero.charAt(i);
		if(".01".indexOf(letra) < 0)
		{
			valido = 0;
			break;
		}
	}
	switch(valido)
	{
		case 0:
			document.getElementById('mensagem').innerHTML = "Número inválido para a base binária :(";
			mostrar();
			if(mudou === 1)
			{
				document.getElementById('base2').value = oldValue;
				mudou = 0;
			}
			break;
		case 1:
			calcularBinario(numero,base2);
			break;
		default:
			mudou = 0;
			document.getElementById('mensagem').innerHTML = "Erro!";
			mostrar();
			break;
	}
}

function validarOctal(numero,base2)
{
	var i,valido=1;
	for(i=0;i<numero.length;i++)
	{
		var letra = numero.charAt(i);
		if("01234567".indexOf(letra) < 0)
		{
			valido = 0;
			break;
		}
	}
	switch(valido)
	{
		case 0:
			document.getElementById('mensagem').innerHTML = "Número inválido para a base octal :(";
			mostrar();
			if(mudou === 1)
			{
				document.getElementById('base2').value = oldValue;
				mudou = 0;
			}
			break;
		case 1:
			calcularOctal(numero,base2);
			break;
		default:
			mudou = 0;
			alert("Erro!");
			break;
	}
}

function validarHexadecimal(numero,base2)
{
	var i,valido=1;
	for(i=0;i<numero.length;i++)
	{
		var letra = numero.charAt(i);
		if("0123456789ABCDEF".indexOf(letra) < 0)
		{
			valido = 0;
			break;
		}
	}
	switch(valido)
	{
		case 0:
			document.getElementById('mensagem').innerHTML = "Número inválido para a base hexadecimal :(";
			mostrar();
			if(mudou === 1)
			{
				document.getElementById('base2').value = oldValue;
				mudou = 0;
			}
			break;
		case 1:
			calcularHexadecimal(numero,base2);
			break;
		default:
			mudou = 0;
			document.getElementById('mensagem').innerHTML = "Erro!";
			mostrar();
			break;
	}
}