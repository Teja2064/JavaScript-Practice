 function Tree(country,heat){
    this.country="country"
    this.heat='heat'

    this.mat=function(){
        console.log("rubber")
    }
}
let tree1= new Tree("usa","95")
let tree2= new Tree("india","945")
let tree3= new Tree("africa","915")
tree3.country="france"
console.log(tree2)
console.log(tree3)
tree3.mat()