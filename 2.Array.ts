// JavaScript arrays
// let arr = [1,"Asd", true] -> Heterogeneous

// Typescript Arrays. Homogeneous Datatype
let arr:number[] = [1,2,3,4,5]
arr[0] = 231
// arr[1] = "asd" -> Error

arr.forEach(x =>{
	console.log(x);	
})

// Another way to define array
let a: Array<number> = [1,2,3,4,5]

let arr2: Array<string> = ["asd", "assdf"]