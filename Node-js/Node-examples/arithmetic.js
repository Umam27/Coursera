module.exports=(x,y,callback)=>{

    if(y<=0){
        setTimeout(()=>(
            callback(new Error("Operations are not allowed for zero or negative numbers"), null)
        ),2000);
    }
    else{
            setTimeout(()=>(
            callback(null, {
            sum:()=> (x+y),
            difference:()=>(x-y),
            multiply:()=>(x*y),
            divide:()=>(x/y),
             })
        ),2000);
        }
}