//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos
const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar conta") {
        createAccount();
      }
    })
    .catch((err) => console.log(err));
}

//create an account

function createAccount() {
  console.log(chalk.bgGreen.black("Obrigado por confiar em nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir!"));
    buildAccount()
}

function buildAccount() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Digite um nome para a sua conta",
    },

    {
      name: "accountEmail",
      message: "Digite seu email",
    },
    {
      type: "password",
      mask: "*",
      name: "accountPassword",
      message: "Digite uma senha",
    },
  ])
  .then((answer) => {
    const accountName = answer['accountName']
    
    //Imprimir nome digitado do usuário para conferência
    console.info(accountName)

    //Criar "banco de dados" para registrar as contas
    if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
    }

    //Se a conta existe, não poderá criar a mesma
    if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
    )
    buildAccount()
    return
    }

    //Registrar no "banco de dados"
    fs.writeFileSync(
        `accounts/${accountName}.json`, 
        '{"balance": 0}',
        function(err){
            console.log(err)
        },
    )

        console.log(chalk.green('Parabéns, sua conta foi criada!'))
  })
  .catch(err => console.log(err))
}
