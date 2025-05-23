let lastScrollY = window.scrollY;
let atBottom = false;

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const viewHeight = window.innerHeight;
    if (viewHeight + currentScrollY >= pageHeight - 5) {
        atBottom = true;

    }
    if (currentScrollY > lastScrollY && !atBottom) {
        window.location.href = "wishing-frog.html";
    }
    
    lastScrollY = currentScrollY;
});