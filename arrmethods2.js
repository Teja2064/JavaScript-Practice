// let nums=[567,234,234,2345,345,345,45678]
// nums.forEach((n,i,nums)=>{
//     console.log(n,i,nums)

// })

// let nums=[5,4,4,4,558]
// let final=nums.filter(n=>n%2===0)
//     .map(n=>n*2)
//     .reduce((a,b)=>a+b)
// console.log(final)
let nums1=[5,4,4,4,[4,5,[7,8],6],7,558]
let flatty = nums1.flat(1)
console.log(flatty)