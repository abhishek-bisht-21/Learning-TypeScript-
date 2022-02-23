function area(a:number,b?:number){
	if(typeof b === 'undefined'){
		return a*a
	}else{
		return a * b
	}
}

console.log("area rect 10x12 ", area(10,12))
console.log("Area of square side 4 =",area(4))

/*

Another way to handle the above problem.\
Giving the default value to the 2nd argument.
// Now also we can call the function without the 2nd argument
function area(a:number,b:number=a){
	
	return a * b
}

*/
