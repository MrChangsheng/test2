$(function(){
    var i = 1
    var index
    // 点击切换
    $('.nav li').click(function(){
        index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $('.host .ss').eq(index).show().siblings().hide()
    })

    // 背景放大
    $('.host .ss .bj .img1').addClass('fangda')
    setInterval(play,10000)
    function play(){
        if(i==0){
            $('.host .ss .bj .img1').show().addClass('fangda').siblings().hide().removeClass('fangda')
            i=1
        }else{
            $('.host .ss .bj .img2').show().addClass('fangda').siblings().hide().removeClass('fangda')
            i=0
        }
    }
})
// 底部轮播
$(function(){
    var i = 0;
    var length = $('.s1 .button_lists .center li').length
    // console.log(length)
    // 点击右箭头
    $('.button_lists .right').click(function(){
        i++;
        if(i>=length){
            i=0
            $('.button_lists .center ul').animate({left:0})
        }
        $('.button_lists .center li').eq(i).addClass('addcss').siblings().removeClass('addcss')
        if(i>2&&i<length-3){
            $('.button_lists .center ul').animate({left:-144*(i-2)},200)
        }
        $(this).parents('.button_lists').siblings('.mast').find('li').eq(i).show().siblings().hide()
    })
    // 点击左箭头
    $('.button_lists .left').click(function(){
        i--;
        if(i<0){
            i=length-1
            $('.button_lists .center ul').animate({left:-144*(length-6)},200)
        }
        $('.button_lists .center li').eq(i).addClass('addcss').siblings().removeClass('addcss')
        if(i>1&&i<length-3){
            $('.button_lists .center ul').animate({left:-144*(i-2)},200)
        }
        $(this).parents('.button_lists').siblings('.mast').find('li').eq(i).show().siblings().hide()
    })
    // 点击头像
    $('.button_lists .center li').click(function(){
        i=$(this).index()
        $(this).addClass('addcss').siblings().removeClass('addcss')
        if(i>=0&&i<=2){
            $(this).parent('ul').animate({left:-144*0},200)
        }
        if(i>=length-3&&i<=length-1){
            $(this).parent('ul').animate({left:-144*(length-6)},200)
        }
        if(i>2&&i<length-3){
            $(this).parent('ul').animate({left:-144*(i-2)},200)
        }
        
        // $(this).parents('.button_lists').siblings('.mast').find('li').eq(i).children('div').addClass('animated_left').siblings('.figure').addClass('animated_right')
        $(this).parents('.button_lists').siblings('.mast').find('li').eq(i).show().siblings().hide()
    })
})

$(function(){
    //中日切换
    var i=0;
    $('.mast .switch').click(function(){
        if(i==1){
            $(this).find('p').eq(i).addClass('lll').siblings().removeClass('lll')
            $(this).siblings('p').text('CV: 林簌')
            i=0
        }else{
            $(this).find('p').eq(i).addClass('lll').siblings().removeClass('lll')
            $(this).siblings('p').text('CV: 斋藤千和')
            i=1
        }
    })
    // 麦克风切换
    $('.voice .img1').click(function(){
        $(this).siblings().show()
        $(this).fadeOut(100).delay(4000).fadeIn(100)
    })
    $('.voice .img2').click(function(){
        $(this).siblings().stop().show()
        $(this).hide()
    })
})