function num(b){
    if (b==0){
        return 1
    }
    else

    return b*num(b-1)

}
let sum=num(5)
let result=sum
console.log(result)