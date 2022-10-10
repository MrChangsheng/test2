$('#full').fullpage({
    navigation: true,
    licenseKey: 'YOUR_KEY_HERE'
});
//移入切换图片
$('.s3 .host .bofang,.s3 .host .small .pp, .s3 .host .lunbo .lunbo1 a,.s4 .host .left ,.s4 .host .right,.s6 .host .left,.s7 .host .val li,.s7 .host .left,.s7 .host .right,.s5 .left,.s5 .right').hover(
    function(){
        $(this).children().eq(0).hide().siblings().show()
    },
    function(){
        $(this).children().eq(1).hide().siblings().show()
    }
)
//第二屏

// 第三屏轮播图
$(function(){
    var i = 0;
    $('.s3 .host .small .pp').eq(0).find('.img1').hide().siblings().show()
    $('.s3 .host .lunbo1').eq(0).show().siblings().hide()
    var time = setInterval(play,2000)
    function play(){
        i++;
        outplay(i)
        if(i>=$('.s3 .host .lunbo1').length){
            i=0;
            outplay(i)
        }
    }
    function outplay(ele){
        $('.s3 .host .small .pp').eq(ele).unbind('mouseenter').unbind('mouseleave').siblings().bind({mouseenter:function(){
            $(this).find('.img1').hide().siblings().show()
        },mouseleave:function(){
            $(this).find('.img2').hide().siblings().show()
        }})
        $('.s3 .host .small .pp').eq(ele).find('.img1').hide().siblings().show().parent().siblings().children('.img2').hide().siblings().show()
        $('.s3 .host .lunbo .lunbo1').eq(ele).show().siblings().hide()
    }
    
    $('.s3 .host .small .pp').hover(function(){
        clearInterval(time);
        },function(){
        time = setInterval(play,2000)
    })
    //移入清除计时器
    $('.host').hover(function(){
        clearInterval(time)
    },function(){
        time = setInterval(play,2000)
    })

    //单击切换图片事件
    $('.s3 .host .small .pp').click(function(){
        i=$(this).index()
        outplay(i)
        var a = $(this).index()
        $(this).unbind('mouseenter').unbind('mouseleave').siblings().bind({mouseenter:function(){
            $(this).children('.img1').hide().siblings().show()
        },mouseleave:function(){
            $(this).children('.img2').hide().siblings().show()
        }})
        $(this).children('.img1').hide().siblings().show().parent().siblings().children('.img2').hide().siblings().show()
        $('.s3 .host .lunbo .lunbo1').eq(a).show().siblings().hide()
    })
})

//S4页面
$(function(){
    var i=0;
    $('.s4 .host .right,.s4 .host .left').click(function(){
        i++
        if(i>1)
        {
            i=0
        }
         $('.s4 .host .box').children().eq(i).stop().fadeIn(200).siblings().hide()
    })
})

//s5页面
$(function(){
    var index = 0;
    var time = setInterval(play,5000)
    function play(){
        index++;
        if(index>1)
            index=0
        if(index==1){
            outplay1()
        }
        if(index==0){
            outplay2()
        }
    }
    $('.s5 .left').click(function(){
        outplay1()
    })
    $('.s5 .right').click(function(){
        outplay2()
    })
    function outplay1(){
        $('.s5 .left').children().eq(0).hide().siblings().show()
        $('.s5 .right').children().eq(1).hide().siblings().show()
        $('.s5 .center .two').show().siblings('.one').hide()
        $('.s5 .left').unbind('mouseenter').unbind('mouseleave').siblings('.right').bind({mouseenter:function(){
            $('.s5 .right').children('.img1').hide().siblings().show()
        },mouseleave:function(){
            $('.s5 .right').children('.img2').hide().siblings().show()
        }})
    }
    function outplay2(){
        $('.s5 .right').children().eq(0).hide().siblings().show()
            $('.s5 .left').children().eq(1).hide().siblings().show()
            $('.s5 .center .one').show().siblings('.two').hide()
            $('.s5 .right').unbind('mouseenter').unbind('mouseleave').siblings('.left').bind({mouseenter:function(){
                $('.s5 .left').children('.img1').hide().siblings().show()
            },mouseleave:function(){
                $('.s5 .left').children('.img2').hide().siblings().show()
            }})
    }
    
    //移入清除计时器
    $('.s5 .center,.s5 .left ,.s5 .right').hover(function(){
        clearInterval(time)
    },function(){
        time = setInterval(play,5000)
    })
})


//s6页面
$(function(){
    $('.s6 .host .left').click(function(){
        $(this).unbind('mouseenter').unbind('mouseleave').siblings('.left').bind({mouseenter:function(){
            $(this).find('.img1').hide().siblings().show()
        },mouseleave:function(){
            $(this).find('.img2').hide().siblings().show()
        }})
        $(this).next().stop().animate({width:'612px'}).siblings('.right').stop().animate({width:'0px'})
        $(this).find('.img1').hide().siblings().show()
        $(this).siblings('.left').find('.img2').hide().siblings().show()
    })
})

//s7页面
$(function(){
    var i=0;
    var length=$('.s7 .host .val li').length
    var timer=setInterval(play,2000)
    function play(){
        i++;
        
        if(i>=length)
        {
            i=0
            outplay(i)
        }
        outplay(i)
    }
    function outplay(i){
        $('.s7 .host .val li').eq(i).unbind('mouseenter').unbind('mouseleave').siblings().bind({mouseenter:function(){
            $(this).find('.img1').hide().siblings().show()
        },mouseleave:function(){
            $(this).find('.img2').hide().siblings().show()
        }})
        $('.s7 .host .val li').eq(i).find('.img1').hide().siblings().show().parent().siblings().children('.img2').hide().siblings().show()
        if(i==0){
            $('.s7 .host .tu img').eq(i+2).stop(true,true).animate({
                zIndex:3,
                left:'60%',
                width: '524px',
                height: '300px',
            })
            $('.s7 .host .tu img').eq(i+1).stop(true,true).animate({
                zIndex:5,
                left:'75%',
                width: '524px',
                height: '300px',
            })
            $('.s7 .host .tu img').eq(i).stop(true,true).animate({
                zIndex:6,
                left:'50%',
                width: '698px',
                height: '400px',
                
            })
            $('.s7 .host .tu img').eq(length-1).stop(true,true).animate({
                zIndex:4,
                left:'25%',
                width: '524px',
                height: '300px',
            })
            $('.s7 .host .tu img').eq(length-2).stop(true,true).animate({
                zIndex:2,
                left:'40%',
                width: '524px',
                height: '300px',
            })
        }
        if(i==1){
            $('.s7 .host .tu img').eq(i+2).stop(true,true).animate({
                zIndex:3,
                left:'60%',
                width: '524px',
                height: '300px',
            })
            $('.s7 .host .tu img').eq(i+1).stop(true,true).animate({
                zIndex:5,
                left:'75%',
                width: '524px',
                height: '300px',
                
            })
            $('.s7 .host .tu img').eq(i).stop(true,true).animate({
                zIndex:6,
                left:'50%',
                width: '698px',
                height: '400px',
            })
            $('.s7 .host .tu img').eq(i-1).stop(true,true).animate({
                zIndex:4,
                left:'25%',
                width: '524px',
                height: '300px',
                
            })
            $('.s7 .host .tu img').eq(length-1).stop(true,true).animate({
                zIndex:2,
                left:'40%',
                width: '524px',
                height: '300px',
                
            })
        }
        if(i>=2&&i<=length-3){
            $('.s7 .host .tu img').eq(i+2).stop(true,true).animate({
                zIndex:3,
                left:'60%',
                width: '524px',
                height: '300px',
                
            })
            $('.s7 .host .tu img').eq(i+1).stop(true,true).animate({
                zIndex:5,
                left:'75%',
                width: '524px',
                height: '300px',
                
            })
            $('.s7 .host .tu img').eq(i).stop(true,true).animate({
                zIndex:6,
                left:'50%',
                width: '698px',
                height: '400px',
                
            })
            $('.s7 .host .tu img').eq(i-1).stop(true,true).animate({
                zIndex:4,
                left:'25%',
                width: '524px',
                height: '300px',
                
            })
            $('.s7 .host .tu img').eq(i-2).stop(true,true).animate({
                zIndex:2,
                left:'40%',
                width: '524px',
                height: '300px',
            })
        }
        if(i==4){
                $('.s7 .host .tu img').eq(0).stop(true,true).animate({
                    zIndex:3,
                    left:'60%',
                    width: '524px',
                    height: '300px',
                })
                $('.s7 .host .tu img').eq(i+1).stop(true,true).animate({
                    zIndex:5,
                    left:'75%',
                    width: '524px',
                    height: '300px',
                })
                $('.s7 .host .tu img').eq(i).stop(true,true).animate({
                    zIndex:6,
                    left:'50%',
                    width: '698px',
                    height: '400px',
                })
                $('.s7 .host .tu img').eq(i-1).stop(true,true).animate({
                    zIndex:4,
                    left:'25%',
                    width: '524px',
                    height: '300px',
                })
                $('.s7 .host .tu img').eq(i-2).stop(true,true).animate({
                    zIndex:3,
                    left:'40%',
                    width: '524px',
                    height: '300px',
                    
                })  
        }
        if(i==5){
                $('.s7 .host .tu img').eq(1).stop(true,true).animate({
                    zIndex:3,
                    left:'60%',
                    width: '524px',
                    height: '300px',
                    
                })
                $('.s7 .host .tu img').eq(0).stop(true,true).animate({
                    zIndex:5,
                    left:'75%',
                    width: '524px',
                    height: '300px',
                    
                })
                $('.s7 .host .tu img').eq(i).stop(true,true).animate({
                    zIndex:6,
                    left:'50%',
                    width: '698px',
                    height: '400px',
                    
                })
                $('.s7 .host .tu img').eq(i-1).stop(true,true).animate({
                    zIndex:4,
                    left:'25%',
                    width: '524px',
                    height: '300px',
                    
                })
                $('.s7 .host .tu img').eq(i-2).stop(true,true).animate({
                    zIndex:2,
                    left:'40%',
                    width: '524px',
                    height: '300px',
                    
                }) 
        }
    }
    //移入清除计时器
    $('.s7 .host,.s7 .host .val li').hover(function(){
        clearInterval(timer);
        },function(){
        timer = setInterval(play,2000)
    })
    $('.s7 .host .val li').click(function(){
        i = $(this).index()
        outplay(i)
        $(this).unbind('mouseenter').unbind('mouseleave').siblings().bind({mouseenter:function(){
            $(this).children('.img1').hide().siblings().show()
        },mouseleave:function(){
            $(this).children('.img2').hide().siblings().show()
        }})
        $(this).find('.img1').hide().siblings().show()
        $(this).siblings().find('.img2').hide().siblings().show()
    })
    //单击事件
    $('.s7 .host .left').click(function(){
        i--;
        if(i<0)
        {
            i=length-1
        }
        outplay(i)
    })
    $('.s7 .host .right').click(function(){
        i++;
        if(i>=length)
        {
            i=0
        }
        outplay(i)
    })
})
