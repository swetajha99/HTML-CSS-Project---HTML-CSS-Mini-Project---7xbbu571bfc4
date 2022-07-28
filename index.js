


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
}

// form validation
function showAlert(event) {
    event.preventDefault()
    var myText = `Thanks for visiting Inkytales !!! Your query has been registered ;)`;
    alert (myText);
  }
