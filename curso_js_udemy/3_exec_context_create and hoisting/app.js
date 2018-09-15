b()
console.log(a)
// Isso vai dar um erro

var a = 'Hello World'

function b() {
  console.log('Called b!')
}

// Esse é o fenomeno de Hoisting(içamento ou amarra)
// um valor está sendo esperado e muitas vezes não
// vem um erro, mas em js um valor muitas vezes é definido como
// undefined

// FASE DE CRIAÇÃO
// Global Obj + 'this' + Ambiente externo
// Alocação de memória para variáveis e functions

// FASE DE EXECUÇÃO
// Todas as variáveis em JS são previamente definidas como undefined
// por isso a ordem de escrita é importante mesmo que JS seja async
var a = 'Hello World'

function b() {
  console.log('Called b!')
}

b()
console.log(a)