function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multipy(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}


// Calculating the result -> here operator will take i/p of a function inside it.
function calculator(a,b,operator){
    return operator(a,b);// here output will be used as taking i/p of a function and return the result to calculator function.
}

// Generating random values
var  a = Math.floor(Math.random()*10)+1;
var  b = Math.floor(Math.random()*10)+1;

// Printing the result and inputs.
console.log(a,b);
console.log(calculator(a,b,add));
console.log(calculator(a,b,substract));
console.log(calculator(a,b,multipy));
console.log(calculator(a,b,divide));