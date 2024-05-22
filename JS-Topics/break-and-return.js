// break 

function test(){
    for(let i=0; i<10; i++){
        if(i===5){
            return;  // here try writing break then try 
        }
        console.log(i);
    }
    for(let j=0; j<5; j++){
        console.log("break and return", j);
    }
}

test();