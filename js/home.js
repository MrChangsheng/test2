$(function(){
    $('.header .center ul li').eq(0).addClass('header_hover').siblings().removeClass()
})
// 轮播图
$(function(){
    var i=0;
    var length=$('.new_Boom .left .val li').length
    var time =setInterval(play,2000)
    function play(){
        i++
        if(i>length)
        {
            i=1;
            $('.new_Boom .left .tu').stop().css('left','0')
        }
        if(i==length){
            outoplay(0)
        }
        else{
            outoplay(i)
        }
        $('.new_Boom .left .tu').stop().animate({left:-728*i},1000)
    }
    function outoplay(i){
        $('.new_Boom .left .val li').eq(i).addClass('val1').siblings().removeClass('val1')
    }
    $('.new_Boom .left').hover(
        function(){
            clearInterval(time)
        },
        function(){
            time=setInterval(play,2000)
        }
    )
    $('.new_Boom .left .val li').click(function(){
        i=$(this).index()
        outoplay(i)
        $('.new_Boom .left .tu').stop().animate({left:-728*i},1000)

    })
})
// Top切换
$(function(){
    $('.new .right .news_ul li').click(function(){
        var index = $(this).index()
        $(this).addClass('currenters').siblings().removeClass('currenters')
        $('.new .right .tab_con .item').eq(index).show().siblings().hide()
    })
})

// 地名介绍
$(function(){
    $('.city li').hover(function(){
        $(this).children('.img2').stop().fadeIn(200).siblings('.img3').show()
        $(this).children('.pp').hide()
        $(this).children('.bk').show()
    },function(){
        $(this).children('.img2').stop().fadeOut(200).siblings('.img3').hide()
        $(this).children('.pp').show()
        $(this).children('.bk').hide()
    })
})

// 悬浮窗
$(function(){
    var flag = true;
    $(".float_window .btn").click(function(){
        if(flag){
            flag = false;
            $(this).children().removeClass("rotate").addClass("rotate1");
            $(this).parent().stop().animate({right:'-200px'},600)
        }else{
            flag = true;
            $(this).children().removeClass("rotate1").addClass("rotate");
            $(this).parent().stop().animate({right:'0px'},600)
        }
    })
    //显示隐藏
    setInterval(scrollplay,100)
    function scrollplay(){
        if($(document).scrollTop()>300){
            $('.float_window').fadeIn()
        }else{
            $('.float_window').fadeOut()
        }
    }
})
