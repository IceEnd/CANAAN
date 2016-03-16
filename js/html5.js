$(function(){
    
    //圆形轨迹的坐标点
    var x_arr = new Array();
    var y_arr = new Array();
    var x = y = m =0;
    for(var i = 0; i < 640 ; i++){
        if(i >= 320){
            x = m;
            y = 160 + Math.sqrt(25600 - Math.pow(x-160,2));
            m--;
        }
        else{
            x = m;
            y = 160 - Math.sqrt(25600 - Math.pow(x-160,2));
            m++;
        }
        x_arr[i] = x - 25;
        y_arr[i] = parseInt(y) - 25;
    } 
    
    //icon的移动轨迹
    var icon_1 = $('.github_a');
    var icon_2 = $('.sina_a');
    var g_i = 0;
    var s_i = 320;
    var a_hover = false;
    function aMove(){
        if(!a_hover){
            if(g_i <= 640){
                icon_1.css({'left':x_arr[g_i]+'px','top':y_arr[g_i]+'px'});
                g_i++;
            }
            else{
                g_i = 1;
                icon_1.css({'left':x_arr[g_i]+'px','top':y_arr[g_i]+'px'});
                g_i++;
            }
        
            if(s_i <= 640){
                icon_2.css({'left':x_arr[s_i]+'px','top':y_arr[s_i]+'px'});
                s_i++;
            }else{
                s_i = 1;
                icon_2.css({'left':x_arr[s_i]+'px','top':y_arr[s_i]+'px'});
                s_i++;
            }    
        }
        
    }
    
    aMove();
    var gitTimer=setInterval(aMove,8);
    
    $('.cycle_div').hover(function(){
        a_hover = true;
    },function(){
        a_hover = false;
    });
    
    var flag = true;
    $(document).mousemove(function(e){
        if(flag){
            bs = e.pageX || e.clientX;
        }
        flag = false;
        
        var x = e.pageX || e.clientX;
        var sx = (x-bs)/100 + 50;
        $(".head_content").stop(true,false).animate({'backgroundPositionX':sx+'%'},0);
    });
    
    
    //初始化
    var art_li = $('.artic_li');
    var h,t,s_top;
    var i;
    function init(){
        h = window.innerHeight;
        s_top=document.documentElement.scrollTop;
        for(i in art_li){
            t = art_li[i].offsetTop;
            t = t - s_top;
            if((t-h) < -200){
                art_li[i].style.left = '0';
                console.log(h);
             }
        }
    }
    init();
    
    var scrollFunc=function(e){ 
        h = window.innerHeight;
        e=e || window.event;
        if(e.wheelDelta){
            //IE/Opera/Chrome     
            for(i in art_li){
                s_top=document.body.scrollTop;
                t = art_li[i].offsetTop;
                t = t - s_top;
                if((t-h) < -200){
                    art_li[i].style.left = '0';
                }
            }
        }else if(e.detail){
            //Firefox 
            for(i in art_li){
                s_top=document.documentElement.scrollTop;
                t = art_li[i].offsetTop;
                t = t - s_top;
                if((t-h) < -200){ 
                    art_li[i].style.left = '0';
                }
            }
        } 
    } 
    //注册事件
    if(document.addEventListener){ 
        document.addEventListener('DOMMouseScroll',scrollFunc,false); 
    }
    //W3C 
    //IE/Opera/Chrome
    window.onmousewheel=document.onmousewheel=scrollFunc; 
    
    $(window).bind("scroll", function(){ 
            //当滚动条滚动时
            h = window.innerHeight;
            for(i in art_li){             
                s_top=$(document).scrollTop();
                t = art_li[i].offsetTop;
                t = t - s_top; 
                if((t-h) < -200){
                    art_li[i].style.left = '0';
                }
        }
        if($(document).scrollTop() >= 300){
            $('#totop').fadeIn(500);
        }
        else{
            $('#totop').fadeOut(500);
        }
    }); 
    
    $('#totop').on('click',function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        },800);
    });
    
    //菜单弹出
    var menu_none = true;
    function menuOut(){
        $('.head_menu').stop(true.false).animate({'left':'0'},200);
        $('.head_nav').stop(true.false).animate({'left':'50%'},200);
        $('.page').stop(true.false).animate({'left':'50%'},200);
        $('.footer').stop(true.false).animate({'left':'50%'},200);      
    }
    function menuIn(){
        $('.footer').stop(true.false).animate({'left':'0'},200);
        $('.head_menu').stop(true.false).animate({'left':'-50%'},200);
        $('.head_nav').stop(true.false).animate({'left':'0'},200);
        $('.page').stop(true.false).animate({'left':'0'},200);         
    }
    $('.menu_button').click(function(){
        if(menu_none){
            menuOut();
            menu_none = false;
        }
        else{
            menuIn();
            menu_none = true;
        }
            
    });
        
    //手势事件
    var startX,endX;
    $(window).bind('touchstart', touchStart);
    $(window).bind('touchmove', touchMove);
    $(window).bind('touchend', touchEnd);
    
    function touchStart(event){
        var touch =   event.originalEvent.targetTouches[0];
        startX = touch.pageX;
    }
    
    function touchMove(event){
        var touch =  event.originalEvent.changedTouches[0];
        endX = touch.pageX;
    }

    function touchEnd(event){
        if(endX - startX > 160){
            menuOut();
        }
        else if(endX - startX < 160){
            menuIn();
        }
    }
    
    //  $('.img_div').hover(function(){
    //     $(this).children('.title_bg').stop(true,false).animate({'bottom':'0'},300); 
    //     $(this).children('.art_title').stop(true,false).animate({'bottom':'0'},300); 
    // },function(){
    //     $(this).children('.title_bg').stop(true,false).animate({'bottom':'-55px'},300); 
    //     $(this).children('.art_title').stop(true,false).animate({'bottom':'-55px'},300);
    // });
});

