// Objects and Functions
// em JS eles estão muito relacionados, por
// isso tratá-los juntos

// Object
// Objetos são conjuntos de pares de NAme / Value
// Objetos podem ter propriedades e métodos
// Primitive Property, Object property, function method]
// quando o Objeto central e definido, ele fica endereçado na memória
// E tudo que está dentro dele terá uma referência na memŕoria

var person = new Object() // isso está sendo guardado na memória
// Existem outras maneiras de fazer esse exemplo
// mas por agora o faremos assim
// adicionando propriedades e métodos nesse novo objeto
// e usando um operador ([])para acessar o objeto
person["firstname"] = "Guilherme"
// Neste simples exemplo estou setando um novo parâmetro no meu objeto,
// mesmo que ele não exista. E estou dizendo que o parametro primitivo dele
// é uma string
person["lastname"] = "Barroso"

var firstNameProperty = "firstname"

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstname) // o ponto tambpém é um operador
console.log(person.lastname)

person.address = new Object()

person.address.street = "Clodomiro Amazonas"
person.address.number = "960"
person.address.city = "São Paulo"
person.address.state = "SP"

console.log(person.address.street)
console.log(person["address"]["state"])
console.log(person)