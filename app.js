const menu = document.querySelector('#mobile-menu') //targets the spans 
const menulink = document.querySelector('.navbar__menu')// targets the navbar_menu list

menu.addEventListener('click', function(){   //listens to click on the spans
    menu.classList.toggle('is-active')       //turns on the is-active in css which changes the bars to a cross
    menulink.classList.toggle('active')     // turns on the .navbar_menu.active which transitions out the nav menu that was hidden
})