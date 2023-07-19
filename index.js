let receivesAFunction=(hello)=>{
    hello()
}

let returnsANamedFunction=()=>{
    return function abC(){
        console.log("hey there!");
    }
}

let returnsAnAnonymousFunction=()=>{
    return function(){
        console.log("how are you?");
    }
}