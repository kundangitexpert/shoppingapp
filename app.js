let renderdata = document.querySelector(".render-data");
let renderCartData = document.querySelector(".renderCartData");
let dynamic_count = document.querySelector(".dynamic-count");
let total_price = document.querySelector("#total_price");
let tcontainer = document.querySelector(".tcontainer");
let line = document.querySelector(".line");
let cItems = document.querySelector(".cItems");
let emptycart = document.querySelector(".empty-cart");
let emptyC=false;    

// GET DATA FROM API  
let arrr = [];
let calculatetotal=[];
async function getdata() {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    data.map((ele) => {
        let productMainDiv = document.createElement("div")
        let createImgEle = document.createElement("img");
        let createTitle = document.createElement("p");
        let createPriceEle = document.createElement("p");
        let btnEle = document.createElement("button")
        let btnText = document.createTextNode("Add to Cart");
        let createPriceText = document.createTextNode(`Price :$${ele.price}`)
        let createTextTitle = document.createTextNode(`${ele.title.slice(0, 35)} .....`);
        createImgEle.setAttribute("src", ele.image);
        createTitle.setAttribute("class", "ProductTitle")
        createImgEle.setAttribute("class", "myimages");
        productMainDiv.setAttribute("class", "box-main")
        btnEle.setAttribute("class", "btn-element");
        createTitle.appendChild(createTextTitle)
        createPriceEle.appendChild(createPriceText)
        btnEle.appendChild(btnText)
        productMainDiv.appendChild(createImgEle)
        productMainDiv.appendChild(createTitle)
        productMainDiv.appendChild(createPriceEle)
        productMainDiv.appendChild(btnEle)
        renderdata.appendChild(productMainDiv)


        function addtoCart(img, price) {

            arrr.push({ ii : img , pp : price });
            alert("PRODUCT ADDED TO CART");
            tcontainer.style.display="flex";
            line.style.display="block";
            dynamic_count.innerHTML++;
            emptyC=true
            if(emptyC){
                cItems.style.display="flex";
                emptycart.style.display="none"
            }
            let cartMaindiv=document.createElement("div");
            let cartImgEle = document.createElement("img");
            let cartTrashBtn = document.createElement("i");
            cartTrashBtn.setAttribute("class", "fa-solid fa-trash")
            function deleteitem() {
                cartMaindiv.remove()
                dynamic_count.innerHTML--;
            }
            cartTrashBtn.addEventListener("click",deleteitem);
            cartImgEle.setAttribute("src", img);
            cartImgEle.setAttribute("class", "cartImgElement")
            cartMaindiv.setAttribute("class","cart-styling")
            let cartPriceEle = document.createElement("p");
            let cartPriceText = document.createTextNode(`$${price}`);
            cartPriceEle.appendChild(cartPriceText)
            
            cartMaindiv.appendChild(cartImgEle)
            cartMaindiv.appendChild(cartPriceEle)
            cartMaindiv.appendChild(cartTrashBtn)
            renderCartData.appendChild(cartMaindiv);
            calculatetotal.push(price);
            function calc(x,y) {
                return x+y;
            }
            let mytotalprice=calculatetotal.reduce(calc)
            total_price.innerHTML=`Total Price :  $${mytotalprice}`
        }
        btnEle.addEventListener("click", () => addtoCart(ele.image, ele.price))
    })
}
getdata()