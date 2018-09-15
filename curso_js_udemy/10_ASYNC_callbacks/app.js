// Assíncrono
// Significa que vários códigos estão sendo executados de uma vez
// JS é síncrono que manipula eventos assíncronos

// JS Engine

// Browser
// Rendering Engine + JS Engine + HTTP Request

// JS Engine amarra outras partes do Browser e faz funcionar

// Event Queue
// Click envent
// click do mouse

function espereTresSeg () {
  let ms = 3000 + new Date().getTime()
  while (new Date() < ms){}
  console.log('function finalizada')
}

function clickHandler() {
  console.log('click event')
}

document.addEventListener('click', clickHandler)

espereTresSeg()
console.log('finished execution')

// Verificacção continua
// Verificasr se algo aconteceu e controlar isso através do código