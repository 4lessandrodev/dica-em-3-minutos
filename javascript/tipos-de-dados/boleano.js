import { imprimir, limpar } from'../modulo/index.js';

limpar();
var boleano = true;
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

limpar();
var boleano = false;
imprimir(boleano); // false
imprimir(typeof boleano); // boolean

limpar();
var boleano = Boolean(1);
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

limpar();
var boleano = Boolean(0);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
// qualquer valor numérico diferente de 0 é verdadeiro
var boleano = Boolean(5);
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

limpar();
var boleano = Boolean('true');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
// qualquer string que não for vazio é verdadeiro
var boleano = Boolean('false');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean(true);
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean(false);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean('texto');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
// uma string vazia é falso
var boleano = Boolean('');
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean();
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean(null);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean
limpar();
var boleano = Boolean(undefined);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean({});
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean(Object.keys({}).length);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean([]);
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

limpar();
var boleano = Boolean([].length);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

limpar();
// se for usado um operador new retornará um objeto
var boleano = new Boolean();
imprimir(boleano); // [Boolean: false]
imprimir(typeof boleano); // object
imprimir(boleano.valueOf(this)); // false
