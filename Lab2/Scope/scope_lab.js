// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar); //does not throw an error var has become global variabal
console.log(blockLet);

function show(){
var functionVar = "I'm a function-scoped var";
let functionLet = "I'm a function-scoped let";
const functionConst = "I'm a function-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError


//conclusion:
// var is a function scope var
//var inside a block scope,outisde any function will become a global variable 
//let and const is a block level scope


