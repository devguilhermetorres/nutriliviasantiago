function scrollToDiv(index) {
    const targets = document.getElementsByClassName("target");
    if (targets[index]) {
        targets[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function openWhatsApp() {
    const phoneNumber = "5511999999999"; // Substitua pelo número correto (código do país + número)
    const message = "Olá! Gostaria de mais informações."; // Mensagem pré-definida
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
};