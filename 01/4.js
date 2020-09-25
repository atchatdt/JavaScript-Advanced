// array.reduce( ()=> ,defaultvalue) default value sẽ là giá trị để thay thế cho lần đầu tiên của 
//item 1 => kiểu như muốn tính tổng 2 mảng ấy

var order = [
    {name: 'A', quantity:2, unitPrice: 100},
    {name: 'A', quantity:2, unitPrice: 100},
    {name: 'A', quantity:2, unitPrice: 100}
]

var arr = order.map(x=>x.unitPrice*x.quantity).reduce((x,y)=>x+y);

var total = order.reduce((item1, item2)=> item1+ item2.quantity*item2.unitPrice,0);


console.log(arr);
console.log(total);

var items = ['Tom', 'Bill', 'Kim'];

//Reduct
var result = items.reduce( (x,y)=> x+ '<' + y + '>',"");
//Map

var result2 = items.map(x=> '<' + x +'>').join('');
console.log(result);
console.log(result2);