document.getElementById("convert").addEventListener("click",convertcurrency);

async function convertcurrency(){
    try{
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        let data = await response.json();
        document.getElementByyId("result").innerText = data.rates.INR;
    }
    catch(error){
        console.log(error);
    }
    }