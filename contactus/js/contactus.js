/**
 * Created by we on 2017/3/19.
 */
window.onload = function () {

    //slide开关
    // 1 获取元素
    var iconfont = document.getElementById("iconfont");
    var gcontent = document.getElementById("gcontent");
    var slide = document.getElementById("slide");
    // 2 为btn设置点击事件
    var isClose = true;
    var scrollTop = scroll().top;
    iconfont.onclick = function () {
        if (isClose) {
            iconfont.innerHTML = "&#xe69a";
            slide.style.display = "block";
            animate(slide, {right: 0});
            animate(gcontent, {left: -260});
            isClose = false;
        } else {
            iconfont.innerHTML = "&#xe699";
            animate(slide, {right: -260},function () {
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
            header.style.backgroundColor = "rgba(255,255,255,0)";
            header.style.borderBottom = "none";
            // 换logo
            logo.src = "images/simvoly-logo-wh.png";
            // 换字体颜色
            for (var i = 0; i < titles.length; i++) {
                if (i !== 5) {
                    titles[i].style.color = "white";
                }
                $(function () {
                    if (i !== 5 && i !== 6) {
                        $(titles[i]).hover(function () {
                            $(this).css("borderColor", "white");
                        }, function () {
                            $(this).css("borderColor", "transparent");
                        })
                    }

                })
            }
            // 侧边栏绝对定位
            slide.style.position = "absolute";
        }
    };


    //团队成员部分 开始

    // 1 获取元素
    var yaotout = document.getElementById("yaotou");
    var yaotous = yaotout.children;
    var yaotou1 = yaotous[0];

    for (var i = 0; i < yaotous.length; i++) {
        // 2 为所有的yaotous追加不同背景
        yaotous[i].style.backgroundImage = "url('images/yaotou/yaotou1(" + (i + 1) + ").jpg')";
    }

    // 3 获取鼠标在页面上的坐标
    document.onmousemove = function (event) {
        var event = event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        for (var i = 0; i < yaotous.length; i++) {
            yaotou(yaotous[i]);
        }
        // 摇头的封装函数
        function yaotou(obj) {
            var x = (pageX - obj.offsetLeft - obj.offsetWidth / 2);
            var y = (pageY - obj.offsetTop - obj.offsetHeight / 2);
            var a = y / x;
            var deg = Math.atan(a) * 180 / Math.PI;
            // 水平 (0,0)
            if (x > 0 && deg < 15 && deg > -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = 0;
            }
            if (x < 0 && deg < 15 && deg > -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -6 * 190 + "px";
            }
            // 右上1 (0,-190*11)
            if (x > 0 && deg > -45 && deg < -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 11 + "px";
            }
            if (x < 0 && deg > -45 && deg < -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 5 + "px";
            }
            // 右上2 (0,-190*10)
            if (x > 0 && deg > -75 && deg < -45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 10 + "px";
            }
            if (x < 0 && deg > -75 && deg < -45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 4 + "px";
            }
            // 上 (0,-190*9)
            if (x > 0 && deg > -90 && deg < -75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 9 + "px";
            }
            if (x < 0 && deg > 75 && deg < 90) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 9 + "px";
            }
            // 左上2
            if (x < 0 && deg > 45 && deg < 75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 8 + "px";
            }
            if (x > 0 && deg > 45 && deg < 75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 2 + "px";
            }
            // 左上1
            if (x < 0 && deg > 15 && deg < 45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 7 + "px";
            }
            if (x > 0 && deg > 15 && deg < 45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 1 + "px";
            }
            // 下
            if (x > 0 && deg > 75 && deg < 90) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 3 + "px";
            }
            if (x < 0 && deg > -90 && deg < -75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 3 + "px";
            }
            //中
            if (x < 35 && x > -35 && y < 35 && y > -35) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 12 + "px";
            }
        };
    };

    // 团队成员结束
};