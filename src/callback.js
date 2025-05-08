function callback(){
    console.log("Now adddings Sucessful complete");
}

const add=function(a,b,callback){    
    var result= a+b;
    console.log(`Result Of Addations:${result}`)
    callback();
}
add(1221,34,callback)