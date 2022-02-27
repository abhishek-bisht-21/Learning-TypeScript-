/*

	ENUMS -> Is a set of values. When we use it with a variable or a function, Then the value of that variable must be
		 from that SET of Values only set in the ENUM.

*/

enum Days{
	mon,tue,wed,thu,fri,sat,sun
}

// We are defining that whichDay can take values from Days Only.
let whichDay:Days;

// whichDay = "Test" -> Error
whichDay = Days.sat


// Enum in function
function tellDay(day:Days){
	return day
}
console.log(tellDay(Days.mon))