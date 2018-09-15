// 'this'
// Já vimos que o this pode apontar para alguma variável
// global em alguns casos e em outros ela aponta para outras
// functions caso esta seja um método anexado a algum objeto

// Aqui que entra o bind()

// Toda Function tem:
// - um nome. Ou pode ser anonima, sem nome
// - um código a ser invocado
// - todas as functions tem acesso a alguns métodos ou
// functions especiais por conta própria, como:
// call()
// apply()
// bind()
// essas três functions tem a ver com com a vairiável 'this'

const person = {
  firstname: 'Guilherme',
  lastname: 'Barroso',
  getFullName: function() {

    const fullname = this.firstname + ' ' + this.lastname
    return fullname
  }
}

const logName = function (lang1, lang2) {

  console.log('Logged: ' + this.getFullName()) // vai falhar
  // pq esse this.getFullName está procurando a variável
  // no contexto global

  console.log('Arguments: ' + lang1 + ' ' + lang2)
  console.log('-------------')
}
// }.bind(person)

// logName()

const logPersonName = logName.bind(person) // aqui eu passo o
// person ao this

logPersonName('en')

logName.call(person, 'en', 'pt') // isso chama a function

logName.apply(person, ['en', 'pt']) // apply faz o mesmo que o call
// com a diferença que ele espera um array de parametros

// (function(lang1, lang2) {

//   console.log('Logged: ' + this.getFullName())
//   console.log('Arguments: ' + lang1 + ' ' + lang2)
//   console.log('-------------')

// }).apply(person, ['pt', 'en'])

// function borrowing
const person2 = {
  firstname: 'Marcela',
  lastname: 'Gueiros',
}

console.log(person.getFullName.apply(person2))

// function currying - criando uma cópia
// com o bind() você cria uma nova cópia dessa function
function multiply (a, b) {
  return a*b
}

const multipleByTwo = multiply.bind(this, 2) // definindo o valor de a
// constantemente para 2

console.log(multipleByTwo(4)) // passando 4 como valor de b

const multipleByThree = multiply.bind(this, 3, 20) // valores permanentes
// para a e b
console.log(multipleByThree())