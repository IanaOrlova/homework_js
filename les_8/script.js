
$(document).ready(function() {

    //функция переключения табов//

    $(".tab_item").not(":first").hide();

    $(".tab").click(function() {

        $(".tab").removeClass("active").eq($(this).index()).addClass("active");

        $(".tab_item").hide().eq($(this).index()).fadeIn()

    }) .eq(0).addClass("active");

//функция сохранения кликов рейтинга//

    $('.rating i').click(function () {

        $(this).css({

            "color": "#ffdd3f"
        });
    })


});