function Chestnut (name,price,origin,weight){
    //this._proto_ = {}
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weight = weight,
    this.printName= function (){
        console.log("this is " + this.name)
    }
}

Chestnut.prototype.printName2=function(){
    console.log("this is chestnut prototypy")
}

let che1 = new Chestnut("大栗子",20,"江西",12)
che1.printPrice = function (){
    console.log("this is price" + this.price)
}
che1.printPrice()

console.log(che1._proto_)
console.log(Chestnut.prototype)

let obj1 = new Object({});
obj1.name="张三"
console.log(obj1._proto_._proto_)

function Object2(){
    this._proto2_ = Object2.prototype2
}
Object2.prototype2 = {
    _proto_: null
}

let obj1 = new Object2()
console.log(obj1._proto2_._proto2_)

function pear(name){
    return "this is " + `${name}`
}
//模板字符串
console.log(pear("大桃子"))

let str = 'return' + '我是`${name}`';
let func = new Function('name',str)
console.log(func("大桃子"))

function func2(name){
    return "我是" + name
}