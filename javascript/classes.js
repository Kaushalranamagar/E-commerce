

let car ={
    name: "RoyalRoyce",
    color: "red",
    drive: function(){
      console.log("driving...")       
    }
}

function car(name,color){
    this.name= name
    this.color= this.color
    this.drive =function(){
        console.log("driving..");
    }
}

car.prototype.drive =() =>{
    console.log("driving..");
}

let car1 = new car("tesla","white");
let car2 = new car("Kia","white");

//OOP


class Animal{
    constructor(name,color,sound){
        this.name = name;
        this.color = color;
        this.sound= sound;
    
    }
    makeSound(){
      //console.log("" + JSON.stringify(this));
       console.log("making sound..")
    }
}

let animal_1 = new Animal("dog", "white","barking")
let animal_2 = new Animal("cat", "brwon","moew")


class Dog extends Animal{
  constructor(name, color, sound, is_loyal){
    super(name,color,sound)
    this.is_loyal = is_loyal
  }

  makeSound(){
    console.log("unique to dog only")
  }
} 
let dog1 = new Dog("white", "husky","barking",true);

//console.log(animal_1);
//console.log(animal_2);
//animal_1.sound()
//dog1.color ="red"
//console.log(dog1);
dog1.makeSound();

/*  console.log(car);
 console.log(car1);
 car2.drive() */

 class Employee{
    constructor(name,salary){
        this.name = name;
      this.salary = salary;
     // this.bonus= 500;

    }
    #bonus = 500;
  
 //setter and getterw method
  setBonus(num)
  {
    this.#bonus =num 
  }
  
  calculateInterest(){
     return this.salary * 0.1;
  }
    calculateSalary(){
        console.log(this.#bonus + this.salary + this.calculateInterest() )
    }
}

const emp1 = new Employee("asmita" , 10000);
// emp1["#bonus"] = 1000;
emp1.setBonus(2000);
emp1.calculateSalary();
console.log(emp1)


 // inheritance => parent ko pani property children ma leraune 
 // encapsulation =>
 //polymorphism => to show multiple forms
 //abstraction