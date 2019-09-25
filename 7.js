//Prototypes => tạo ra chung để dùng => tiện hơn khi có thể define ở bê ngoài
function Mouse (name,color, weight){
    this.color =color,
    this.weight = weight,
    this.name = name
}

Mouse.prototype.sleep = function(){
    console.log(this.name + ' Slepping')
}

var jerry = new Mouse('Jerry','orange',20);
var mickey = new Mouse('Mickey','white',50);

jerry.sleep();
mickey.sleep();
console.log(jerry.sleep === mickey.sleep)