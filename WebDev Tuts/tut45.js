console.log("Function Tutorial");

// Functions
function greet(name, greetText = "Hello"){
    console.log(greetText + " " + name);
}

let name1 = "Shubham";
let greetText1 = "Welcome"

greet(name1, greetText1);

// when greetText not assigned, it takes the default value 
greet(name1);

function sum(a,b,c){
    return a+b+c;
}

let a = 1,  b = 2,  c = 3;
let sum1 = sum(a,b,c);
console.log(sum1);
