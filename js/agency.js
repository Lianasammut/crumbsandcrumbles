/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function () {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function () {
        if (!location.hash) {
            $(modal).modal('hide');
        }
    }

    // send event to google analytics
    var productType = modal.classList[0].split('-')[0];
    var productName = $(modal).find('.modal-body').children('h2').text();
    var fakePageUrl = "/" + modal.id.replace("Modal", "/") + ".html";
    //$("a[href='#specialitiesModalchocolate-cake']").focus().click()

    // send page change event
    gtag('config', 'UA-108057956-1', {'page_path': fakePageUrl});

    // send generic event
    ga('send', {
        hitType: 'event',
        eventCategory: productType,
        eventAction: 'view',
        eventLabel: productName
    });
});

$("a.page-scroll").click(function() {
    // send page change event
    var fakePageUrl = $(this).attr('href').replace("#","/").replace("-with-background","");
    gtag('config', 'UA-108057956-1', {'page_path': fakePageUrl});

    // send event to google analytics
    ga('send', {
        hitType: 'event',
        eventCategory: 'Navigation',
        eventAction: 'view',
        eventLabel: $(this).attr('href')
    });
});