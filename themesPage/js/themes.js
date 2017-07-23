/**
 * Created by lenovo on 2017/3/17.
 */
window.onload = function () {
    //slide开关
    // 1 获取元素
    var iconfont = document.getElementById("iconfont");
    var gcontent = document.getElementById("gcontent");
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

//小模板start
    var sections = document.getElementsByClassName("section");
    var overlaycontents = document.getElementsByClassName("overlay-content");
    var closebtns = document.getElementsByClassName("close-btn");
    //var littleTheme = document.getElementsByClassName("little-theme")[0];
    //var spans = littleTheme.getElementsByClassName("span");
    var loadings = document.getElementsByClassName("loading");
    var dTimer = null;
    for (var i = 0; i < sections.length; i++) {
        sections[i].index = i;

        //鼠标经过显示遮罩和view
        sections[i].onmouseover = function () {
            var idx = this.index;
            this.getElementsByTagName("span")[0].style.display = "block";
            this.getElementsByTagName("span")[0].style.zIndex = "1";
            //this.getElementsByTagName("div")[0].style.display = "block";
            animate(this.getElementsByTagName("div")[0],{opacity:1});

            //点击view显示当前主题
            this.getElementsByTagName("span")[0].onclick = function () {
                //console.log(idx);
                overlaycontents[idx].style.display = "block";
                //载入动画
                //animate(loadings[idx],{opacity:0});
                timer = setTimeout(function(){
                    loadings[idx].style.display = "none";
                },3000);
                //clearTimeout(timer);

            };
            //点击叉号隐藏当前主题
            closebtns[idx].onclick = function () {
                overlaycontents[idx].style.display = "none";
            };
        };

        //鼠标经过隐藏遮罩和view
        sections[i].onmouseout = function () {
            this.getElementsByTagName("span")[0].style.display = "none";
            //this.getElementsByTagName("div")[0].style.display = "none";
            animate(this.getElementsByTagName("div")[0],{opacity:0});
        };
    }
//小模板end

    //封装缓动函数
    //改变任意对象的任意属性到任意的目标值
    function animate(obj, config, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in config) {
                if (k === "opacity") {
                    var target = config[k] * 100;
                    var leader = getStyle(obj, k) * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = config["zIndex"];//直接设置层级
                } else {
                    var target = config[k];
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 12);
    }


    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

};
