/**
 * Created by Administrator on 2017/3/18.
 */
window.onload = function () {

    //slide开关
    // 1 获取元素
    var iconfont = document.getElementById("iconfont");
    var gcontent = document.getElementById("gcontent");
    //var html = document.getElementById("html");
    var slide = document.getElementById("slide");
    // 2 为btn设置点击事件
    var isClose = true;
    iconfont.onclick = function () {
        if (isClose) {
            iconfont.innerHTML = "&#xe69a";
            slide.style.display = "block";
            animate(slide, {right: 0});
            animate(gcontent, {left: -260});
            isClose = false;
        } else {
            iconfont.innerHTML = "&#xe699";
            animate(slide, {right: -260}, function () {
                slide.style.display = "none";
            });
            animate(gcontent, {left: 0});
            isClose = true;
        }
    };

    // 导航固定定位
    // 需求 : 当页面被卷去头部的高度大于header高度时,变成固定定位
    // 1 获取元素
    var header = document.getElementById("header");
    var logo = document.getElementById("logo");
    var headertitle = document.getElementById("headertitle");
    var titles = headertitle.getElementsByTagName("a");
    var main = document.getElementById("main");
    // 2 窗体设置滚动事件
    window.onscroll = function () {
        // 3 判断页面被卷去的高度
        if (scroll().top > 0) {
            //animate(header, {backgroundColor: white});
            header.style.backgroundColor = "rgba(255,255,255,0.9)";
            header.style.borderBottom = "1px solid #e4e2e2";
            // 换logo
            logo.src = "images/logo.png";
            // 换字体颜色
            for (var i = 0; i < titles.length; i++) {
                if (i !== 5) {
                    titles[i].style.color = "#1a1a1a";
                }
                $(function () {
                    if (i !== 5 && i !== 6) {
                        $(titles[i]).hover(function () {
                            $(this).css("borderColor", "#1a1a1a");
                        }, function () {
                            $(this).css("borderColor", "transparent");
                        })
                    }

                })
            }
            // 侧边栏固定定位
            slide.style.position = "fixed";
        } else {
            header.style.backgroundColor = "rgba(255,255,255,1)";
            header.style.borderBottom = "none";
            // 侧边栏绝对定位
            slide.style.position = "absolute";
        }
    };

    //主体部分轮播图
//鼠标经过每个span 当前span改变背景颜色  并且显示对应的图片
    $(function () {
        var bg = "";
        $(".bullets>span").mouseenter(function () {
            $(this).css("backgroundColor");
            $(this).css("backgroundColor", "#4eb3ea").siblings().css("backgroundColor", bg)
            var index = $(this).index();
            $(".screen>ul>li").eq(index).fadeIn("5000").siblings().fadeOut("5000");

        });
        $(".bullets").mouseleave(function () {
            $(this).css("backgroundColor", bg);
        });

        //定时切换 未完待续
        var settime = window.setInterval(
            function () {

            }, 5000);
        $(".screen>ul>li").mouseenter(function () {
            clearInterval(settime);
        });
        $(".screen>ul>li").mouseleave(function () {
            settime = window.setInterval(auto, 5000);
        });


    });
}












