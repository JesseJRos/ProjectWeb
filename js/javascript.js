/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var filterknop = document.querySelector('#filter');
var section = document.querySelector('body section:first-of-type');


filterknop.addEventListener('click', function(){
    section.classList.toggle('show-form');

});
