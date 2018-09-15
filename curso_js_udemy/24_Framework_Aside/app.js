// Function Factories
// como fazer padrões usando o fato de que Closures existem
function makeGreeting(language) { // 3

  return function(firstname, lastname) { // 4

    if (language === 'en') { // 5 e salvos na memória
      console.log('Hi ' + firstname + ' ' + lastname)
    }

    if (language === 'pt') { // 6 e salvos na memória
      console.log('Olá ' + firstname + ' ' + lastname)
    }
  }

}

const greetEnglish = makeGreeting('en') // 1
const greetPortuguese = makeGreeting('pt') // 2

// Closures
greetEnglish('Guilherme', 'Barroso') // 7 um novo contexto
greetPortuguese('Guilherme', 'Barroso') // 8 um novo contexto
