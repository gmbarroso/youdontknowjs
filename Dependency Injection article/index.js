// Closure: cria um ambiente fechado onde qualquer function interna terá
// acesso às variáveis passadas por parâmetro das funções pai
const add = ( x ) => ( y ) => x + y

add(2)(3)

const add2 = add(2)

add2(3)

// basicamente, você usa uma closure quando você pode passar um valor por
// parametro que será usado na function
// Na primeira execução ela retorna uma outra function. Essa outra function
// recebe o valor de x da primeira execução.
// Closure serve para Injetar dependência

// Dependency Injection
const words = [
  'oi', 'como', 'vai', 'você', 'seu', 'idiota'
]

const blacklist = [
  'idiota', 'babaca', 'fdp'
]

// Usando o filter para tirar as palavras indesejadas
const wordsClean = words.filter( word => !blacklist.includes( word ) )

console.log( 'wordsClean: ', wordsClean )


// Refatorando o código acima e separando o callback do filter em cleanwords
const words = [
  'oi', 'como', 'vai', 'você', 'seu', 'idiota'
]

const blacklist = [
  'idiota', 'babaca', 'fdp'
]

const cleanWords = ( word ) =>!blacklist.includes( word )

const wordsClean = words.filter( cleanWords)
console.log('wordsClean: ', wordsClean)

// Encapsulando a responsabilidade da filtragem na function filterwords
const words = [
  'oi', 'como', 'vai', 'você', 'seu', 'idiota'
]

const blacklist = [
  'idiota', 'babaca', 'fdp'
]

const cleanWords = ( word ) => !blacklist.includes( word )

const filterWords = ( words ) => words.filter( cleanWords )
const wordsClean = filterWords( words )

console.log( 'wordsClean: ', wordsClean )

