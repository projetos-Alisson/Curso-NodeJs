//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos
const fs = require("fs");

initialScreen();

function initialScreen() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "login",
        message: "Bem vindo ao nosso banco!",
        choices: ["Entrar", "Cadastrar"],
      },
    ])
    .then((answer) => {
      const action = answer["login"];

      if (action === "Entrar") {
        login();
      } else {
        createAccount();
      }
    })
    .catch((err) => {
      console.log("Erro na tela inicial do App : " + err);
    });
}

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

      switch (action) {
        case "Criar conta":
          createAccount();
          break;

        case "Depositar":
          deposit();
          break;

        case "Consultar Saldo":
          createAccount();
          break;

        case "Sacar":
          createAccount();
          break;

        case "Sair":
          console.log(
            chalk.bgBlue.black("Obrigado por utilizar nossos serviços!")
          );
          break;
      }
    })
    .catch((err) => console.log(err));
}

//create an account

function createAccount() {
  console.log(chalk.bgGreen.black("Obrigado por confiar em nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir!"));
  buildAccount();
}

function login() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta",
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
      const user = answer["accountName"];
      console.log(chalk.bgGreen.black(`Bem vindo ${user}`));
      operation();

      //verify if account exists
      if (!checkAccount(user)) {
        //if account not exists, so do questions
        return deposit();
      }
    })
    .catch((err) => console.log(err));
}

function buildAccount() {
  inquirer
    .prompt([
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
      const accountName = answer["accountName"];
      const accountEmail = answer["accountEmail"];

      //Imprimir nome digitado do usuário para conferência
      console.info(accountName);
      console.info(accountEmail);

      //Criar "banco de dados" para registrar as contas
      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      //Se a conta existe, não poderá criar a mesma
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta já existe, escolha outro nome!")
        );
        buildAccount();
        return;
      }

      //Registrar no "banco de dados"
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green("Parabéns, sua conta foi criada!"));
    })
    .catch((err) => console.log(err));
}

//add an amount to user account

function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta",
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
      const accountName = answer["accountName"];

      //verify if account exists
      if (!checkAccount(accountName)) {
        //if account not exists, so do questions
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja depositar?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          //add an amount

          addAmount(accountName, amount);
          
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

//Functions to deposit

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }

  return true;
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountJSON);
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!")
    );
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`)
  );
  operation();
}
