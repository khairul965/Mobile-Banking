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

//function to toggle-1

function handletoggle(id){
     const forms =document.getElementsByClassName("form")
    
    for(const form of forms){
       form.style.display ="none"
    }

    document.getElementById(id).style.display = "block"
}

//function to toggle-2

function buttonToggle(id){
    const formsBtn =document.getElementsByClassName("form-btn")

   for(const btn of formsBtn){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    btn.classList.add("border-gray-300")
   }

   document.getElementById(id ).classList.remove("border-gray-300")
   document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


//Toggling feature

document.getElementById("add-button").addEventListener("click",function(){
   handletoggle("add-money-parent")
   buttonToggle("add-button")
})

document.getElementById("cash-button").addEventListener("click",function(){
    handletoggle("cash-out-parent")
    buttonToggle("cash-button")
    
})

document.getElementById("transfer-button").addEventListener("click",function(){
    handletoggle("transfer-parent")
    buttonToggle("transfer-button")
})

document.getElementById("bonus-button").addEventListener("click",function(){
    handletoggle("bonus-parent")
    buttonToggle("bonus-button")
})

document.getElementById("bill-button").addEventListener("click",function(){
    handletoggle("bill-parent")
    buttonToggle("bill-button")
   
})

document.getElementById("cash-button").addEventListener("click",function(){
    
})