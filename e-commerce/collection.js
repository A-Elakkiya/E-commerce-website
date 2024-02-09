/* Selection */
var all_products=document.querySelector(".products");
var products=all_products.querySelectorAll("div");
var searching_product=document.getElementById("search");

searching_product.addEventListener("keyup",function(){
    var searched_product=event.target.value.toUpperCase();
    for(count=0;count<products.length;count++){
        var product_name=products[count].querySelector("p").textContent;
        if(product_name.toUpperCase().indexOf(searched_product)<0){
            products[count].style.display="none";
        }
        else{
            products[count].style.display="block";
        }
    }

})