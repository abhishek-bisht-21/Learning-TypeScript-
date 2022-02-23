// Defined the parameter type and return type. 
let area:(a:number,b?:number) => number

// Now we no need to define parameter type and return in real body of the function
area = function(a,b){
	return a * b;
}


console.log("area rect 10x12 ", area(10,12))
console.log("Area of square side 4 =",area(4))