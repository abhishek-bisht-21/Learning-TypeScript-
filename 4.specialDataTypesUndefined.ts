// we can use a varible only after we have assigned some value to it.
// If we are specifying the datatype of a variable. Then it has
// to comply with it, it can't be anything else, even
// null or undefined for that matter.
let num : number = 1


console.log(typeof num)

// Telling TS that x can be either number or undefined.
let x: number | undefined = 1
num = undefined
num = 234

// Here TS forces you to allocate a value to p before using it.
let p:number = 1
console.log(p);