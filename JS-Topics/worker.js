onmessage= function(e){
    let res= 0;
    for(let i=0; i<10000000000; i++){
        res+=i;
    }
    console.log(e.data);
    postMessage(res);
}