// Um programa ou código é uma maneira especial de dizer a um computador o que ele deve fazer,
// Como no Português, por exemplo quando dizemos o que fazer usando sentenças e pontuações
a = b * 2
// a e b nessa declaração são variáveis. E e o 2 é apenas um valor literal. 
// o que a senteça acima faz é dizer ao computador para pegar o valor de b e multiplicar por 2
// e assim alocar esse valor em a.
// essa declaração acima tem 4 expressões.

/////////////////////// Usando console e alerts
a = 21
b = a * 2
console.log(b)
// alert(b)
idade = prompt("Please tell me your age: ")
console.log(idade)

///////////Operações
var a = 20
a = a + 1
a = a * 2
console.log(a)

// Atribuições compostas += -= *= /=
// a += 2 é o mesmo que a = a + 2

/////// String, Numbers and bool/////////// Conversions
var a = "42"
var b = Number(a)
console.log(a)
console.log(b)

// alocando valor em variaveis e retornando
var quantia = 99.99
quantia = quantia * 2
console.log(quantia)
quantia = "$" + String(quantia)
console.log(quantia)

// o valor da quantgia vai mudando
var taxa = 0.08
var quantia = 99.99
quantia = quantia * 2
quantia = quantia + (quantia * taxa)
console.log(quantia)
console.log(quantia.toFixed(2))

// NEste tipo de sentença, a variavael taxa seria uma constante, ou seja, um valor que não mudaria
// jamais ao longo do meu programa, então, podemos chamar de const ao inves de var
const taxa = 0.08
var quantia = 99.99
quantia = quantia * 2
quantia = quantia + (quantia * taxa)
console.log(quantia)
console.log(quantia.toFixed(2))

///////////////// BLOCKS
// Uma ou mais declarações que queremos por entre {}
var quantia = 99.99
{
    quantia = quantia * 2
    console.log(quantia)
}
// São esses blocks que usamos em declarações condicionais ou loops

///////////////// Condicionais
// Podemos tomar condições quando queremos que o nosso programa tome decisões
var balanco_bancario = 302.13
var quantia = 99.99
if (quantia < balanco_bancario) {
    console.log("Eu vou comprar esse telefone!")
}

// Ao declarar um if, precisamos dizer o que será versadeiro ou falso dentro do ()
// Podemos incrementar a sentença acima dizendo o que fazer caso a primeira condição seja >
const precodoacessorio = 9.99

var balanco_bancario = 302.13
var quantia = 99.99
if (quantia < balanco_bancario) {
    console.log("Eu vou comprar esse telefone!")
} else {
    console.log("Não vou mais comprar")
}

///////// LOOPS
// usamos loop quando queremos que uma certa ação seja feita várias vezes até que ela falhe
// ou, quando queremos repetir essa ação enquanto a condição que passarmos for verdadeira
for (var i = 0; i <= 9; i = i + 1) {
    console.log(i)
}
// Ou seja, mostre me no console os numeros de 1 até 9
// var = i indico que começarei do 0. Adicione 1 conforme for avançando, até que o i seja 
// menor ou igual a 9

//////// FUNCTIONS
// Códigos e programas irão quase sempre querer "quebrar" o código em em pequenas tarefas
// em pedaços para serem usados e reusados novamente. Para isso utilizamos functions
// uma function geralmente é uma seção no código que pode ser chamada a cada vez que 
// precisar ser usada

function mostrarQuantia() {
    console.log(quantia.toFixed(2))
}

var quantia = 99.99
mostrarQuantia()
quantia = quantia * 2
mostrarQuantia()

// functions podem receber ou não parametros, valores que passamos para serem usados dentro das functions
// que podem ou não retornar valores

function mostrarQuantia(amt) {
    console.log(amt.toFixed(2))
}

function formatoQuantia() {
    return "$" + quantia.toFixed(2)
}

var quantia = 99.99

mostrarQuantia(quantia * 2)

quantia = formatoQuantia()
mostrarQuantia()

// functions podems ser usadas tambḿ para organizar o seu código
// podemos separar alguns eventos em nossos códigos em functions mesmo que usemos elas apenas uma vez

const taxa = 0.08

function clacularoValorFinal(amt) {
    amt = amt + (amt * taxa)

    return arguments
    var quantia = 99.99
}

quantia = calcularoValorFinal(quantia)
console.log(quantia.toFixed(2))

/////////// SCOPE
// em progrmação temos o que chamamos de Scope. Scope é uma junção de variáveis e como elas podem ser acessadas
// não podemos ter uma mesma variável com diferentes valores, mas podemos chamar
// uma variável a em functions diferentes alocando valores diferentes
function one() {
    // this `a` only belongs to the `one()` function
    var a = 1;
    console.log(a);
}

function two() {
    // this `a` only belongs to the `two()` function
    var a = 2;
    console.log(a);
}

one();		// 1
two();		// 2

// e podemos também inserir scope dentro de outros scopes
function outer() {
    var a = 1;

    function inner() {
        var b = 2;

        // we can access both `a` and `b` here
        console.log(a + b);	// 3
    }

    inner();

    // we can only access `a` here
    console.log(a);			// 1
}

outer();