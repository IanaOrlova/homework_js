$(document).ready(function() {


    //                     плавный скролл


    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1200);
    });

//                     слайдер


    $('.third-section__slider-container').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        dotsClass: "my-dots",

    });

    $('.fifth-section__slider-container').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        dotsClass: "my-dots",

    });

    //                  карта



    var mapContainer = document.getElementById('map');

    showMap(document.getElementById('map'), 49.568583 ,  34.585416 );

    function showMap(mapContaine, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
            position: {lat: 49.568583, lng: 34.585416},
            icon: {
                url: "js/Marker.png",
                scaledSize: new google.maps.Size(70, 70)
            }
        });

        var mapProp= {
            center: center,
            zoom: 16,
            zoomControl:false,
            disableDefaultUI: true,

        };
        var map = new google.maps.Map(mapContainer, mapProp);
        marker.setMap(map);

    }

    //                      изотоп



    var $isotopeGrid = $('.second-section__container');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true
    });


    $('.second-section__portfolio .filters a').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });


//                          кнопки изотопа

    $('.links').on('click', function(e){
        e.preventDefault();
        var element = $(this);

        if (!element.hasClass('actv')) {

            element.addClass('actv').css ({


            });

            element.siblings('li').removeClass('actv').css ({


            });
        }

    })

});