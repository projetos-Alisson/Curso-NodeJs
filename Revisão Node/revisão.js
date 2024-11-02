//Array

// let animes = ["One Piece", "Naruto", "Dragon Ball", "Attack On Titan"]

// console.log(animes)

//For

//  console.log(animes[3] = "Boku no Hero")

// for( let i = 0; i < animes.length; i++){
//     console.log(animes[i])

// }

//For in


console.log("For in")
console.log("****************")

const person = {Name: "Alisson", Age: 17, FavoriteCor: "Black"}

for( i in person){
    console.log(person[i])
}



console.log("****************")
console.log("FOR IN + ARRAY")

//For in pode percorrer arrays

const numbers = [1,9,15,7,42,69];
txt = "";
for(i in numbers ){
    console.log(txt =+ numbers[i])

}



/*
1- Como criar um script de execução com o nodemon?
R: Acessando o arquivo json e criar um nome para o comando; escrever 'nodemon" nomedoarquivo.js localhost 3000; executar 
com: npm run nomearquivo (ignorar o run se o nome for "start")

2-Quais funções Leêm, escrevem, excluen um arquivo com Node?
    readFile
    writeFile ou appendFile
    unlink
    createFile


3-O que são Middlewares?Pra que servem? Como se aplicam?
R: Middlewares são códigos que são executados no meio de uma ação;  podem
decidir o fluxo da regra de negócio (se deve continuar ou não; se vai continuar o que deve acontecer?)

function(req,res, next)

OUTRO EXEMPLO DE MIDDLEWARE:

express.urlcoded({extended: true}) //or false

extended: Diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.

A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha:

// {"animal":{"tipo":"cachorro","raca":"vira-lata","idade":3}}
E a biblioteca querystring não suporta nested objects.


-urlencoded é um parser das informações vindas no body da request.urlencoded é um parser das informações vindas no body da request.


4-Como converter uma resposta do usuário em um JSON?
5-O que é código sincrono e assincrono?
6-Como criar um sevidor sem express?
7-Como acessar uma rota, indo através de links?
8-Qual a primeira página que será interpretada dentre essas?

app.get('/')
app.get('/home')
app.get('/sobre)

A rota com "/", será tida como a principal, pois é a que veio primeiro. Para desviar dessa interpretação e
fazer com que "/home" seja a principal, deve-se colocá-la acima das outras

9-Como acessar parâmetros pela URL?
R: Utilizar no slug "/slug:nome-parametro"

app.get("/nome:nome", (req,res))

Resgatar dado armazenando dentro de uma variável

const nome = req.params.nome

10-Como funciona a estrutura do handlebars?

R: -Há uma pasta chamada "views" que representam componentes do site;
   -Cada componentes recebe a extensão do nome da linguagem de templates;
   -Dentro de views, a pasta layout recebe um arquivo geralmente chamado de main.handlebars
   -Esse último contém seções do site que são persistentes (menu,footer,etc)
   -Em app.js, configura-se o handlebars, partials e criamos uma rota referente aos
   componentes que criamos para disponibilizar variáveis, por exemplo;
   -Dentro do componente se escreve o html que se deseja manter em todas as páginas
   -No conteúdo do main, deve-se colocar a tag {{{body}}} que vai "puxar" o conteúdo de todos  os
   componentes


10.1 - Configurar partials?

const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', './views');



10.2 - Por que renderizar o nome da página do componente?
R: Para que seja reconhecido como arquivo handlebars e então processado
11-Como tranferir dados de variáves para os componentes?

-Declare as variáveis na rota desejada
-Na presente rota escrever: app.render("nome-componente-handlebars", nomeVariavel1, nomeVariavel2...)

12-Como criar condicionais?

-No componente:

{{#if condition }} 
    aconteça algo...
{{else}}
    acontça outra coisa...
{{/if}}




Como Funciona o MINI TEMPLATE DO PARTIALS?

Permitem criar componentes, tipo o react

1- No app.js, crie uma rota com as variáveis e escreva para ser renderizado o nome
do arquivo handlebars desejados, mais as variáveis.

Exemplo de nome de rota: blog; variável: posts

2-Crie um MODELO handlebars com as variáveis/propriedades que se deseja utilizar
nesse componente;

3 -Crie um arquivo handlebars, que PERCORRERÁ, cada elemento das propriedades criadas
e dentro do MODELO e adicione um {{> partial}} para fazer uma espécie de FILTRO das
variáveis que vão ser utilizadas. 

Exemplo de nome: post;


RESUMO:

1- app.js - rota com infos;
2- Modelo com as informações desejadas (o template de fato );
3- Componente "Filtrado" que será renderizado em app.js

*/