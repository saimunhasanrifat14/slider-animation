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
let unAcceptClick;
const showSlider = (type)=>{
    nextButton.style.pointerEvents = 'none'
    prevButton.style.pointerEvents = 'none'
    carousel.classList.remove("prev", "naxt")
    let items = document.querySelectorAll(".item")
    if(type === "next"){
        listHTML.appendChild(items[0]); 
        carousel.classList.add("next")
    }else{
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast])
        carousel.classList.add('prev')
    }
    
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto'
        prevButton.style.pointerEvents = 'auto'
    }, 1500);
}

seeMoreButton.forEach(button =>{
    button.onclick = function(){
        carousel.classList.add('showDetails')
    }
})