$(function(){
    // $("#logina").load("log.html");
    // 登录显示
    $('.header .login').click(function(){
        $('#logina').show()
    })
    // 登录隐藏
    $('#logina .login img').click(function(){
        $('#logina').hide()
        console.log('1213hskjd')
    })
    $('#logina .login .top div').click(function(){
        var index = $(this).index()
        $('#logina .button>div').eq(index).show().siblings().hide()
        $(this).children('p').show()
        $(this).siblings().children('p').hide()
    })
    
})  
