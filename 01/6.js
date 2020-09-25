//New

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
}

function mouse(name){
    this.name= name
}

var m1 = new mouse('A');
var m2 = new mouse('B');
var m3 = new mouse('C');
tom.eat(m1).eat(m2).eat(m3);
console.log(tom);