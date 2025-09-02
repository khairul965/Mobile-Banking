const validPin = 1234

const bonus = 200

const transactionData =[]

//Add Money

document.getElementById("add-money-btn").addEventListener("click",function(e){
e.preventDefault()

const bank = document.getElementById("bank").value
const accountNumber = document.getElementById("AC-num").value
const newAmount = parseInt(document.getElementById("money-add").value)
const pinNum = parseInt(document.getElementById("add-pin1").value)
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

const data ={
    name:"Add Money", 
    date: now.toLocaleTimeString()

}
transactionData.push(data)

})

//Cash Out

document.getElementById("withdraw-btn").addEventListener("click",function(e){
e.preventDefault()

const agentNumber = document.getElementById("agent-num").value
const Amount = parseInt(document.getElementById("withdraw-amount").value)
const pinNum = parseInt(document.getElementById("add-pin2").value)
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

const data ={
    name:"Cash Out",
    date: now.toLocaleTimeString()

}
transactionData.push(data)
})

//Transfer Money

document.getElementById("send-btn").addEventListener("click",function(e){
e.preventDefault()

const agentNumber = document.getElementById("user-ac-num").value
const Amount = parseInt(document.getElementById("transfer-amount").value)
const pinNum = parseInt(document.getElementById("add-pin3").value)
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

const data ={
    name:"Transfer Money",
    date:now.toLocaleTimeString()

}
transactionData.push(data)
})

//Get Bonus



//Bill pay

document.getElementById("bill-pay-btn").addEventListener("click",function(e){
e.preventDefault()

const bank = document.getElementById("bank2").value
const accountNumber = document.getElementById("AC-num2").value
const newAmount = parseInt(document.getElementById("pay-bill").value)
const pinNum = parseInt(document.getElementById("add-pin4").value)
const availableAmount = parseInt(document.getElementById("available-money").innerText)

if(accountNumber.length <11){
    alert("Please provide a valid Account number")
    return;
}

if(pinNum !== validPin){
    alert("Pin Number incorrect")
    return;
}

const totalAmount = availableAmount - newAmount
document.getElementById("available-money").innerText = totalAmount

const data ={
    name:"Bill Pay",
    date: now.toLocaleTimeString()

}
transactionData.push(data)

})

//Transaction 

document.getElementById("transaction-button").addEventListener("click",function(){
    const transactionContainer =document.getElementById("transaction-container")
   
    transactionContainer.innerText =""

    for(const data of transactionData){
        const div = document.createElement("div")

        div.innerHTML =`
          <div class="bg-white rounded-xl p-3 flex justify-between items-center">
       <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#f4f5f7]"> <img src="assets/wallet1.png" alt="" class="mx-auto"></div>
       <div class="ml-3">
        <h1 class="font-bold">${data.name}</h1>
        <p>${data.date}</p>
       </div>
       </div>
       <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
        `
     transactionContainer.appendChild(div)

    }
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
    btn.classList.remove("border-[#0874f2]","bg-cyan-500")
    btn.classList.add("border-gray-300")
   }

   document.getElementById(id ).classList.remove("border-gray-300")
   document.getElementById(id).classList.add("border-[#0874f2]","bg-cyan-500")
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

document.getElementById("transaction-button").addEventListener("click",function(){
    handletoggle("transaction-parent")
    buttonToggle("transaction-button")
})