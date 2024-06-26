//-----navbar-----//
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle ("window-scroll", window.scrollY > 0)
})


//------freq ques------//

const freq = document.querySelectorAll(".feq")

freq.forEach(feq=>{
    feq.addEventListener("click", () =>{
        feq.classList.toggle("open")

    })
})



const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)
