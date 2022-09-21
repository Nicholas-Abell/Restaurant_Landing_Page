//Navbar Dropdown
function MenuDrop() {
    var menuDrop = document.getElementById("menuDrop");
    menuDrop.classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.x')) {
        var dropdowns = document.getElementsByClassName("drop-down-list");
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
    const navTop = document.getElementById('nav-container');
    const top = document.getElementById('top');
    const logo = document.querySelector('.top-logo');
    const hamburger = document.getElementById('hamburger');

    const add_background_on_scroll = (x) => x.classList.add('bg-white');
    const add_border_on_scroll = (x) => x.classList.add('border-bottom');
    const remove_background_on_scroll = (x) => x.classList.remove('bg-white');
    const remove_border_on_scroll = (x) => x.classList.remove('border-bottom');
    const show_on_scroll = (x) => x.classList.remove('hidden');
    const hide_on_scroll = (x) => x.classList.add('hidden');
    const shift_Down = (x) => x.classList.add('shift-down');
    const remove_shift = (x) => x.classList.remove('shift-down');

    const addClass = (x, y) => x.classList.add(y);
    const removeClass = (x, y) => x.classList.add(y);

    if (scrollPos >= 200) {
        add_background_on_scroll(navTop);
        add_border_on_scroll(navTop);
        add_background_on_scroll(top);
        show_on_scroll(logo);
        shift_Down(hamburger);
    }
    else {
        remove_background_on_scroll(navTop);
        remove_border_on_scroll(navTop);
        remove_background_on_scroll(top);
        hide_on_scroll(logo);
        remove_shift(hamburger);
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

function CloseSideNav() {
    sideNav.style.display = "none";
    document.body.style = "overflow: scroll";

}

function OpenSideNav() {
    sideNav.style.display = "flex";
    document.body.style = "overflow: hidden";
    //body background opacity, lock scroll
}
