const loader = document.querySelector(".loader")
const openMenu = document.querySelector("#btn-menu")
const linksContainer = document.querySelector(".nav-links")

window.onload = ()=> {
    loader.classList.remove("loader-active")
};

openMenu.addEventListener("click", ()=>{
    linksContainer.classList.toggle("open-menu")
    if (openMenu.children[0].src.split("/")[4] == "menu.svg"){
        openMenu.children[0].src = "/icons/x.svg"
        return
    }

    openMenu.children[0].src = "/icons/menu.svg"
})