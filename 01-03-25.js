function findLarger(num1, num2,callback){
    console.log(callback(num1,num2)+8)
}
findLarger(2, 2,(num1,num2)=>{
     if(num1>num2) {
        return num1
    }
    else{
        return num2
    }
})
function calculate(num1, num2, callback){
    console.log(callback(num1,num2)*3)

}
calculate(10,3,(num1,num2)=>{
    if(num1>num2){
        return num1+num2
    }
    else if(num2>num1){
        return num1-num2

    }
})
function checkEvenOdd(num, callback){
    if (callback(num)=='even'){
        return "even number"
    }
    else{
        return "odd number"
    }


}
console.log(checkEvenOdd(6, (num)=>{
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }

}))
function checkSign(num, callback){
   let a= callback(num)
    console.log (`${a} value`)

}
checkSign(6, (num)=>{
    if(num>0){
        return "positive"
    }
    else if(num<0){
        return "Negative"
    }
    else if(num===0){
        return "zero"
    }
})

function multiplyConditionally(num1, num2, callback){
    console.log(callback(num1,num2)*4)

}
multiplyConditionally(2,2, (num1,num2)=>{
    if(num1>num2){
        return num1*num2
    }
    else if(num2>num1){
       return num1+num2

    }
    else if(num1==num2)
        return num1

})