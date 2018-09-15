// JSON
// JavaScript Object Notation
var objliteral = {
  firstname: 'Gui',
  isaPRogrammer: true
}

// console.log(objliteral)
console.log(JSON.stringify(objliteral))

{/* <object>
  <firstname>Gui</firstname>
  <isaProgrammer>true</isaProgrammer>
</object> */}
// com XML, as tags são transportadas tb
// causando uma transferência de dados desnecessária

// {
//   "firstname": "Gui",
//   "isaProgrammer": true
// }

var jsonValue = JSON.parse('{ "firstname": "Gui",  "isaProgrammer": true }')

console.log(jsonValue)

// JSON é um formato mais fácil e compacto de transferir dados
// via servidor ou navegador
// mais fácil que o XMLDocument, por exemplo