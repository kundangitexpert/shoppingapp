let place_order=document.querySelector("#place_order");
let name=document.querySelector("#name");
let city=document.querySelector("#city");
let num=document.querySelector("#num");
let email=document.querySelector("#email");
let saddress=document.querySelector("#saddress");




function placeorder() {
    if(name.value=="" || city.value==""|| num.value==""|| email.value=="" || saddress.value=="" )
        {
            alert("PLEASE FILL ALL INFORMATION FOR SHIPPING")
        }
        else{
            alert("ORDER SUCCESSFULLY PLACED")
            name.value="";
            city.value="";
            num.value="";
            email.value="";
            saddress.value=""
            window.location.href="index.html";
        }
}
place_order.addEventListener("click",placeorder)
