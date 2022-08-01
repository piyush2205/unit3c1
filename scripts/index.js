//store the products array in localstorage as "products"


function product(i,p,t,d){
    this.img=i
    this.price=p
    this.type=t
    this.desc=d

} 


function add_product(e){
    event.preventDefault()
    let img=document.getElementById("image").value
    let price=document.getElementById("price").value
    let type=document.getElementById("type").value
    let desc=document.getElementById("desc").value
       
    let p1= new product(img,price,type,desc) 
    let data=JSON.parse(localStorage.getItem("product"))||[];
    data.push(p1);
    localStorage.setItem("product",JSON.stringify(data));
    console.log(p1)
    
}