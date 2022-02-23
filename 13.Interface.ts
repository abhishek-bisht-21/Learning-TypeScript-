/* 
 To predefine datatype of all the properties of a class
 or a object we make use of Interface. It is just a small
 Template that we use.

Syntax : 

	interface interface_name{
		property_name: data_type,
		property_name: data_type
	}

*/


interface userType{
	name: string,
	age: number,
	getName: () => string
}

let users : userType = {
	name: "abhishek bisht",
	age:21,
	getName:function(){
		return "abhishek"
	}
}

console.log(users)