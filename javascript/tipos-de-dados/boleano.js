const imprimir = require('../modulo/index.js');

var boleano = true;
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

var boleano = false;
imprimir(boleano); // false
imprimir(typeof boleano); // boolean

var boleano = Boolean(1);
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

var boleano = Boolean(0);
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

// qualquer valor numérico diferente de 0 é verdadeiro
var boleano = Boolean(5);
imprimir(boleano); // true
imprimir(typeof boleano); // boolean

var boleano = Boolean('true');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

// qualquer string que não for vazio é verdadeiro
var boleano = Boolean('false');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

var boleano = Boolean('a');
imprimir(boleano);// true
imprimir(typeof boleano);// boolean

// uma string vazia é falso
var boleano = Boolean('');
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

var boleano = Boolean();
imprimir(boleano);// false
imprimir(typeof boleano);// boolean

// se for usado um operador new retornará um objeto
var boleano = new Boolean();
imprimir(boleano); // [Boolean: false]
imprimir(typeof boleano); // object
imprimir(boleano.valueOf(this)); // false
