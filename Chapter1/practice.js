const taxa = 0.08
const telefonePreco = 100.99
const acessorio = 10.99
const limite = 250

var contaBancaria = Number(prompt("Diga-me quanto você tem em conta: "))
var totaldaCompra = 0;


function calculoTaxa(totaldaCompra) {
  return totaldaCompra * taxa
}

function formatoNumero(totaldaCompra) {
    return '$' + totaldaCompra.toFixed(2)
}

function eita(){
    for(totaldaCompra = 0; totaldaCompra < contaBancaria; totaldaCompra = totaldaCompra + telefonePreco) {
        console.log (totaldaCompra)
        console.log(contaBancaria)
        if (totaldaCompra < limite){
            totaldaCompra = totaldaCompra + acessorio
            console.log('oi')
            console.log(totaldaCompra)
        }
    }
}

totaldaCompra = totaldaCompra + calculoTaxa(x)

console.log('sua compra terminou em: ' + formatoNumero(totaldaCompra))