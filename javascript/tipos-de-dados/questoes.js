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
}

// O que será exibido no console?
// Marque sua resposta
// A: [] true, true, true
// B: [] false, true, false
// C: [] true, false, true
