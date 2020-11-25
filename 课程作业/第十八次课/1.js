let banana = function banana(){
    console.log("this is banana-1")
    }
banana()




let banana = function banana(){
    console.log("this is banana-1")
    return ()=> function(){console.log("this is Anonymous function")}()
    }
banana()()



let grape = function redGrape(){
    return {
    name:"my name is red grape",
    printMyName:()=>{
       return ()=>{
          return Object.create({
              name:"my name is grape nut",
              printMyGrapeNut:function(){
                  console.log("this is MyGrapNut")
              }
          })
       }
    }
  }
}



var redPlum = ()=>{
    return 100
}
var bluePlum =(blue)=>{
    return 200 * blue()
}
var plum = (plum2,plum1)=>{
    let result = plum1(plum2)
    console.log(result);
}
plum(redPlum,bluePlum)
 



let red = function readApple(){
    return ()=>{
        return function(){
            return ()=>{
                return function(){
                    console.log("this is red apple")
                    return "this is blue apple"
                }
            }
        }
    }
}
red()()()()()





(function(x){
    x()
    console.log("this is yellow orange")
    console.log(function blueOrange(){
        console.log("this is blue orange")
    }())

})(function(){
    console.log("this is orange")
    return "this is red orange"
})






function bigNut(func){
    let smallNut = function (s){
        s()
        console.log("this is small nut")
        return 200
    }
    let middleNut = function(m){
        m()
        console.log("this is middle nut")
        return 300
    }
    return func(smallNut,middleNut)
}
    function redNut(x,y){
        function blueNut(){
            console.log("this is blueNut")
        }
        function yellowNut(){
            console.log("this is yellowNut")
    }
    return ()=>{
        console.log(x(blueNut)+y(yellowNut))
    }
}
bigNut(redNut)()