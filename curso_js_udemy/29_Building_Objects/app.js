// Function Constructors 'new'
// var gui = new Person()
// Uma Classe
// Uma classe em JAVA não é um objeto, mas define um objeto
// não é ruim trabalhar dessa forma, mas tem seus problemas.
function Person(firstname, lastname){
  console.log(this)
  this.firstname = firstname
  this.lastname = lastname
  console.log('Essa functione stá sendo invocada')
}

let gui = new Person('Guilherme', 'Barroso')
console.log(gui)
// new é um operador. Quando colocamos new, alguma coisa acontece.
// Ele invoca uma function que está sendo chamado após ela.
// no caso de termos um this dentro dessa function
// é que o new com o this, faz com que aquele elemento dentro da function
// seja apontado para outro lugar, no caso um objeto vazio

let mar = new Person('Marcela', 'Gueiros')
console.log(mar)

// Function Constructors
// uma function normal que é usada para construir objetos
// a variável this aponta para um novo objeto vazio
// e esse objeto retorna da function automaticamente