//移动光标
$(function(){
    var a = $('.header .center .box').offset().left
    // 移入
    $('.header .center ul li').mouseenter(function(){
        var i = $(this).offset().left
        console.log(i)
        $('.header .center .box').stop().animate({left:i},200)
    })
    // 移出
    $('.header .center').mouseleave(function(){
        $('.header .center .box').stop().animate({left:a},200)
    })
})