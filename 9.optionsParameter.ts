function area(a:number,b?:number){
	if(typeof b === 'undefined'){
		return a*a
	}else{
		return a * b
	}
}

console.log("area rect 10x12 ", area(10,12))
console.log("Area of square side 4 =",area(4))
