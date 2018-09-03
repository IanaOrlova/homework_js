$(document).ready(function(){



        $('[href="#"]').on('click', function(e){
            e.preventDefault();
        });

    //                                    слайдер


    $('.third-section__slider').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        prevArrow:'<img class="prev" src="img/arrow_left.png">',
        nextArrow:'<img class="next" src="img/arrow_right.png">',
        variableWidth:true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }]

    });

    //                                   скролл

    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({

            scrollTop: $(id).offset().top
        }, 1200);

    });


    //                            меню


    $('.menu__button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });

    //                                    карта


    map = new google.maps.Map(document.getElementById('map'), {

        center: {lat: 50, lng: 21},

                zoom: 16,

                zoomControl:false,

                disableDefaultUI: true,

        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]

    });

});
