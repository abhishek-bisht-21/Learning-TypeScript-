/* 
 We make Generic Functions When we want to use a function time and again. Benefit of generic functions is that
 We before hand get to know that which kind of output we are going to receive and Which kind of Input Parameter
 We will have.


*/

// Without Generic Function
function users(data: Object): Object{
	return data
}

console.log(users({name:"Abhishek Bisht", age:"22"}))


// With Generic Functions
function user<T>(data:T):T{
	return data
}
// Object Type
console.log(user({name:"abhishek",age:'22'}));
// String type
console.log(user("abhishek"))
// Number Type
console.log(user(21))
// Boolean
console.log(users(true))

