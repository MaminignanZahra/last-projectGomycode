const shop = document.getElementById("shop");
const btn = document.getElementById("card");
const img = document.querySelector(".img-shop");

shop.addEventListener("mouseover", () => {
    btn.classList.add("appear")
});

shop.addEventListener("mouseout", ()=>{
    btn.classList.remove("appear")
})
