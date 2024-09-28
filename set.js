let nums=new Set()
nums.add(1)
nums.add(6)
nums.add(1)
nums.add('teja')
nums.add('js')
nums.add("command")
for(let n of nums){
    console.log(n)
}

nums.forEach(value =>{
    console.log(value)
})

console.log(nums.has(19))