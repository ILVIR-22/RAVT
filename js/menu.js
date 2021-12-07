window.onscroll = function showHeader() {

    let header = document.querySelector('.navigation01');

    if(window.pageYOffset > 94) {
        header.classList.add('nav-active');        
    } else {
        header.classList.remove('nav-active');
    }

};
