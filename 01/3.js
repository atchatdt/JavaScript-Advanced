// Map, item trong function giống như giá trị đại diện cho tất cả
// obj => obj
var rectangles = [
    {width:10, height:5},
    {width:8, height:7},
    {width:9, height:10}
]


var arr = rectangles.map(x=>x.width*x.height);

console.log(arr);