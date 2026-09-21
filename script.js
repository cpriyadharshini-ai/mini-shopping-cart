let cart=[];
const product=document.getElementById("product");
const price=document.getElementById("price");
const quantity=document.getElementById("quantity");
function addProduct(){
    cart.push({name:product.value, price:Number(price.value), quantity:Number(quantity.value)});
    alert("Successfully added");
    product.value="";
    price.value="";
    quantity.value="";
    display();
}
function display(){
    const show=document.getElementById("show");
    let products=cart.map(pro=> 
        `${pro.name} , ${pro.price}, ${pro.quantity}`
    );
    show.innerHTML=products.join("<br>");
}
function addPrice(){
    let add=cart.reduce((sum, product)=>{
        let bill=product.price*product.quantity;
        return sum+bill;
    },0);
    displayPrice(add);
}
function displayPrice(total){
    const showPrice=document.getElementById("showPrice");
    showPrice.innerHTML=`Total bill: ₹${total}`;
}
function searchProduct(){
    const search=document.getElementById("search").value;
    let searchProduct=cart.find(product=>search==product.name);
    displayProduct(searchProduct);
}
function displayProduct(product){
    const searchProduct=document.getElementById("searchProduct");
    searchProduct.innerHTML=`
        Name : ${product.name}<br>
        Price : ₹${product.price}<br>
        Quantity : ${product.quantity}
    `;
}