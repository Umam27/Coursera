var arithmetic= require('./arithmetic');

function call_arithmetic(a,b){
    console.log("We start here to solve with two number a = " + a + " , b = " + b);
    console.log("The sum of the given numbers is "+ arithmetic.sum(a,b));
    console.log("The difference of the given numbers is "+ arithmetic.difference(a,b));
    console.log("The product of the given numbers is "+ arithmetic.multiply(a,b));
    if(b<=0){
        console.log("Division by zero and negative numbers are not allowed.");
    }
    else{
        console.log("The qoutient of the given numbers is "+ arithmetic.divide(a,b));
    }
    console.log("\n");
}


call_arithmetic(4,5);
call_arithmetic(3,0);
call_arithmetic(2,5);