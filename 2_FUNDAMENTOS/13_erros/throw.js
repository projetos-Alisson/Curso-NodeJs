//throw(lançar) - Finishes the program, upon find error
const x = "10";

//Chegar se x é um número
if(!Number.isInteger(x)){
throw new Error("O valor de x não é um número inteiro")
}
console.log("Continue o código")