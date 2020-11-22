
//exc-1
var person = {
    _salary: 1000,
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};

person._salary = 500;
var stoleSalaryInfo = person.getSecretSalaryInfo();


console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo); 

//exc-2

class Person  {
    constructor(name){
        this.name = name;
    }
    printName()
    {
        console.log(this.name);
    }
    welcome(){
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }

};

Person.prototype.planet = "Земя";
person1 = new Person("Чък Норис");
person2 = new Person("Виктория");
person3 = new Person("Aннa");

person1.welcome();
person2.welcome();
person3.welcome();

//exc-3

class Item{
    
    constructor(name,discount){
        this.name = name;
        this.discount = discount;
    }
    getPriceWithDiscount(){
        return this.price - this.price*(this.discount/100);
    }

};
Item.prototype.price = 1000;
Item.prototype.getPrice = function () {return 1000};

let item1 = new Item("item1",20); 
let item2 = new Item("item2",10);

console.log(item1.getPrice());

console.log(item1.getPriceWithDiscount());
console.log(item2.getPriceWithDiscount());


//exc-4

function PrivatePerson(salary){
    this.getSecretSalaryInfo = function() {
        return salary;
    }
}

Me = new PrivatePerson(5000);
console.log(Me.getSecretSalaryInfo()); 
Me.price = 50;
console.log(Me.getSecretSalaryInfo()); 
