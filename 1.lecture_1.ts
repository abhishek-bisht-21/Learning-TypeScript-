let x = 1;
// x = "asd"; -> Error we cannot assign "asd" to type 'number'.
x = 23;


// Now "y" can only hold string values. At the time of declaration only
// We have made it String only variable. Statically Typed.

// Pascal Notation. We put the datatype After the variable name.
let y:string; // Typescript Notation for defining the datatype of a variable.

// kotlin,swift and dart support Pascal syntax.

let boo:boolean;
let str:string;
let num:number;

boo = true;
// boo = 1; Error 
str = "asd";
num = 2134;
num = 12.34;