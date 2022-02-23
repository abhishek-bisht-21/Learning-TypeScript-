// When we have never datatype as the return type in a function
// We can't return anything from that function


function greet(name: string): never{
	console.log("hello "+ name)
	throw new Error()
}

let x = greet("Abhishek")