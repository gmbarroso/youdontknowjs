function greet(whattosay) {
  //Ao invés de um trabalho dentro dessa function
  // vamos retornar uma nova function
  // callback??

  return function(name) {
    console.log(whattosay + ' ' + name)
  }

}

// functions são objetos e eu posso apenas devolvê-las
// como valor

greet('Hi')('Guilherme') // isso retorna uma function
// é o mesmo que
var sayHi = greet('Hi')
sayHi('Guilherme')

// Como que sayHi entende o que vem dentro dela?
// Como que sayHi acaba sendo a mesma coisa que a function greet
// É possível por causa das Closures

// Closures é o fenômeno de fechar todas as variáveis para as quais
// o contexto global deveria ter acesso.
// então, o que acontece é: sayHi é chamado no contexto global.
// o valor dela é greet, então greet é acessada. Ela é acessada
// e nada acontece.
// quando ela é acessada, a function dentro dela rodou um console. log
// que ficou alocado em memória.
// assim, quando invocamos a sayHi com um parametro dentro dela,
// ela associa e chega no resultado que queremos, preenchendo o name
// com o parametro passado.

// ISSO É ESPECIFICO DO JS
// CLOSURES NÃO SÃO TÃO COMPLICADAS.

// PART 2
function buildFunctions() { // 2
  var arr = []
  for (var i=0; i<3; i++) {
    arr.push( // first class functions
      function() {
        console.log(i)
      }
    )
  }

  return arr // 3
  // aqui estou alocando o valor de i = 3
  // foi o último valor que ele associou para sair do loop
  // e arr = [f0, f1, f2]
  // eles vão para a memória aqui
}


var fs = buildFunctions() // 1
 // variáveis livres: variáveis que estão fora de functions
 // mas que temos acesso a elas
fs[0]() // 4
fs[1]() // 5
fs[2]() // 6





function buildFunctions2() { // 2
  var arr = []
  for (var i=0; i<3; i++) {
    let j = i // toda vez que essa parte do código for acionada (loop)
    // criará uma nova variável j na mamória
    arr.push(
      // como executar uma function antes de tudo
      // para colocá-la em memória e permitir o acesso a ela
      // no contexto global?
      (function(j) {
          return function() {
            console.log(j)
          }
      }(i)) // uma vez acessada, o código não precisa passar pelo
      // loop novamente, ele roda só a parte do cósigo que está entre ()
    )
  }

  return arr
}

var fs2 = buildFunctions2() // 1

fs2[0]() // 4
fs2[1]() // 5
fs2[2]() // 6