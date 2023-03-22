const list = document.querySelectorAll(".ul-tec .icone-li")
const icon = document.querySelector(".icone-li")
const icone = document.querySelector(".ul-tec")
const bg = document.querySelector(".tecnologia-3d")
const buttonOn = document.getElementById("button-on")
const buttonTw = document.getElementById("button-tw")
const vieOne = document.getElementById("view-one")
const view = document.getElementById("view")
const iconOne = document.getElementById("icon-rai")
const iconTwo = document.getElementById("icon-x")
const cashie = document.getElementById("Cashier")
const mainConteiner = document.getElementById("main-conteiner")
const secondBox = document.getElementById("second-box")
const project = document.getElementById("project")
const projectTwo = document.getElementById("project-2")
const dev = document.getElementById("mc-dev")
const about = document.getElementById("about")
const falls = document.getElementById("falls")
const fallsTow= document.getElementById("falls-tow")
const fallscor = document.querySelector(".fallscor")
const fallstwi = document.querySelector(".fallscor-twi")
const fall = document.querySelector(".fall")
const towFall = document.querySelector(".tow-fall")
const twoFall= document.querySelector(".two-fall")
const ult_falls= document.querySelector(".ult-falls")
const menuIcone = document.querySelector(".menu-icone")
const buttonIcone = document.querySelector(".menus-cones")


list.forEach(e => {

    e.addEventListener("mouseenter", (event) => {
        const color = event.target.getAttribute("data-color")
        bg.style.background = color
    })

    e.addEventListener("mouseleave", () => {

        bg.style.background = "#000"

    })



})


const buttonOne = () => {

    buttonOn.style.background = "#BFD630"
    buttonTw.style.background = "#333333"
    vieOne.style.display = "block"
    view.style.display = "none"


}

const buttonTWO = () => {

    buttonTw.style.background = "#BFD630"
    buttonOn.style.background = "#333333"
    vieOne.style.display = "none"
    view.style.display = "block"

}



function menu(){
    const icones = document.querySelector(".option-li")
    const buttonIcone = document.querySelector(".menus-cones")

    if(icones.classList.contains("open")){
        icones.classList.remove("open")
        menuIcone.style.display = "block"
        buttonIcone.style.display = "none"
        
        
    }else{
        icones.classList.add("open")
        menuIcone.style.display="none"
        buttonIcone.style.display = "block"
    }



}

function menus(){
    const icones = document.querySelector(".option-li")
   

    if(icones.classList.contains("open")){
        icones.classList.remove("open")
        menuIcone.style.display = "block"
        buttonIcone.style.display = "none"
        
        
    }else{
        icones.classList.add("open")
        menuIcone.style.display="none"
        buttonIcone.style.display = "block"
    }



}



menuIcone.addEventListener("click", menu)
buttonIcone.addEventListener("click", menus)


buttonOn.addEventListener("click", buttonOne)
buttonTw.addEventListener("click", buttonTWO)




