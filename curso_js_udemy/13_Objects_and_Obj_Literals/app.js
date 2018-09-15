// Em JS tem, na maioria das vezes, várias maneiras de resolver um problema
// var person = new Object() é o mesmo que:
var Guilherme = {
  firstname: 'Guilherme',
  lastname: 'Barroso',
  address: {
    street: 'Clodomiro Amazonas',
    number: '960',
    city: 'São Paulo',
    state: 'SP'
  }
}

function greet(person) {
  console.log ('Hi ' + person.firstname)
}

greet(Guilherme) // undefined

greet({
  firstname: 'Paulo',
  lastname: 'Barroso'
})



