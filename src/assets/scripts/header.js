$(function () {
    var topHome = $('app-home').offset().top;
    var topAbout = $('app-about').offset().top;
    var topServices = $('app-services').offset().top;
    var topHireme = $('app-hireme').offset().top;
    var topContact = $('app-contact').offset().top;
    var topFooter = $('app-footer').offset().top;
    var currentDiv = 'app-home';
    var rgb = 0;
    $(document).scroll(function () {
        if (window.pageYOffset < topAbout) {
            currentDiv = 'app-home';
        } else if (window.pageYOffset > topAbout && window.pageYOffset < topServices) {
            currentDiv = 'app-about .skewed-section';
        } else if (window.pageYOffset > topServices && window.pageYOffset < topHireme) {
            currentDiv = 'app-services .skewed-section';
        } else if (window.pageYOffset > topHireme && window.pageYOffset < topContact) {
            currentDiv = 'app-hireme .skewed-section';
        } else if (window.pageYOffset > topContact && window.pageYOffset < topFooter) {
            currentDiv = 'app-contact .skewed-section';
        } else if (window.pageYOffset > topFooter) {
            currentDiv = 'app-footer';
        }
        if (currentDiv == 'app-home') {
            rgb = 0;
        } else {
            rgb = $(currentDiv).css('background-color').replace('rgb(', '').replace(')', '').split(',').map(Number);
        }
        var o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000);

        if (o > 125) {
            $('app-header ul li > a').css('color', '#380404');
            $('app-header ul li').css('border-color', '#380404');
        } else {
            $('app-header ul li > a').css('color', '#ffffff');
            $('app-header ul li').css('border-color', '#ffffff');
        }
    });
});