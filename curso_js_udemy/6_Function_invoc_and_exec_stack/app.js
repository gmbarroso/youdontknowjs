// Invocation
// Rodar uma function
// você invoca, chama uma função com o seu nome e o () no final.
// isso significa que naquela parte do código ela será executada.

function a() {
  b() // 2
  var c // 3
}

function b() {
  var d
}

a() // 1
var d // 4

// Toda function cria um contexto de execução
// Então, num código, primeiro é criado um ambiente Global
// Onde as variáveis serão criadas e depois executadas, mas
// quando se cria uma função e já a chama com (), se cria um
// Contexto de Execução, onde a função é criada e já
// executada antes do passo global