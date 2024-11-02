//1-Conversões

let n = 5;
let num = n.toString()
let n1 = 5.34;
let n2 = "47 6 90"


console.log(typeof(num));
console.log(parseFloat(n2))


//2- Prototype - Permite adicionar propriedades a um objeto que já foi criado

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.eyeColor = eye;
//   }
//   const myFather = new Person("John", "Doe", "blue");
//   const myMother = new Person("Sally", "Rally", "green");
  
//   Person.prototype.nationality = "English";
  
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.nationality + "<br>" +
//   "My mother is " + myMother.nationality;



//3-Interar sobre propriedades de objeto

const products = [
    
    {
      id: 1,
    nome: "Super Mario Odyssey",
    preco: "R$300,00",
    image: "/img/mario.jpg",
  
    
  },
  
    {
      id: 2,
      nome: "Katana Zero",
      preco: "R$20,00",
     image: "/img/katana-zero.jpg",
  
  },
  
    {
      id: 3,
      nome: "Hades",
      preco: "R$45,00",
      image: "/img/hades.jpg",
  
  },
  
    {
      id: 4,
      nome: "Batman Arkham Knight",
      preco: "R$30,00",
      image: "/img/batman.jpg",
  
  }
]

let result;

   products.forEach(product => console.log(result =product.nome))
   
   
  
