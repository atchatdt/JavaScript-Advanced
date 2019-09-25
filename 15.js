// class

class Mouse {
    constructor(name){
        this.name = name
    }
    run(){
        console.log(this.name);
    }
}

const mouse = new Mouse('Jerry');

mouse.run();