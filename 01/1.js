// Bind => chú ý
var mouse = {
    name: 'Mouse',
    sayHi: function(){
        console.log('My name is', this.name);
    }
}

var cat = {
    name: 'Cat'
}

var say = mouse.sayHi.bind(mouse);
say();