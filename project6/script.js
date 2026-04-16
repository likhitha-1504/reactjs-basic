document.getElementById("getBtn").addEventListener("click", getData);

async function getData(){
    try{
        let response = await fetch("http://api.exchange-api.com/v4/latest/USD");
        let data = await response.json();
        document.getElementById("status").innerText = data.rates.INR;
    }
    catch(error){
        console.log(error);
    }
}