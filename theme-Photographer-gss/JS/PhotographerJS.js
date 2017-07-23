/**
 * Created by ����˧ on 2017/3/19.
 */
$(function () {
    $("#biger").click(function () {
        $("#biger").stop().animate({fontSize: "28px"}, function () {
            $("#biger").stop().animate({fontSize: "22px"})
        })
    });
    $(".mask").mouseenter(function () {
        $(this).stop().animate({"opacity": 0.7}).parent().siblings().children("div").stop().animate({"opacity": 0});
    });
    $(".mask").mouseleave(function () {
        $(this).stop().animate({"opacity": 0})
    });
    $(".VIEWALL a").mouseenter(function () {
        $(".VIEWALL a").stop().animate({fontSize: "30px"});
    });
    $(".VIEWALL a").mouseleave(function () {
        $(".VIEWALL a").stop().animate({fontSize: "18px"});
    });
    //关闭按钮start
    $(".close").click(function () {
        location.href = "PEICING.html";
    });
    //关闭按钮end

    //点击显示大图


    $(".lipic .mask:eq(0) a").eq(0).click(function () {
        $(".none").stop().fadeIn(1000);
        $(".showbigpic").append('<img src="Images/' + 1 + '.jpg"/>');
    });
    $(".lipic .mask:eq(1) a").eq(0).click(function () {
        $(".none").stop().fadeIn();
        $(".showbigpic").append('<img src="Images/' + 2 + '.jpg" style="width:100%; height=100%;"/>');
    });
    $(".lipic .mask:eq(2) a").eq(0).click(function () {
        $(".none").stop().fadeIn();
        $(".showbigpic").append('<img src="Images/' + 3 + '.jpg" style="width:100%;"/>');
    });
    $(".lipic .mask:eq(3) a").eq(0).click(function () {
        $(".none").stop().fadeIn();
        $(".showbigpic").append('<img src="Images/' + 4 + '.jpg" style="width:100%;"/>');
    });
    $(".lipic .mask:eq(4) a").eq(0).click(function () {
        $(".none").stop().fadeIn();
        $(".showbigpic").append('<img src="Images/' + 5 + '.jpg" style="width:100%;"/>');
    });
    $(".lipic .mask:eq(5) a").eq(0).click(function () {
        $(".none").stop().fadeIn();
        $(".showbigpic").append('<img src="Images/' + 6 + '.jpg" style="width:100%; height=100%;"/>');
    });
    $(".closepic").click(function () {
        $(".none").stop().fadeOut(1000);
        $(".showbigpic").empty();
    });
    //点击显示大图end

    //点击切换图标start
    var i=1;
    $(".turnR").click(function () {
        i++;
        if(i<7){
            $(".showbigpic").empty();
            $(".showbigpic").css({width:"0",height:0});
            $(".showbigpic").append('<img src="Images/' + i + '.jpg" style="width:100%; height=100%;"/>').animate({width:"1000px",height:"800px"},1000);
        }else{
            $(".showbigpic").empty();
            $(".showbigpic").css({width:"0",height:0});
            $(".showbigpic").append('<img src="Images/' + 1 + '.jpg" style="width:100%; height=100%;"/>').animate({width:"1000px",height:"800px"},1000);
            i=1;
        }
    });
    $(".turnL").click(function () {
        i--;
        if(i<1){
            $(".showbigpic").empty();
            $(".showbigpic").css({width:"0",height:0});
            $(".showbigpic").append('<img src="Images/' + 6 + '.jpg" style="width:100%; height=100%;"/>').animate({width:"1000px",height:"800px"},1000);
            i=6;
        }else{
            $(".showbigpic").empty();
            $(".showbigpic").css({width:"0",height:0});
            $(".showbigpic").append('<img src="Images/' + i + '.jpg" style="width:100%; height=100%;"/>').animate({width:"1000px",height:"800px"},1000);
        }
    });

    //点击切换图标end


    //点击显示导航start
    //$(".navL").click(function(){
    //    $(document).animate({left:"100px"});
    //});

    //点击显示导航end
});

window.onload = function () {
    var ul = document.getElementById("pics");
    var lis = ul.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.background = "url(Images/" + (i + 1) + ".jpg) center center no-repeat";
        lis[i].style.backgroundSize = "cover";
    }
    var html=document.documentElement;
    var navL=document.getElementById("navL");
    var sidnav=document.getElementById("sidnav");
    navL.onclick=function() {
        if(html.offsetLeft===0){
            animate2(html, {marginLeft: "200"});
            animate2(sidnav, {Left: 0,opacity:1});
            sidnav.style.display="block";
        }else{
            animate2(html, {marginLeft: 0});
            animate2(sidnav, {Left: -141,opacity:0});
            sidnav.style.display="none";
        }
    }
};


