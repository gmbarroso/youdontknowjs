// Closures and Callbacks
function sayHiLater() { // 2
  const greeting = 'Hi'

  // Callback function
  // function que fazm algo depois de executar outra function
  // dando esta para outra executá-la
  setTimeout(function() { // 3 e aloca na memória
    console.log(greeting)
  }, 3000)
}

sayHiLater() // 1

// CallBack Function
// uma function que é dada a outra function para ser executada
// quando esta outra terminar
// Call Back - Chama de volta



function tellMeWhenDone(callback) {
  const a = 1000 // qualquer coisa
  const b = 2000 // qualquer coisa

  callback() // the callback que roda a function que eu dei a ela
}

tellMeWhenDone(function() {
  console.log('Eu terminei')
})

tellMeWhenDone(function() {
  console.log('E está tudo pronto agora')
})