// Dynamic Typing:
// Você não diz ao JS Engine que tipo de
// variável você está alocando, Ele deduz o que é
// Enquanto o seu código roda

// Variáveis podem alocar diferentes tipos de valores
// e tudo é deduzido durante a execução do código

// Static Typing: você diz ao engine que tipo de variável
// será alocada numa variável

// bool isNew = ' hello' // error

// Dynamica Typing
// var isNew = true
// isNew = 'yeah'
// isNew = 1
// Isso é bom, mas pode tb trazer problemas.
// Por isso é importante saber como o JS funciona e se comporta

// Primitive Type
// Tipo de dado que representa um único valor
// Isso não é um objeto
// Existem 6 tipos de primitive types
// 1-Undefined:
// representa um leque de existencia
// Não se deve setar ele como uma variável

// 2-null
// tb reprersenta um leque de existencia
// é possivel setar ele como uma variável

// 3-Boolean
// True or false

// 4-Number
// Floating point number
// Existe sempre um valor decimal.
// Diferente de outras linguagens de programação
// existe apenas um unico tipo de numero.
// E isso pode confundir as coisas

// 5-String
// sequencia de caracteres reŕesentados por "" ou ''

// 6-Symbol
// ES6 não falaremos sobre ele


//Operadores
// são functions especiais que se escrevem de forma diferente
// em resumo, operadores tomam 2 parametros e retornam um resultado
// ex:
var a = 4 + 3
console.log(a) // 7
// É como se + fosse uma function
// function add (b, c) {
//   return
// }

var b = 4 > 3
console.log(a) // true

// Precedencia do Operador
// Qual function de opreação é chamado primeiro?
// function são executadas em ordem de precedencia
// (quanto maior a precedencia, antes será a chamada)

// Associatividade
// qual a ordem de operação as functions são chamadas
// esquerda para a direita ou o inverso?
// quando function tem a mesma precedencia
// Ex:
var a = 3 + 4 * 5
console.log(a)
// 4 * 5 = 20
// 3 + 20 = 23
// pdf mozilla. Operadores em numero de ordem maior são chamados
// antes que o de numero de ordem meno

var a =2, b = 3, c = 4
a = b = c
console.log(a) // 4
console.log(b) // 4
console.log(c) // 4
// nesse caso de ter 2 operadores iguais, JS irá ler
//  da direita para a esquerda

// voltando
// o parentesis () é o primeiro na ordem de precedencia
var a = (3 + 4) * 5
console.log(a) // 35

// =========================

// Coerção
// Coertion: convertendo um valor de um tipo para outro
// isso acontece frequentemente em JS porque ele é
// tipado dinamicamente
// string pra number e vice-versa

var a = 1 + 2
console.log(a) // 3
var a = 1 + '2'
console.log(a) // 12????????????????????
// 1 é diferente de '1' o que aconteceu é que o 1 foi coagido
// pela string e se tornou uma string

// Coparison Operators
// Operadores de comparação
console.log(1 < 2 < 3) // true
console.log(3 < 2 < 1) // true

// 3 < 2 = false
// false para JS é 0 (Number(false) = 0)
// false < 1 = true || 0 < 1 = true

// true para JS é 1
// então 1 < 2 = true
// true < 3 = true ou 1 < 3 = true
// NaN (Not a Number)

// Number (null) para JS é 0 /////// cuidado!

// =================
// Como não deixar a coerçaõ acontecer
// ==
// 3 == 3 true
// '3' == 3 true Ele coeagiu o string e comparou
// var a = false // undefined
// a == 0 // true ????? cuidado
// false == 0 // true
// null == 0 // false
// null < 1 // true
// "" == 0 // true
// "" == false // true

// // Como evitar essas doideras
// // === // se for verdade mesmo
// 3 === 3 // true
// '3' === '3' // true
// '3' === 3 // false

var a  = 0
var b  = false

if ( a === b) {
  console.log ('são iguais')
  // ==
} else {
  console.log ('não são iguais')
  // ===
}

// Existence and Booleans
// Boolean(undefined) // false
// Boolean(null) // false
// Boolean("") // false

var a

a = 2

if (a || a === 0) {
  // lembrando daquela lista do mozilla
  // o triple === será executado antes que o ||
  // dentro de if tudo tentará ser convertido em true ou false
  // e em cada operação, lembre-se que é como se fossem
  // functions determinadas por simbolos
  console.log('Tem algo dentro de a')
} else {
  console.log('não tem nada lá')
}

// Default Values
function greet (name) {
  name = name || '<Seu nome aqui>'
  console.log ("Hello " + name)
}

greet()
greet(0)
greet('Guilherme')

// Seu coagir hello
// Boolean ("Hello") // vai dar true pq não é uma string vazia
// "hi" || "hello" // sai hi pq é o primeiro valor, isso foi coagido a true
// 0 // false
// 1 // true
// 0 || 1 // 1 (true)
// true || false // true

// Operator are functions that return values