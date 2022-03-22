/**

|              |      var       |      const     |      let       |
|--------------|:--------------:|---------------:|---------------:|
| escopo       | local & global | bloco          | bloco          |
| redeclarável | sim            | não            | não            |
| reatribuível | sim            | não            | sim            |
| içável       | sim            | não            | não            |

*/
const imprimir = require('../modulo/index.js');

{
	// atribuição e reatribuição
	var variavel; // pode ser declarada com ou sem um valor inicial
	variavel = "um valor inicial";
	variavel = "um valor alterado"; // pode ter seu valor alterado

	let variavel_let; // pode ser declarada com ou sem um valor inicial
	variavel_let  = "um valor"
	variavel_let = "valor alterado"; // pode ter seu valor alterado

	const constante = "não muda"; // precisa ser declara já com o seu valor
	// constante = "se tentar alterar dá erro"; // Erro

	const endereco = { rua: "uma rua", numero: 200 };
	imprimir(`[endereco:27] ${JSON.stringify(endereco)}`);
	endereco.rua = "rua alterada"; // uma constante quando objeto pode ter o valor de seu atributo alterado.
	imprimir(`[endereco:29] ${JSON.stringify(endereco)}`);

	// um vetor pode ter seus valores removidos ou receber novos valores mesmo que definidos como constantes.
	const frutas = ["uva", "maça"];
	imprimir(`[frutas:33] [${frutas}]`);
	frutas.pop();
	imprimir(`[frutas:35] [${frutas}]`);
	frutas.push("abacaxi");
	imprimir(`[frutas:37] [${frutas}]`);
}

// variável global
var global = "um texto global";

{
	// variável local, mas acessível em global
	var local = "um texto local";

	// acessando variável global dentro de um bloco
	imprimir(`[global:48] ${global}`);

	// acessando local
	imprimir(`[local:51] ${local}`);
}

// local é acessível em global quando declarado com var
imprimir(`[local:55] ${local}`);

{
	// bloco 1 - Pai
	let local_let = "uma variável let em um bloco 1";

	{
		// acessível do bloco externo para o interno
		imprimir(`[local_let:63] ${local_let}`);

		// bloco 2 - Filho
		// a variável global declarada com var é acessível dentro de qualquer bloco
		global = "um texto global alterado";

		// a variável declarada com let é acessível dentro do bloco pai ou dentro dos blocos filhos
		local_let = "uma variável let alterada no bloco 2";

		// variável declarada com let dentro do bloco filho, não é acessível em um bloco pai
		let local_let_2 = "uma variável let no bloco 2";
	}
	
	// acessando variável global
	imprimir(`[global:77] ${global}`);
	imprimir(`[local_let:78] ${local_let}`);

	// variável declarada com let em um bloco filho não é acessível em um bloco pai
	// imprimir(`[local_let_2] ${local_let_2}`); // Erro
}

{
	// içamento

	// variável declarada com var pode receber um valor antes de ser declarada
	ultima_var = "var definida no final do arquivo";

	// variável declarada com let não pode receber valor de atribuição antes de ser declarada
	// ultima_let = "let definida no final do arquivo"; // Erro

	// variável declarada com const não pode ser redefinida
	// ultima_const = "const definida no final do arquivo"; // Erro

	var ultima_var;
	let ultima_let = "let definida no final do arquivo";
	const ultima_const = "const definida no final do arquivo";

	imprimir(`[ultima_var:100] ${ultima_var}`);
	imprimir(`[ultima_let:101] ${ultima_let}`);
	imprimir(`[ultima_const:102] ${ultima_const}`);
}
