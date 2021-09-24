const frm=document.querySelector('form');
const resultPara=document.querySelector('#result');
const input=document.querySelector('input');
frm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log("submittig");
    resultPara.innerText = "loading result...";
    const address=input.value;
    fetch('http://localhost:8000/gw?address='+address)
    .then((res)=> res.json())
    .then((data)=>{
        if (data.error){
            resultPara.innerText=data.error;
            return;
        }
        console.log(data)
        resultPara.innerText=data.temp;
    });
})





