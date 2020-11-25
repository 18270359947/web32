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