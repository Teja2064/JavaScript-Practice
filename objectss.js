// let input='name'
// let objects ={
//     name:"laptop",
//     'which core':'i5',
//     techs:'window'
// }

// console.log(objects[input])

let objects1 ={
    name:"laptop",
    'which core':'i5',
    techs:'window',
    bottle:{
        material:'plastic',
        cap:'available'
    }
}
delete objects1.techs
console.log(objects1?.techs)