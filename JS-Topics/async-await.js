// Functions marked with async always return a promise, even if you return a non-promise value.

async function apiCall(){
    try{
   let res= await fetch('http://example.com');
   let res1= await res.json();
   return res1;
}
catch(err){
    console.log(err)
}
}