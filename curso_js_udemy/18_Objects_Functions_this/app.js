// Quando uma function é chamada, um novo contexto
// de execução é criado. Não confundir com o Obj em
// discussão
// Pensemos em contexto de execução quando focamos
// em uma parte do código de uma função do Objeto.
// O que acontece quando eu rodo o código nesse contexto?
// Suponhamos que temos uma parte do código sendo
// executada. E temos um outro escopo nesse mesmo código
// que está sendo também executado que faz referencia ao escopo
// anterior.
// Ou seja, se eu pedir uma variável desse escopo e ele não
// estiver lá dentro dessa funtion, o meu código irá procurar
// essa variável até sair para escopos externos e atingir o
// contexto global atrás dessa variável. É assim que JS funciona.
// Mas também, JS funciona, quando criamos uma função, méteodo, um
// escopo, nos dá acesso automático a esses diversos contextos
// através do 'this'.
// O 'this' estará sempre apontando para um elemento diferente
// dependendo de como eu chamo uma determinada function.
// Que confusão!
// console.log(this) // objeto vazio ou Window Object

// function a() {
//   console.log(this)
//   this.newvariable = 'hello'
//   // neste caso, usando o this dentro dessa function,
//   // estou alocando essa newvariable ao contexto global
//   // mesmo eu fazendo isso dentro da function ele está
//   // tb acessível ao contexto global
// }

// var b = function (){
//   console.log(this)
// }

// a() // acessa Window Obj
// b()
// console.log(newvariable) // veja como eu chamo ele
// sozinho, sem fazer referencia a function a

// LEMBRANDO: se um valor é primitivo, eu chamo isso de
// propriedade
// se um valor é uma função, eu chamo isso de método

// Este caso é peculiar:
// No caso te termos um método ligado como valor
// o this irá fazer referencia ao contexto do objeto.
// é como se a variável c fosse o contexto global dela
var c = {
  name: 'The c obj',
  log: function() {
    const self = this


    // se dentro dessa function eu fizer:
    // this.name = 'Update c object' // eu mudo o valor de name
    self.name = 'Update c object'
    // console.log(this)
    console.log(self)

    var setname = function (newname) {
      // this.name = newname
      self.name = newname
      // neste caso, o JS, "erroneamente", aponta o name
      // como se estivesse em um contexto global,
      // fora do contexto do c
      // uma maneira de evitar isso é alocando o this
      // em uma variável
    }
    setname('Updated again the c obj')
    console.log(self)
  }
}


c.log()

