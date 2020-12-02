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

document.getElementById('container').style.display = 'none';

//mobile version

var mobHeader = document.getElementById('mob-hed')

window.addEventListener('scroll', function() {
        var scroll = scrollY;
        if (scroll >= 64) {
                mobHeader.classList.add('small');
        } else {
                mobHeader.classList.remove('small');
        };
    })


var burger = document.getElementById('header-brgr');
var mobNavBar = document.getElementById('m-sub-t');

burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        mobNavBar.classList.toggle('down');
})