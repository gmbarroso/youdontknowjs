// Variable Environment
// Onde a variável está
// e Como ela se relaciona em diversas partes do código
function b(){ // 3
  var myVar // undefined
  console.log(myVar)
}

function a() { // 2
  var myVar = 2
  console.log(myVar)
  b()
}

var myVar = 1 // 1
console.log(myVar)
a() // 2
console.log(myVar)

// Isso é o que chamamos de escopo
// onde o seu código está e em qual escopo a sua variável se encontra