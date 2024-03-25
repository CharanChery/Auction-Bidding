let menu = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
let searchbar = document.querySelector(".searchbar");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    searchbar.classList.toggle('open');
}