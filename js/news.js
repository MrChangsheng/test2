$(function(){
    $('.category a').click(function(){
        var i = $(this).index()
        $(this).addClass('first_child').siblings().removeClass('first_child')
        $('.news .some-list').eq(i).fadeIn(200).siblings().fadeOut(200)
    })
    $('.news .some-list .item').hover(function(){
        $(this).find('.bor').fadeIn(200)
    },function(){
        $(this).find('.bor').fadeOut(200)
    })
    function outIn(){
        if($(document).scrollTop()>300)
        {
            $('.button_top').fadeIn()
        }else{
            $('.button_top').fadeOut()
        }
    }
    $(window).scroll(function(){
        outIn()
    })
    $('.button_top').click(function(){
        $(document).scrollTop(0);
    })
})

$(function(){
    $('.some-list').simpleLoadMore({
        item: 'li.item',
        count: 3
    });
})
