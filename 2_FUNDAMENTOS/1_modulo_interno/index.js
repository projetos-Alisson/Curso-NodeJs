const meu_modulo = require('./meu_modulo'); //Escrever o caminho do arquivo errado, fará com que o node interprete como um módulo do prórpi onode ou de terceiros (via NPM)
const soma =  meu_modulo.soma //encapsulamento de função; se escrever o nome da função junto com "()", será identificado como chamada, e gerará erro

soma(4, 5);
soma(20, 15)