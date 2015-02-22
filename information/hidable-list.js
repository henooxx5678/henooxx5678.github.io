var container = document.querySelector('.container');
var keyTitles = container.querySelectorAll('.key-title');
var hidableLists = container.querySelectorAll('.hidable');

for (var i = 0; i < keyTitles.length; i++) {
    if (hidableLists[i].classList.contains('hidden-default')) {
        hidableLists[i].style.display = 'none';
        keyTitles[i].innerHTML += ' ◂';
    } else {
        keyTitles[i].innerHTML += ' ▾';
    }
    keyTitles[i].setAttribute('onclick', 'keyTitleOnClick(' + i + ')');
}


function keyTitleOnClick(index) {
    if (hidableLists[index].style.display == 'none') {
        keyTitles[index].innerHTML = keyTitles[index].innerHTML.replace('◂', '▾');
        hidableLists[index].style.display = '';
    } else {
        keyTitles[index].innerHTML = keyTitles[index].innerHTML.replace('▾', '◂');
        hidableLists[index].style.display = 'none';
    }
}