const nav = document.querySelector('#nav-menu');
window.addEventListener('scroll', ()=> {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 600) {
        nav.style.backgroundColor = 'black'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})
