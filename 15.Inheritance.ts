
class Parent{
	name:string;
	setName(name):void{
		this.name = this.name
	}
}

// Extends Keyword is used.
// Access Specifier not needed
class Child extends Parent{
	
	// Can access name variable of parent class
	getName():string{
		return this.name
	}
}


let c1 = new Child();
c1.setName("Abhishek Bisht")
console.log(c1.getName());
