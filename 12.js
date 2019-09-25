// Khác bind=> bind trả về dạng hàm
function greeting(){
    console.log(`Hi! ${this.name}. I am ${this.age}`);
}
var a = {
    name: 'A',
    age: 28
}

greeting.call(a);