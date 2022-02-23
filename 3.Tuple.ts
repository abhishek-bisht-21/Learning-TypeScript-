let [a,b,q] = [1,2,"asd"]
console.log(a)
console.log(b)
let [c,d] = [a,b]
console.log(c);

// Tuple is basically a heterogeneous array
// Each index specified for a particulare data type.
let tup:[number,string,boolean,number];
tup = [123,"asdasd",true,21];
// Error-> tup = ["asd",1,true,21]