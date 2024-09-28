// let i=1

// while(i<=5){
//     console.log("hi",i)
//     i++
// }

// do{
//     console.log("hi",i)
//     i++
// }while(i<=5)
// for(;i<=5;i++) 
//     {
//     console.log("hi",i)
//     for(let j=1;j<=5;j++)
//         console.log("hlo h",j)
    
// }

// for(let i=1;i<=100;i++){
//     if(i%3===0)
//         {
//             console.log(i)
//         }
// }

let num = 354678
let num2=0
while(num>0){
    let num1 =num%10
    num2=num2*10+num1
    num = parseInt(num/10)
    
}
console.log(num2)
