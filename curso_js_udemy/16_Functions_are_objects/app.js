// Function are Objects
// functions de primeira classe em JS
// primeira classe:^Significa que tudo o que você pode fazer com outros tipos
// é possível que se faça com functions
// associando variáveis a functions, você aloca a informação
// em algum lugar que é possível de acessar depois.
// O código que você escreve é colocado em uma propriedade
// especial do objeto de function

function greet () {
  console.log('hi')
}

greet.language = 'english'

console.log(greet)
console.log(greet.language)

// em JS functions são objetos!!!

// Functions Statements And Fuctions Expressions
// Expression
// é uma unidade de código que resulta em um valor
// não necessariamente guarda uma variável
// var a = 3
// 1 + 2
// a = { greeting: 'hi'}

var a

// o if é um statement, ele não precisa ficar alocado
// em uma variável, ele já retorna alguma coisa
if (a === 3) {

}

// Isso é uma function statement
// mesmo que a function venha depois, eu posso
// chamá-la antes, pq, quando eu crio a function
// ela fica alocada em memória e ai por isso ela
// fica já acessível antes dela.
greet()

function greet() {
  console.log('hi')
}

// Isso é uma function expression
var anonymousGreet = function() {
  console.log('hi')
  // functions are objects
  // aqui estou criando uma function on the fly
  // e alocando em uma variável
  // nesse tipo de function, ela é anonima
  // não preciso de nome nela pq a variável faz esse papel
  // anonymousGreet()
}

anonymousGreet()
// nesse caso, não podemos chamar anonymousGreet() antes de
// declarar a function. Pq ela está alocada em uma variável, ela só
// vai pra memória depois da declaração da variável
// muda-se o escopo da function



function log(a) {
  // console.log(a)
  a()
}

// function é um objeto
// log(3)

// objeto dentro de um objeto
// log({
//   greeting: 'hello'
// })

// function dentro de um objeto
log(function() {
  console.log('hey')
})



