document.getElementById("logbtn").
addEventListener("click" ,function (e){
    e.preventDefault()
    const mobileNumber = 0123456789
    const pinNumber =1234

    const mobileNumberValue =document.getElementById("mobileNm").value 
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue =document.getElementById("pinNm").value 
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }

    else{
        alert("Invalid")
    }

})