//Enhanced object literals

var name = 'Tom';

var cat = {
    name,
    run(){
        console.log(this.name);
    }
}

cat.run();