window.onload = function () {
    //无缝轮播图
    var timer = null;
    var wDiv = document.getElementsByClassName("wDiv")[0];
    var slider = wDiv.children[0];

    var picture = document.getElementById("picture");
    var pics = document.getElementsByClassName("pic");//小图
    var bigSlider = document.getElementById("bigSlider");
    var close = document.getElementById("close");
    var bigSliderContent = document.getElementById("bigSlider-content");//幕布
    //var spans = picture.getElementsByClassName("span");
    var bigSliderLeftArrow = document.getElementsByClassName("bigSlider-leftarrow")[0];//左箭头
    var bigSliderRightArrow = document.getElementsByClassName("bigSlider-rightarrow")[0];//右箭头

    //小图对应大图
    for (var i = 0; i < pics.length; i++) {
        pics[i].index = i;
        //console.log(pics[i].index);
        pics[i].onmouseover = function () {
            //alert(this.index);
            var idx = this.index;
            this.getElementsByTagName("span")[0].style.display = "block";
            this.getElementsByTagName("div")[0].style.display = "block";

            //点击zoom显示当前大图
            this.getElementsByTagName("span")[0].onclick = function () {
                var idx1 = idx + 1;
                bigSlider.style.display = "block";
                bigSliderContent.style.background = "url(images/slider-" + idx1 + ".jpg) center center no-repeat";

                //箭头点击事件
                bigSliderLeftArrow.onclick = function () {

                    if (idx1 === 1) {
                        bigSliderContent.style.background = "url(images/slider-1.jpg) center center no-repeat";
                    } else {
                        idx1--;
                        bigSliderContent.style.background = "url(images/slider-" + idx1 + ".jpg) center center no-repeat";
                    }
                };

                bigSliderRightArrow.onclick = function () {

                    if (idx1 === pics.length) {
                        bigSliderContent.style.background = "url(images/slider-" + pics.length + ".jpg) center center no-repeat";
                    } else {
                        idx1++;
                        bigSliderContent.style.background = "url(images/slider-" + idx1 + ".jpg) center center no-repeat";
                    }
                };
            }

            //点击叉号隐藏当前主题
            close.onclick = function () {
                bigSlider.style.display = "none";
            };
        };

        pics[i].onmouseout = function () {
            this.getElementsByTagName("span")[0].style.display = "none";
            this.getElementsByTagName("div")[0].style.display = "none";
        };


    }


    /**
     * 轮播图
     */
    wDiv.onmouseover = function () {
        clearInterval(timer);
    };
    wDiv.onmouseout = function () {
        timer = setInterval(play, 15);
    };

    //让ul自动播放
    timer = setInterval(play, 15);

    function play() {
        //leader = leader + step
        var leader = slider.offsetLeft;
        var step = -2;
        if (leader > -2200) {
            leader = leader + step;
            slider.style.left = leader + "px";
        } else {
            slider.style.left = 0 + "px";
        }
    }

    /**
     * 新产品价格 遮罩 渐变
     */
    var proitems = document.getElementsByClassName("pro-item");
    var prices = document.getElementsByClassName("price");
    var newproShades = document.getElementsByClassName("newproShade");

    for (var i = 0; i < proitems.length; i++) {
        proitems[i].index = i;
        proitems[i].onmouseover = function () {
            var idx = this.index;
            animate(newproShades[idx], {opacity: 1});
            animate(prices[idx], {
                opacity: 1,
                bottom: 90
            });
        };
        proitems[i].onmouseout = function () {
            var idx = this.index;
            animate(newproShades[idx], {opacity: 0});
            animate(prices[idx], {
                opacity: 0,
                bottom: 0
            });
        };
    }
    /**
     * 小火箭
     *
     */

    var backTop = document.getElementById("backTop");

    window.onscroll = function () {
        backTop.style.display = scroll().top > 0 ? "block" : "none";
    };

    backTop.onclick = function () {
        timer = setInterval(function () {
            //leader = leader + step
            var target = 0;
            var leader = scroll().top;
            var step = (target - leader) / 10;
            leader = leader + step;
            window.scrollTo(0, leader);
            if (leader === target) {
                clearInterval(timer);
            }
        }, 15);
    };
}

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


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
    }, 15);
}


function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }

};




