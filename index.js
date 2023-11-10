const burgerWrapper = document.querySelector(".burger__wrapper");
const headerNavigation = document.querySelector(".header-nav");
const body = document.querySelector("body");

burgerWrapper.addEventListener('click', function (event) {
    // console.log(event.target);
    headerNavigation.classList.toggle('active');
    headerNavigation.style.visibility = headerNavigation.classList.contains('active') ? 'hidden' : 'visible';
    burgerWrapper.classList.toggle('show');
})
if (window.innerWidth < 768) {
    headerNavigation.style.visibility = 'hidden';
}
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        headerNavigation.style.visibility = 'visible';
    } else {
        headerNavigation.style.visibility = 'hidden';
    }
})
