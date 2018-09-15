// Value vs Reference
// em ambos os casos estamos falando de variáveis
// Primitive Value
// se a, aloca um endereço, por exemplo
// a = endereço
// e eu chamo b, b = a
// b copia o valor de a
// isso significa by Value
// passo um valor ao outro, copiando esse valor

// ========
// Agora se tenho um Objeto, e eu tenho um a que tem um
// valor endereço (Rua tal)
// Se eu chamo b = a nesse caso, ou passando uma function
// eu estou fazendo uma referencia a 'a'
// isso se chama by Reference
// todos os objetos se interagem by reference

// Exemplos:
// by value (primitives)
var a = 3
var b
b = a
// aqui eu estou copiando o valor de a

a = 2
// mesmo depois que eu mude o valor de a, eu não mudo o valor de b
// o contexto muda
console.log(a)
console.log(b)

// by reference (all objects (including funcrtions))
var c = { greeting: 'hi'}
var d

d = c
c.greeting = 'hello' // mutate
//Mutate
// Mudar alguma coisa. Uma coisa Imutável significa que não pode
// sofrer nenhuma alteração.

console.log(c)
console.log(d)
// nesse caso, os dois mudam pq o d está tomando como referencia o c
// ele carrega o valor de c
// eles estão apontados a um mesmo local em memória


// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Oi' // mutate
}

changeGreeting(d)
console.log(c)
console.log(d)

//equals operator sets up new memory space (new address)
c = { greeting: 'Hola'}
console.log(c)
console.log(d)
//um caso especial
// c ficará com o seu novo valor, mas o d não
// nesse ponto do código o c ainda não mudou de valor, então
// ele muda, mas o d já alocou o valor do c antigo, por isso
// ele traz o valor antigo do c. A referencia dele não mudou
