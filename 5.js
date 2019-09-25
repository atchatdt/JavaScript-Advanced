//SORT
// a < b => a trước b tằng dần
// a > b => b trước a giảm dần
// a = b => bằng nhau không hoán đổi
var number = [2,9,5,8,7];

var numberSort = number.sort((a,b)=> a - b);

console.log(numberSort);

var employees = [
    {name: 'A', age: 18},
    {name: 'B', age: 20},
    {name: 'C', age: 19},
    {name: 'D', age: 17}
]
var emSort = employees.sort((x,y)=> x.age - y.age );

console.log(emSort);

var str = ['A','B','F','D','C']

var strSort = str.sort((x,y) => x.toLowerCase() > y.toLowerCase() );
console.log(strSort);