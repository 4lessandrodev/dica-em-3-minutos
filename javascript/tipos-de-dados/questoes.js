import { imprimir, limpar } from '../modulo/index.js';

// A grande questão - boleano
var ehVerdadeiro = (true === Boolean('false'));

// O que será exibido no console?
// true, false ou Boolean is not a function
imprimir(ehVerdadeiro);

// Marque sua resposta
// A: [] true
// B: [] false
// C: [] Boolean is not a function




// -----------------------------------------------
limpar();

// A grande questão - null vs undefined

{
	var ehIgual = null == undefined;

	imprimir(ehIgual);

	ehIgual = null === undefined;

	imprimir(ehIgual);

	ehIgual = typeof {} === typeof null;

	imprimir(ehIgual);

	var soma = null + 42;

	imprimir(soma);
}

// O que será exibido no console?
// Marque sua resposta
// A: [] true, true, true, null
// B: [] false, true, false, NaN
// C: [] true, false, true, 42



// -----------------------------------------------
limpar();

{
	var result = 0.1 + 0.2;

	imprimir(result);

	var result = Number.parseFloat('20.10O3ABC');

	imprimir(result);

	var valor = 9.801;

	var result = valor.toPrecision(2);

	imprimir(result);
}

// O que será exibido no console?
// Marque sua resposta
// A: [] 0.30, 20.100, 9.80
// B: [] 0.3, 20.10, 9.801
// C: [] 0.30000000000000004, 20.1, 9.8
