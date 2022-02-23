let num: number | null | undefined

num = 1;
console.log(typeof num);

// In Js ans will be Object.
// But in TS it has a seperate datatype null for it
num = null;
console.log(typeof num); 


num = undefined;
console.log(typeof num);


