// Arrays
var arr = new Array()
// ou

var arr = [1,
  false,
  {
    name: 'Guilherme',
    address: '960 Clodomiro Amazonas, Rua'
  },
  function(name){
    var greeting = 'Hi'
    console.log(greeting + name)
  },
  'hello'
]

// arr[0] // fazendo referencia a primeira posição do array

console.log(arr)
arr[3](arr[2].name) // passando o primeiro elemento de um
// objeto na terceira posição do meu array como parametro
// da function na terceira posição do meu array