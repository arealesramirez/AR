import Typed from './typed.js/typed';

$(function () {
    var typed = new Typed('.type-header', {
        // stringsElement: '#typed-strings'
        strings: ["",
            "Loading.^500 .^500 .^500  ",
            "Welcome  ^1000 to ^1000 <strong>AR<strong>",
            "Designer ^1000 / Developer",
            "I'm Andres Reales "],
        startDelay: 25,
        typeSpeed: 50,
        backSpeed: 500,
        backDelay: 1500,
        fadeOut: true,
        fadeOutDelay: 1500,
    });
})