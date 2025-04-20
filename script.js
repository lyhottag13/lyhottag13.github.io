const shop = document.getElementById("shop");
const shopImage = document.getElementById("shopImage");

const IMAGES = ["Open", "Closed"];
const preloadedImages = {};
IMAGES.forEach(fileName => {
    const image = new Image();
    image.src = `resources/images/${fileName}.webp`;
    preloadedImages[fileName] = image;
});
shop.addEventListener("mouseenter", () => {
    shopImage.src = preloadedImages["Open"].src;
});
shop.addEventListener("mouseleave", () => {
    shopImage.src = preloadedImages["Closed"].src;
})