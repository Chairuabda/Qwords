let menu = document.querySelector("#menu");
let listMenu = document.querySelector("#list-menu");
let boxAnimation = document.querySelector("#boxAnimation");

let cloudHosting = document.querySelector("#cloud-hosting");
let dropDownMenu = document.querySelector(".dropdown-menu");

let server = document.querySelector("#server");
let dropDownServer = document.querySelector(".dropdown-server");

let internet = document.querySelector("#internet");
let dropDownInternet = document.querySelector(".dropdown-internet");

let domain = document.querySelector("#domain");
let dropDownDomain = document.querySelector(".dropdown-domain");

let email = document.querySelector("#email");
let dropDownEmail = document.querySelector(".dropdown-email");

let services = document.querySelector("#services");
let dropDownServices = document.querySelector(".dropdown-services");

menu.onclick = () => {
    boxAnimation.classList.toggle("h-0");
    boxAnimation.classList.toggle("h-100");
    listMenu.classList.toggle("opacity-0");
    listMenu.classList.toggle("opacity-100");
};

cloudHosting.onclick = () => {
    dropDownMenu.classList.toggle("slide");
    setTimeout(function () {
        dropDownMenu.classList.toggle("opacity-0");
    }, 250);
};
server.onclick = () => {
    dropDownServer.classList.toggle("slide");
    setTimeout(function () {
        dropDownServer.classList.toggle("opacity-0");
    }, 250);
};
internet.onclick = () => {
    dropDownInternet.classList.toggle("slide");
    setTimeout(function () {
        dropDownInternet.classList.toggle("opacity-0");
    }, 250);
};
domain.onclick = () => {
    dropDownDomain.classList.toggle("slide");
    setTimeout(function () {
        dropDownDomain.classList.toggle("opacity-0");
    }, 250);
};
email.onclick = () => {
    dropDownEmail.classList.toggle("slide");
    setTimeout(function () {
        dropDownEmail.classList.toggle("opacity-0");
    }, 250);
};
services.onclick = () => {
    dropDownServices.classList.toggle("slide");
    setTimeout(function () {
        dropDownServices.classList.toggle("opacity-0");
    }, 250);
};
