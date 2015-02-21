var container = document.querySelector('.container');
var navButtons = container.querySelector('nav').querySelectorAll('button');
var pages = container.querySelectorAll('.page');

for (var i = 1; i < pages.length; i++) {
    pages[i].style.display = 'none';
}

function navButtonOnClick(index, pageTitle) {
    var target = container.querySelector(pageTitle);
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
        navButtons[i].setAttribute('style', '');
    }
    navButtons[index].setAttribute('style', 'font-weight: bold');
    target.style.display = '';
}