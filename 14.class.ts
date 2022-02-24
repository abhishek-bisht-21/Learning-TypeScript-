class App{
	// Name will be of string type
	name:string;
	// Parametere will be of type string
	constructor(name:string){
		this.name = name
		console.log("constructor called inside App class")
		
	}
	// Defining what datatype the function will return
	getName() : string{
		
		console.log(this.name)
		return this.name
		
	}
}

let a1 = new App("Abhishek Bisht")
a1.getName()