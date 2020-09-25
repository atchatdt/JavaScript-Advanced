//inheritance => kết thừa

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log('Eating...');
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log('Flying...');
//     }
// }

// var bird =  new Bird('AAA');
// bird.fly();
// bird.eat();

function Animal(name){
    this.name = name
}
Animal.prototype.eat = () => console.log('Eating....');

function Bird(name){
    Animal.apply(this,arguments)
}
Bird.prototype =  new Animal();

const bird = new Bird;
bird.eat();