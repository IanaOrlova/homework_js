$(document).ready(function(){
    $('.container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:'<img  class="prev" src="img/Layer_left.png">',
            nextArrow:'<img class="next" src="img/Layer_right.png">',
            variableWidth: true,
    });
});
