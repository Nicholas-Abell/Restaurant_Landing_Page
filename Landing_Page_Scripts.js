//Navbar Dropdown
function MenuDrop() {
    var dropDown = document.getElementById("menuDrop");
    dropDown.classList.add('show');
}


window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("drop-down__list");

    if (event.target.classList != 'drop-down__list__item' &&
        event.target.classList != 'navbar__list__item--button') {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Scroll events
window.addEventListener('scroll', (event) => {
    let scrollPos = window.scrollY;
    const navContainer = document.getElementById('nav-container');
    const navLogo = document.getElementById('nav-logo');

    const add_background_on_scroll = (x) => x.classList.add('bg-dark');
    const remove_background_on_scroll = (x) => x.classList.remove('bg-dark');

    const show_on_scroll = (x) => x.classList.remove('hidden');
    const hide_on_scroll = (x) => x.classList.add('hidden');

    if (scrollPos >= 200) {
        add_background_on_scroll(navContainer);
        show_on_scroll(navLogo);
    }
    else {
        remove_background_on_scroll(navContainer);
        hide_on_scroll(navLogo);
    }
});

//Carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nav = document.querySelector('.carousel__nav');
const dots = Array.from(nav.children);

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = Array.from(track.children);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
        dots[i].style.background = 'white';
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = '100';
    dots[slideIndex - 1].style.background = "#f47321";
    setTimeout(showSlides, 3000);
}

//Hamburger_Side-Nav
const sideNav = document.querySelector('.side-nav');
const backDrop = document.querySelector(".back-drop")

function CloseSideNav() {
    sideNav.style.width = "0";
    document.body.style = "overflow: scroll";
}

function OpenSideNav() {
    sideNav.style.width = "50vw";
    document.body.style = "overflow: hidden";
}
