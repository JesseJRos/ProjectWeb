/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var favbutton = document.querySelector('.popup');
var favadded = document.querySelector('.popup-hide');


favbutton.addEventListener('click', function() {
    favadded.classList.toggle('popup-show');
});
