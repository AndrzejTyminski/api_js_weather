//Es5
function User (name, agex, color)
    {
      this.name = name
      this.agex = agex
      this.color = color
    }
//odwolanie do konstruktora, aby utworzyc objekt
const newUser = new User( `Puzel`, 20, `blue`);
const newUser2 = new User( `Apuzel`, 120, `red`);

//prototype <rodzic> objektu USER ktory nadaje wszystkim objektom wspolna czesc.
User.prototype.hello = function ()
    {
    return `Cześć - ${this.name}, ${this.agex} lat, ${this.country}`;
    }
User.prototype.country = `Poland`;

newUser.hello();
newUser2.hello();
newUser.country;

//es6 - konstrukor CLASS tworzy szablon obiektu
class User2
  {
    static NAMES = "static from User2"; //stała
    constructor(name, age, wzrost, waga)
      {
        this.name = name
        this.age = age
        this.wzrost = wzrost
        this.waga = waga
      }
    }
 //prototyp
  User2.prototype.getInfo = function ()
        {
          return `${this.name}, ${this.age} lat, wzrost ${this.wzrost}m, waga ${this.waga}kg, gatunek: ${this.gatunek}`
        }
  User2.prototype.getBMI = function ()
        {
          const BMI =  this.waga / (Math.pow(this.wzrost, 2))
          const bmiFloor = Math.floor(BMI)
          return `BMI ${this.name} = ${bmiFloor}`
        }

  const mojeDane = new User2("Pyza", 30, 1.74, 65);

console.log(User2.NAMES)
console.log(mojeDane.getInfo())
console.log(mojeDane.getBMI())


//dziedziczenie

class Pet extends User2
{
  constructor (name, age, wzrost, waga, gatunek) {
    super (name, age, wzrost, waga);
    this.gatunek = gatunek;
  }
}

const olowek = new Pet ("Olowek", 2, 0.2, 3, "kot");

console.log(olowek.getInfo());
console.log(olowek.getBMI());


//Arrow function

let myFunction = (a, b) => a * b;

hello = () => {
  return "Hello World!";
}

hello = function() {
  return "Hello World!";
}


