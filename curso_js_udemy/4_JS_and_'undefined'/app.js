var a = 'Hello World'
console.log(a)

// undefined é diferente de "a is not defined"
// undefined é um valor especial que significa que um valor
// ainda não foi definido

if (a === undefined) {
  console.log('a is undefinied')
} else {
  console.log('a is defined')
}

// nunca set uma variável como undefined
// a = undefined