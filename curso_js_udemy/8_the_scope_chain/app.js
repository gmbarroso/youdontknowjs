
// function b(){
//   console.log('b', myVar)
//   // myVar fica definido como 1 por causa da declaração
//   //  dele no escopo global
// }

// function a() {
    var myVar = 2
//   b()
// }

// var myVar = 1
// a()

// O código roda de cima para baixo. Esse comportamento
// Se chama cadeia de escopo. Meu código começara a rodar
// Vai acessar a function b e não vai encontrar nada
// Vai para o a e continua a não encontrar até que ele
// acha o valor no escopo global. Então ele volta e me retorna o console
// que está dentro da function b.

// E se eu mudar o contexto?
function a() {
  function b(){
    console.log('b', myVar)
  }

  var myVar = 2
  b()
}

var myVar = 1
a()
// O valor muda para 2, pois ele vai buscar o valor de myVar em algum lugar
// Como eu estou executando a function a com () o valor muda para 2
// E o console.log me retorna 2 pq o escopo da function b mudou.
// Ele se encontra no escopo da function a

// Se eu remover a declaração dentro de a, meu valor volta a ser 1
// PQ ele irá voltar a buscar o valor de myVar no contexto global
