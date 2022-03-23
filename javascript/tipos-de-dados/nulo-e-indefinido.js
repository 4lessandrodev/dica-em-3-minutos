import { imprimir, limpar } from '../modulo/index.js';

limpar();
var nulo = null;
imprimir(nulo); // null
imprimir(typeof nulo); // object

limpar();
var indefinido = undefined;
imprimir(indefinido); // undefined
imprimir(typeof indefinido); // undefined

limpar();
var indefinida;
imprimir(indefinida); // undefined
imprimir(typeof indefinida); // undefined
