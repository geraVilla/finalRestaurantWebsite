

let overlayNavBar = document.querySelector(".overlayNavBar")

let circleContainer = document.querySelector(".circleContainer")

circleContainer.addEventListener("click", function(){
    overlayNavBar.style.height = "100%";
})


let xContainer = document.querySelector(".xContainer")
xContainer.addEventListener("click", function(){
    overlayNavBar.style.height = "0%";
})



window.addEventListener("resize", function(){
    if(this.window.innerWidth > 915){
        overlayNavBar.style.height = "0%"
        
    }
})


let seeMenuButton = document.querySelector(".seeMenuButton")

seeMenuButton.addEventListener("click", function(){
    window.location = "./menu.html"
})

let lastMenuOption = document.getElementById("lastMenuOption")
lastMenuOption.addEventListener("click", function(){
    window.location = "./menu.html"
})

let createGreenBackground = document.getElementById("createGreenBackground")
createGreenBackground.addEventListener("click", function(){
    window.location = "./menu.html"
})


let moreButton = document.querySelector(".moreButton")
moreButton.addEventListener("click", function(){
    window.location = "./menu.html"
})