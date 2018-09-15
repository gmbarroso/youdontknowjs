function Person(firstname, lastname){
  console.log(this)
  this.firstname = firstname
  this.lastname = lastname
  console.log('Essa functione stá sendo invocada')
}

// Todas as functions, todas já criadas, ganham essa propriedade:
Person.prototype.getFullName = function() {
  // prorotype significa que ela começa a sua vida como um
// objeto vazio, está sempre lá e vocÊ pode acidionar coisas lá
  return this.firstname + ' ' + this.lastname
}

let gui = new Person('Guilherme', 'Barroso')
console.log(gui)

let mar = new Person('Marcela', 'Gueiros')
console.log(mar)

// o prototype cria uma cadeia de protótipos onde todos os
// Protótipos dos objetos criados estão apontando pra ele.
// então, gui e mar, ganham acesso ao getFullName
console.log(gui.getFullName())

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname
}

console.log(mar.getFormalFullName())

// Toda criação de objeto e function ocupa um espaço na memória.
// Então se eu trabalho com herança, todo mundo ocupará munito espaço
// Faz sentido que tudo que formos usar para todos os objetos,
// fiquem alocados em 'prototype'

// Sempre que usarmos uma function somo constructor
// nos atentarmos para por o new na frente e em seguida, usar
// letra maiúscula. É uma boa prática

console.log("Guilherme".length)

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit
}
// adicionando construtores em prototypes para que seja
// acessado por qualquer outro objeto.

console.log("Guilherme".isLengthGreaterThan(3))

Number.prototype.isPositive = function() {
  return this > 0
}

// 3.isPositive() // erro

var a = new Number(3)
// Number(3) parece um número mas não é número, CUIDADO!!!
// é um objeto que envolve ou empacota um número e adiciona vários recursos
console.log(a.isPositive())











