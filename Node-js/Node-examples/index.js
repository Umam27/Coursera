var arith= require('./arithmetic');

function call_arithmetic(a,b){
    console.log("The value of length is " + a + " and breadth is "+ b);
    arith(a,b,(err,arithmetic)=>{
        if(err){
            console.log("ERROR: "+err.message);
        }
        else{
            console.log("The sum of the numbers is "+ arithmetic.sum());
            console.log("The difference of the numbers is "+ arithmetic.difference());
            console.log("The multiply of the numbers is "+ arithmetic.multiply());
            console.log("The qoutient of the numbers is "+ arithmetic.divide());
        }
    });
    console.log("THIS SHOWS MOVEMENT \n");
};

call_arithmetic(4,5);
call_arithmetic(3,0);
call_arithmetic(2,5);