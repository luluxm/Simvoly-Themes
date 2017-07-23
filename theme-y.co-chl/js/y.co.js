window.onload = function () {
    var pictures = document.getElementsByClassName("picture");
    var pic = document.getElementsByClassName("pic");
    var showContents = document.getElementsByClassName("showContent");
    var shades = document.getElementsByClassName("shade");
    var timer = null;
    //动态添加背景图
    for (var i = 0; i < pictures.length; i++) {
        pictures[i].index = i;
        //pictures[i].style.background = "url(images/scope-" + (i + 1) + ".jpeg) center center no-repeat";
        pic[i].style.background = "url(images/scope-" + (i + 1) + ".jpeg) center center no-repeat";

        pictures[i].onmouseover = function () {
            var idx = this.index;
            //showContents[idx].style.display = "none";
            //shades[idx].style.display = "block";
            animate(shades[idx],{opacity:1});
            animate(showContents[idx],{opacity:0});
        };
        pictures[i].onmouseout = function () {
            var idx = this.index;
            //showContents[idx].style.display = "block";
            //shades[idx].style.display = "none";
            animate(shades[idx],{opacity:0});
            animate(showContents[idx],{opacity:1});
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