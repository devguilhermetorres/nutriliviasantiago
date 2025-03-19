const menuItems = document.querySelectorAll(".menu-item");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

function scrollToDiv(index) {
    const targets = document.getElementsByClassName("target");
    
    if(window.innerWidth > 1050) {
        if (targets[index]) {
            targets[index].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    else {
        if (targets[index]) {
            targets[index].scrollIntoView({ behavior: "smooth"});

            if(window.scrollY < 50) {
            
            let menu = document.querySelector(".nav-links");
            
            menu.classList.toggle("active");

            if (menuIcon.src.includes("menu.png")) {
                menuIcon.src = "imgs/x.png"; 
            } else {
                menuIcon.src = "imgs/menu.png";
            }
            }

        }
    } 
}

function openLink() {
    let menu = document.querySelector(".nav-links");
    let toggle = document.querySelector(".menu-toggle");
    menu.classList.toggle("active");

    if (menuIcon.src.includes("menu.png")) {
        menuIcon.src = "imgs/x.png"; 
    } else {
        menuIcon.src = "imgs/menu.png";
    }

};

function openWhatsApp() {
    const phoneNumber = "5581992290840"; 
    const message = "Olá! Acessei seu site e tenho interesse em agendar uma consulta."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function() {

    const fixedButtonWhatsApp = document.getElementById("fixedButtonWhatsApp");
    if (window.scrollY > 300) {
        fixedButtonWhatsApp.style.opacity = "1";
        fixedButtonWhatsApp.style.visibility = "visible";
        fixedButtonWhatsApp.style.transform = "translate(0%, 0%)";
    } else {
        fixedButtonWhatsApp.style.opacity = "0";
        fixedButtonWhatsApp.style.visibility = "hidden";
        fixedButtonWhatsApp.style.transform = "translate(0%, 200%)"
    } 

    const fixedButtonTop = document.getElementById("fixedButtonTop");
    if (window.scrollY > 300) {
        fixedButtonTop.style.opacity = "1";
        fixedButtonTop.style.visibility = "visible";
        fixedButtonTop.style.transform = "translate(0%, 0%)";
    } else {
        fixedButtonTop.style.opacity = "0";
        fixedButtonTop.style.visibility = "hidden";
        fixedButtonTop.style.transform = "translate(0%, 200%)"
    } 
};

function toggleMenu() {
    let menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

    if (menuIcon.src.includes("menu.png")) {
        menuIcon.src = "imgs/x.png"; 
    } else {
        menuIcon.src = "imgs/menu.png";
    }
}

