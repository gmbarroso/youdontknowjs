// // NameSpace
// é um container para variaveis e functions
// é uma maneria de você mantes variáveis e functions num mesmo
// Namespace (contexto???)

// Mas JS não tem namespaces por isso o fake

var greet = "hello"
var greet = "hola"

console.log(greet )

// criando um contexto para cada uma delas
var english = {
  greetings: {
    basic: 'Hello'
  }
}
var spanish = {}

// english.greet = 'Hello'
spanish.greet = 'Hola'

console.log(english)