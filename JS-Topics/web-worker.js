
let button1= document.getElementById('button1');
button1.addEventListener('click', ()=>{
    document.getElementById('display1').innerHTML+= 'Hi';
})

let button2= document.getElementById('button2');
button2.addEventListener('click', ()=>{
    const worker = new Worker('JS-Topics/worker.js');
    worker.postMessage('start worker');
    worker.onmessage= function(event){
        document.getElementById('display2').innerHTML=event.data;
    }
})




