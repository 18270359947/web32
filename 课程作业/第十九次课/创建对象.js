var pitaya1 = {}

//var pitaya = Object.creat()

var pitaya2 = {
    name:"火龙果",
    price:15,
    origin:"湖南省",
    weight:1,
    nut:{
        name:"火龙果 nut"
    },
    printName:function(){
        console.log(this.name)
    }
}

pritaya2.printName();
pritaya2["printName"]()

function Haw(name,price,origin){
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.printName = function (){
        console.log("this is Haw")
    }
}

var h1 = Haw("山楂",2,"湖南省");

Haw.prototype.printPrice = function(){
    console.log("prototyle print Price")
}

//Haw()

var h1 = Haw("山楂",2,"湖南省");
h1.printName()
h1.printPrice()

Haw.printName()
Haw.printPrice()