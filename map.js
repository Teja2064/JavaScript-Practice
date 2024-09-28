let map = new Map()

map.set(1,"teja")
map.set("2","js")
map.set("3","india")
map.set(1,"java")

console.log(map.get("3"))

for(let[k,v]of map){
    console.log(k,":",v)
}

map.forEach((v,k)=>{
    console.log(v,k)
}
)