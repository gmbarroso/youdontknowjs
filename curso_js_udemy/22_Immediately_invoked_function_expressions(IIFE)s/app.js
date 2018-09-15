// Function Expressions (IIFE)s

// Function Statement vs Function Expression

// Isso é uma Function Estatement
function greet(name) {
  console.log('Hello ' + name)
}
greet('Guilherme')

// Isso é uma Function Expression
var greetFunc = function(name) {
  console.log('Hello ' + name)
}
greetFunc('Barroso')

// Isso é uma IIFE
var greeting = function(name) {
  return 'Oi ' + name
}('Guilherme'); // Esse parenteses logo após o fim da function
// invoca ela logo após a leitura dela.
// eu estou chamando essa função
console.log(greeting)

// No meu código, eu posso ter coisas jogadas nele.
// Ex:

3

'uma string qualquer'

// meu código irá rodar sem problemas
// mas se eu coloco uma function
var primeironome = 'John'; // nesse caso ele pede o ;
(function(global, name) { // ele vai dar m erro.
  // Ele espera que essa function faça algo
  // se eu quiser que essa function não faça nada, eu coloco
  // ela dentro de um parenteses
  var great = 'Dentro do IIFE: Hi'
  global.great = 'Dentro do IIFE: Hi' // jogando a variável para o contexto global
  // para que tenha acesso de qualquer lugar
  console.log(great + ' ' + name)
}(window, primeironome));
// O parenteses é um operador


//Aprendemos que quando JS Lê o meu código ele começa
// procurando alguma coisa no meu contexto global.
// quando ele chega no parenteses antes da function
// ele entra em outro contexto.
// E mesmo eu tendo uma variável de mesmo nome
// em outro arquivo. Ao invocá-la, eu continuarei vendo
// o valor que ela guarda dentro da functiuon
// mas se eu chamá-la fora:
// console.log(great);
// Ele vai achar, vai buscar em outro contexto

