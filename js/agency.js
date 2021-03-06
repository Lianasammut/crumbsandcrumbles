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


// if window has a FRAGMENT on-load
if (window.location.href.indexOf("#")) {
    // get the fragmentId and load it
    var modalId = window.location.href.replace(window.location.origin, "").replace("/", "");
    $("a[href='" + modalId + "']").focus().click();
}

// the current section being viewed before opening a modal
var currentSection;

// when a modal is displayed
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
    var pageUrl = "#" + modal.id;

    // send page change event
    gtag('config', 'UA-108057956-1', { 'page_path': pageUrl });

    // send generic event
    ga('send', {
        hitType: 'event',
        eventCategory: productType,
        eventAction: 'view',
        eventLabel: productName
    });

    // update address bar
    //history.replaceState(null, null, pageUrl);
});

// on click on Navi
$(".nav").find("a.page-scroll").click(function () {
    // send page change event
    var pageUrl = $(this).attr('href').replace("-with-background", "");
    gtag('config', 'UA-108057956-1', { 'page_path': pageUrl });

    // send event to google analytics
    ga('send', {
        hitType: 'event',
        eventCategory: 'Navigation',
        eventAction: 'view',
        eventLabel: $(this).attr('href')
    });

    // update address bar
    history.replaceState(null, null, pageUrl);
    
    // store current section
    currentSection = pageUrl;
});

// on NAV scroll
$('body').on('activate.bs.scrollspy', function () {
    var location = $("ul.nav").children("li[class='active']").children("a").attr('href')
    if (location) {
        location = location.replace("-with-background", "");
    } else {
        // root
        location = "/";
    }

    var pageUrl = location;
    gtag('config', 'UA-108057956-1', { 'page_path': pageUrl });

    // send event to google analytics
    ga('send', {
        hitType: 'event',
        eventCategory: 'Navigation',
        eventAction: 'view',
        eventLabel: $(this).attr('href')
    });

    // update address bar
    history.replaceState(null, null, pageUrl);
    
    // store current section
    currentSection = pageUrl;
});

// on modal close
$('div.modal').on('hide.bs.modal', function () {
    // clean address bar
    history.replaceState(null, null, currentSection);
    // notify GA
    gtag('config', 'UA-108057956-1', { 'page_path': currentSection });

    // send event to google analytics
    ga('send', {
        hitType: 'event',
        eventCategory: 'Navigation',
        eventAction: 'view',
        eventLabel: currentSection
    });
});
