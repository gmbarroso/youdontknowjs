// 'arguments'
// Arguments contém uma lista de todos os valores
// de todos os parâmetros que você passa para uma
// function
// Mas o conceito de arguments é só mais um outro nome
// que você passa como parametros para uma function
// JS te dá uma keyword de mesmo nome que contém tudo nela

function greet (firstname, lastname, language) {
  // function greet (firstname, lastname, language = 'pt') {

  language = language || 'en'

  if (arguments.length === 0) {
    console.log('Missing parameters')
    console.log('----------------')
    return
  }

  console.log(firstname)
  console.log(lastname)
  console.log(language)
  console.log(arguments) // retorna uma lista de todos os valores que eu passei.
  console.log('arg 0: ' + arguments[0])
  console.log('--------------')
}

greet() // mesmo passando 3 parametros para ela
greet('Guilherme')
greet('Guilherme', 'Barroso')
greet('Guilherme', 'Barroso', 'pt')
// eu posso chamá-la sem nada. JS permite isso

// =========================
// Function Overloading
// posso ter uma function de mesmo nome mas com parameotros diferentes
function greet (firstname, lastname, language) {
  language = language || 'en'

  if(language === 'en'){
    console.log('Hello ' + firstname + ' ' + language)
  }

  if(language === 'es'){
    console.log('Hola ' + firstname + ' ' + language)
  }
}

greet('Guilherme', 'Barroso', 'en')
greet('Guilherme', 'Barroso', 'es')

function greetEnglish (firstname, lastname) {
  greet('Guilherme', 'Barroso', 'en')
}
function greetSpanish (firstname, lastname) {
  greet('Guilherme', 'Barroso', 'es')
}

greetEnglish('Guilherme', 'Barroso')
greetSpanish('Guilherme', 'Barroso')
