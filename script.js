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
function display() {
    const show = document.getElementById("show");

    show.innerHTML = "";

    cart.map((pro, index) => {

        // 1. Create one container for this product
        const item = document.createElement("div");

        // 2. Put product information inside it
        item.innerHTML = `
            <span>Name: ${pro.name}</span>
            <span>Price: ₹${pro.price}</span>
            <span>Quantity: ${pro.quantity}</span>
        `;

        // 3. Create Remove button for THIS product
        const button = document.createElement("button");
        button.textContent = "❌";
        button.id="remove-btn";
        // 4. Button click
        button.addEventListener("click", () => {

            cart = cart.filter((product, i) => i !== index);

            display();

        });

        // 5. Put button inside this product's container
        item.appendChild(button);

        // 6. Put complete product inside show
        show.appendChild(item);
    });
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