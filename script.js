const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let karydas = selectElement('.nav-item-about');
let port = selectElement('.nav-item-port');
let cont = selectElement('.nav-item-cont');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});
karydas.addEventListener('click', function() {
    body.classList.toggle('open');
});
port.addEventListener('click', function() {
    body.classList.toggle('open');
});
cont.addEventListener('click', function() {
    body.classList.toggle('open');
});

