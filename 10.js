// var a = {
//     name: 'AAA',
//     run: function(){
//         var run2 = function(){
//             console.log(this.name);
//         }.bind(this);

//         run2();
//     }
// }

// CHÚ Ý 
// arrow function no context => lấy context gần nhất
var a = {
    name: 'AAA',
    run: function(){
        var run2 = () =>{
            console.log(this.name);
        }
        run2();
    }
}
a.run();

var b = {
    foo: 'bar',
    run: function(){
        setTimeout(() => {
            console.log(this.foo);
        },2000)
    }
}
b.run();