var header = document.getElementById('header');
        
window.addEventListener('scroll', function() {
    var scroll = scrollY;
    if (scroll >= 48) {
            header.classList.add('tiny');
    } else {
            header.classList.remove('tiny');
    };
})

var transformWrapper = document.getElementById('transform-wrapper');
setTimeout(function() {transformWrapper.style.transform = 'translateY(-100%)'}, 750);