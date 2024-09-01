//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)
//Dividir 'variavel=valor' para pegar apenas o valor
const nome = args[0].split("=")[1] 
const idade = args[1].split("=")[1] //Outro argumento

//Resgatar argumento
console.log(nome)
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos de idade`)