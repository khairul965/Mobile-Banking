const validPin = 1234

//Add Money

document.getElementById("add-money-btn").addEventListener("click",function(e){
e.preventDefault()

const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("AC-num").value
const newAmount = parseInt(document.getElementById("money-add").value)
const pinNum = parseInt(document.getElementById("add-pin").value)
const availableAmount = parseInt(document.getElementById("available-money").innerText)

if(accountNumber.length <11){
    alert("Please provide a valid Account number")
    return;
}

if(pinNum !== validPin){
    alert("Pin Number incorrect")
    return;
}

const totalAmount = availableAmount + newAmount
document.getElementById("available-money").innerText = totalAmount
})

//Cash Out

document.getElementById("withdraw-btn").addEventListener("click",function(e){
e.preventDefault()

const agentNumber = document.getElementById("agent-num").value
const Amount = parseInt(document.getElementById("withdraw-amount").value)
const pinNum = parseInt(document.getElementById("addpin").value)
const availableAmount = parseInt(document.getElementById("available-money").innerText)

if(agentNumber.length <11){
    alert("Please provide a valid Account number")
    return;
}

if(pinNum !== validPin){
    alert("Pin Number incorrect")
    return;
}

const totalAmount = availableAmount - Amount
document.getElementById("available-money").innerText = totalAmount
})

//function to toggle

function handletoggle(id){
     const forms =document.getElementsByClassName("form")
    
    for(const form of forms){
       form.style.display ="none"
    }

    document.getElementById(id).style.display = "block"
}


//Toggling feature

document.getElementById("add-button").addEventListener("click",function(){
   handletoggle("add-money-parent")
})

document.getElementById("cash-button").addEventListener("click",function(){
    handletoggle("cash-out-parent")
})

document.getElementById("transfer-button").addEventListener("click",function(){
    handletoggle("transfer-parent")

})

document.getElementById("bonus-button").addEventListener("click",function(){
    handletoggle("bonus-parent")
})

document.getElementById("bill-button").addEventListener("click",function(){
    handletoggle("bill-parent")
})

document.getElementById("cash-button").addEventListener("click",function(){
    
})