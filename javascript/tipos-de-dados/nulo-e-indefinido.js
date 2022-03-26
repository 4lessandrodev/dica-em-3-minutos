import { imprimir, limpar } from '../modulo/index.js';
/**
 Embora null seja do tipo object ele continua sendo um tipo primitivo.
 Isso deve se ao fato de que na primeira versão do javascript os
 valores eram armazenados em unidades de 32 bits. 
 Os primeiros 3 bits representavam a tag de tipo de dado seguido pelos
 bits que representavam o valor.

 Para todos os objetos foi 000 como os bits de tag de tipo. 
 null foi considerado um valor especial em JavaScript desde sua primeira versão. 
 null era uma representação do ponteiro nulo. 
 No entanto, não havia ponteiros em JavaScript como C. 
 
 Portanto, null simplesmente não significava nada ou void e era representado por todos os zeros. 
 Portanto, todos os seus 32 bits eram zeros. 
 Portanto, sempre que o interpretador javascript lê null, ele considera os primeiros 3 bits 
 como do tipo “objeto”. É por isso que typeof null retorna “objeto”.

 TIPO         VALOR
 [0][0][0] - [0][0][0][0][0][0][0][0][0][0][0][0]...

 */
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

limpar();
var numeroIndefinido = undefined;
var numeroNulo = null;

imprimir(numeroIndefinido + 1); // NaN
imprimir(numeroNulo + 1); // 1
