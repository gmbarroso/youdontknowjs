// Programação Funcional
// JS é uma linguagem que tem functions de primeira classe
// Functions que se coportam como objetos
// que você pode passar como variáveis
// Programação Funcional é onde pensamos em códigos em
// termos de funções

function mapForEach(arr, fn) {
  // map significa mais ou menos o que fizemos abaixo com o for
  // vou pegar um array, fazer alguma coisa com ele e obter um
  // novo array
  let newArr = []
  for (let i=0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  }
  return newArr
}

let arr1 = [1,2,3]
console.log(arr1)
// let arr2 = []
// for (let i=0; i < arr1.length; i++) {
//   arr2.push(arr1[i]*2)
// }
let arr2 = mapForEach(arr1, function(item){
  return item * 2
})
console.log(arr2)

let arr3 = mapForEach(arr1, function(item){
  return item > 2
})
console.log(arr3)

// os exemplos acima são exemplos clássicos de
// Programação Funcional

let checkPastLimit = function(limiter, item) {
  return item > limiter
}
let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1))
// faço uma cópia do checkPastLimit usando bind
console.log(arr4)

var checkPAstLimitSimplified = function (limiter) {
  // criando um objeto
  return function(limiter, item) {
    return item > limiter
  }.bind(this, limiter)
}

let arr5 = mapForEach(arr1, checkPAstLimitSimplified(6))
console.log(arr5)