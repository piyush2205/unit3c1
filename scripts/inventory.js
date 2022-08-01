let Data=JSON.parse(localStorage.getItem("product"))||[];
console.log(Data)


function append(Data){
   
    Data.forEach(function(element,index) {
        let cont=document.getElementById("all_products")
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=element.img
        let type=document.createElement("h1")
        type.innerText=element.type 
        let price=document.createElement("p")
        price.innerText=element.price 
        let desc=document.createElement("p")
        desc.innerText=element.desc
        let button=document.createElement("button")
        button.innerText="remove product"
        button.addEventListener("click",function() 
        {remove (Data,index)

        })
 
      div.append(img,type,desc,price,button)
      cont.append(div)
   })
}

append(Data)

function remove(Data,index){
    Data.splice(index,1)
    localStorage.setItem("product",JSON.stringify(Data));
    // console.log(Data)
    window.location.reload()
}