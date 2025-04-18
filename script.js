const shop = document.getElementById("shop");
const shopImage = document.getElementById("shopImage");
shop.addEventListener("mouseenter", () => {
    shopImage.src = "resources/images/Open.png";
});
shop.addEventListener("mouseleave", () => {
    shopImage.src = "resources/images/Closed.png";
})