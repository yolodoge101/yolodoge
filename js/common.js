$(window).scroll(function(event) {
    var scroll_h = $(window).scrollTop();
    if(scroll_h == 0) {
        $("header").removeClass("slideHeader");
    }
    if(scroll_h > 80) {
        $("header").addClass("slideHeader");
    }
});

$('#leftMenu').on('click', function(event){
    $('div.slide-mask').toggleClass('show');
    $('aside.slide-wrapper').toggleClass('moved');
});

$('div.slide-mask').on('click', function(event){
    $('div.slide-mask').toggleClass('show')
    $('aside.slide-wrapper').toggleClass('moved');
});


$('#goBack').on('click',function (event) {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
})

$('.toplink a').on('click',function(e){
    e.preventDefault();
    var indexpp = $(this).attr('href');
    $('html, body').animate({scrollTop: $(indexpp).offset().top - 60}, 'slow');
    $('div.slide-mask').removeClass('show')
    $('aside.slide-wrapper').removeClass('moved');
    $(this).parent().siblings().removeClass('on')
    $(this).parent().addClass('on')
});


$(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= 400){
        $("#goBack").addClass("on");
    }else{
        $("#goBack").removeClass("on");
    }
});

$('.dropdownmenuUl > li').on({
    mouseenter: function() {
        if ($(this).find("div").hasClass("popmain")) {
            $(this)
                .addClass("on")
                .find("div").show();
        }
    },
    mouseleave: function() {
        $(this).removeClass("on").find("div").hide();
    }
});

//底部微信弹窗
$('.PopUpBtnWeChat').on('click',function(){
    $("#PopUpWeChat").addClass('show');
    $('.closeBtn').on('click',function () {
        $(".PopUp").removeClass('show');
    })
})

// if(navigator.userAgent.match(/mobile/i)) {
//   $('.showText').on('click',function(){
//     var display =$(this).find('.text').css('display');
//     if(display == 'none'){
//       $(this).find('.textTitle').hide()
//       $(this).find('.text').show()
//     } else {
//       $(this).find('.textTitle').show()
//       $(this).find('.text').hide()
//     }
//   })
// } else {
//   $('.showText').on('mouseleave',function(){
//     $(this).find('.textTitle').show()
//     $(this).find('.text').hide()
//   })
//   $('.showText').on('mouseenter',function(){
//     $(this).find('.textTitle').hide()
//     $(this).find('.text').show()
//   })
// }

/*加载页面动画*/
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    (function(){
        var config = {
            reset: false
        };
        window.scrollReveal = new scrollReveal(config);
    })();
}

$.stellar({
    horizontalScrolling: false,
    responsive: true
});