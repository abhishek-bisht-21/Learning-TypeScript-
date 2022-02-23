
function hello(){
	console.log("hello")
}

hello()

// function accepting parameter.
//  Type inference Works here.
function area(a:number, b:number){
	return a * b;
}

let areaRect = area(12,10) 
console.log("area of 10X12 rect is ", areaRect)

// Enforcing a particular Datatype.
function getTimeStamp():string{
	return new Date().toString()
}

console.log("time  = ", getTimeStamp())