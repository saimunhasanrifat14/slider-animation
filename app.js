let nextButton = document.getElementById("next")
let prevButton = document.getElementById("prev")
let backButton = document.getElementById("back")
let seeMoreButton = document.querySelectorAll(".seeMore")
let carousel = document.querySelector(".carousel")
let listHTML = document.querySelector(".list")

nextButton.onclick = function(){
    showSlider("next")
}
prevButton.onclick = function(){
    showSlider("prev")
}
const showSlider = (type)=>{
    let items = document.querySelectorAll(".item")
    if(type === "next"){
        listHTML.appendChild(items[0]); 
        carousel.classList.add("next")
    }
}
