$(function(){
    //移入切换图片
    $('.banner_bottom .di_top li').hover(
        function(){
            $(this).children().eq(0).hide().siblings().show()
            $(this).css('opacity','1')
        },
        function(){
            $(this).children().eq(1).hide().siblings().show()
            $(this).css('opacity','0.4')
        }
    )
    
})