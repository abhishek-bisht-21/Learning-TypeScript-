// Interface Creation
interface userTyped{
	name:string,
	age:number,
	city:string
}



// Object Creation with Interface
let user:userTyped = {
	name:'bruce',
	age:20,
	city:'NY'
}

// We haven't explicityly made name as string but it considers it as 
// a string only.
// user.name = 200; -> Error.

//  We can update the value of the field but it should be of same type
user.name = "peter"

// Cannot add a new field in the Object.
// user.email = bruce@test.com

console.log(user);
