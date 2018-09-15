// Escopo
// é onde uma variável está disponível em seu código
// E ela é tomada como verdade se for a mesma variável ou
// um nova declaração dessa variável.

// ES6 ou ECMAScript 2015
// está adicionando uma nova maneira de chamar uma variável
// ao invés de var, usa-se let
// Ex:
if (a > b) {
  let c = true
}

// uma variável declarada como let, mesmo que esteja num
// único contexto, se for um loop por exemplo, ele será declarado
// diversas vezes, e por estar declarado como let, cada chamada
// criará uma nova variável em memória, mesmo que tenha o mesmo valor

