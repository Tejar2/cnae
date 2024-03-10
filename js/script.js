// JS para el menu de encabezado responsive 
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Header Background Change On Scroll
let header = document.querySelector('nav')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    // Add active to btn
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass('active-filter');
    });
});