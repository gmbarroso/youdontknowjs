// Classical Vs Proptotypal Inheritance
// Herança: um objeto ganha acesso Às propriedades e
// métodos de outro objeto

// Herança Clássica
// é o que vem sendo feito a muito tempo
// o que é muito comum
// Não que seja ruim, mas é uma maneira de se programar
// É muito verboso.
// Dificil de saber o que influencia no que ao longo do seu projeto

// Herança Prototipada
// é mais simples, mas não melhor
// é apenas uma outra maneira de se programar
// é mais flexivel
// digamos que tenhamos um obj e ele tem uma propriedade1:
// obj.propriedade1
// todos os objetos e isso inclui function, tem uma propriedade chamada:
// proto{}, que é o prototype
// dentro desse proto{} temos o propriedade2
// se procurarmos por obj.propriedade2, ele vai achar, pois
// vai entrar em proto e achará nosso parametro lá, e assim vai (prototype chain)
// Se eu tenho um obj2 e apontar para os protótipos de obj, ele vai acessar Às
// mesmas propriedades que passei para obj
// vamos lá

let person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname
  }
}

let gui = {
  firstname: 'Guilherme',
  lastname: 'Barroso'
}

// Faremos agora algo que não se deve fazer
// problema de processamento
gui.__proto__ = person
// dessa maneira, o que mandarmos procurar em gui e não
// existir em gui, ele vai para person
console.log(gui.getFullName())

// var marce = {
//   firstname: 'Marcela'
// }

// marce.__proto__ = person
// console.log(marce.getFullName())

// Everything is an Object or a Primitive
// Todos tem proto
// menos o objeto base
// let a = {}
// let b = function(){}
// let c = []

// Reflection
// Um objeto que pode olhar a si mesmo, listando e mudando
// suas propriedades e métodos
for (let prop in gui) {
  if(gui.hasOwnProperty(prop)){
  console.log(prop + ': ' + gui[prop])
  }
}

