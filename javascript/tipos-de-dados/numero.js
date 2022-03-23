import { imprimir, limpar } from '../modulo/index.js';
// Todos os números javascript são 64 bit

limpar();
var numero = 200;
imprimir(numero); // 200

limpar();
var numero = 20.88;
imprimir(numero); // 20.88

limpar();
var numero = Number.MAX_SAFE_INTEGER;
imprimir(numero); // 9007199254740991

limpar();
var numero = Number.MIN_SAFE_INTEGER;
imprimir(numero); // -9007199254740991

limpar();
var numero = Number.MAX_VALUE;
imprimir(numero); // 1.7976931348623157e+308

limpar();
var numero = Number.MIN_VALUE;
imprimir(numero); // 5e-324

limpar();
var numero = Number.NEGATIVE_INFINITY;
imprimir(numero); // -Infinity

limpar();
var numero = Number.POSITIVE_INFINITY;
imprimir(numero); // Infinity

limpar();
var numero = Number.NaN;
imprimir(numero); // NaN

limpar();
var numero = Number.apply('value', [100]);
imprimir(numero); // 100

limpar();
var numero = Number.isInteger(10);
imprimir(numero); // true

limpar();
var numero = Number.isInteger(10.20);
imprimir(numero); // false

limpar();
var numero = Number.isNaN(NaN);
imprimir(numero); // true

limpar();
var numero = Number.isNaN('200');
imprimir(numero); // false

limpar();
var numero = Number.isNaN(200);
imprimir(numero); // false

limpar();
var numero = isNaN('200');
imprimir(numero); // false

limpar();
var numero = isNaN('Texto');
imprimir(numero); // true

limpar();
var numero = isNaN(100);
imprimir(numero); // false

limpar();
var numero = Number.parseFloat('10.81abc');
imprimir(numero); // 10.81

limpar();
var numero = Number.parseInt('100.99abc');
imprimir(numero); // 100

// problema de precisão
limpar();
var numero = 0.1 + 0.2;
imprimir(numero); // 0.30000000000000004
/* 
Isso acontece porque em JavaScript, números são armazenados em forma de binários para representar dígitos decimais internamente. E números decimais não podem ser representados em binários com precisão.
*/

// Para resolver basta converter de decimal para inteiro multiplicando o número por 10
var numero = ((0.1 * 10) + (0.2 * 10)) / 10;
imprimir(numero); // 0.3

// Ou
const Numero = (numero) => numero * 10;
const Calculo = (numero) => numero / 10;

limpar();
var numero = Calculo(Numero(0.1) + Numero(0.2));
imprimir(numero); // 0.3

var numero = numero.toFixed(3);
imprimir(numero); // 0.300

var numero = 10.898199998.toPrecision(6);
imprimir(numero); // 10.8982

var numero = 10.898199998.toFixed(4);
imprimir(numero); // 10.8982
