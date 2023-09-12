// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function(e) {
        var $items = $('.owl-filter-bar a')
        var $item = $(this);
        var filter = $item.data('owl-filter')
        $items.removeClass("active");
        $item.addClass("active");
        owl.owlcarousel2_filter(filter);

        e.preventDefault();
    })
    /** google_map js **/
function myMap() {
    // Define the map properties
    var mapProp = {
        center: new google.maps.LatLng(9.452876846614481, 77.5559062682423),
        zoom: 18,
    };

    // Create a new Google Map inside the "googleMap" div
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Call the initializeMap function when the page loads
google.maps.event.addDomListener(window, 'load', initializeMap);
// nice select
$(document).ready(function() {
    $('select').niceSelect();
});