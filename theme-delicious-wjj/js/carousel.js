/**
 * Created by jf on 2017/3/13.
 */

window.onload = function () {


    //旋转木马


    var configs = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2,
        },//0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 800,
            top: 100,
            left: 300,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 70,
            left: 700,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 850,
            opacity: 0.2,
            zIndex: 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //0.找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var slide = document.getElementById("slide");
    var ullis = document.getElementById("ullis");
    var lis = ullis.children;//所有的广告

    for (var i = 0; i < lis.length; i++) {

    }
    //1.鼠标经过 渐渐地显示箭头 鼠标离开 渐渐地隐藏箭头
    wrap.onmouseover = function () {
        //渐渐地显示箭头
        animate(arrow, {opacity: 0.5});
    };
    wrap.onmouseout = function () {
        //渐渐地显示箭头
        animate(arrow, {opacity: 0});
    };
    //2.让每一个广告 渐渐地 按照配置单 跑到各自的指定位置
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            //lis[i]//每一个广告
            animate(lis[i], configs[i], function () {
                flag = true;//动画执行完成后 再从新打开阀门
            });
        }
    }

    assign();
    //3.点击右箭头 让轮播图旋转
    arrRight.onclick = function () {
        if (flag) {//如果阀门是打开的 代码才可以执行
            flag = false;//把阀门关闭
            configs.push(configs.shift());
            assign();
        }
    };
    arrLeft.onclick = function () {
        //把配置单中的最后的放开头
        //arr.unshift(arr.pop());
        if (flag) {
            flag = false;
            configs.unshift(configs.pop());
            assign();
        }
    };
    //4.添加节流阀
    var flag = true;//阀门是打开的

    var timer = null;

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
                    obj.style.zIndex = config["zIndex"];
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

//导航
$(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".top-nav").css({
                backgroundColor: "rgba(0,0,0,0.5)",


            })
        }else{
            $(".top-nav").css({
                backgroundColor: "rgba(0,0,0,0)",

            })
        }
    });

})
