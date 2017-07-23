/**
 * Created by Administrator on 2017/3/18.
 */
window.onload=function(){


//slide开关
// 1 获取元素
var iconfont = document.getElementById("iconfont");
var gcontent = document.getElementById("gcontent");
var slide = document.getElementById("slide");
// 2 为btn设置点击事件
var isClose = true;
iconfont.onclick = function () {
    //
    if (isClose) {
        iconfont.innerHTML = "&#xe69a";
        slide.style.display = "block";
        animate1(slide, {right: 0});
        animate1(gcontent, {left: -260});
        isClose = false;
    } else {
        iconfont.innerHTML = "&#xe699";
        slide.style.display = "none";
        animate1(slide, {right: -260});
        animate1(gcontent, {left: 0});
        isClose = true;
    }
}



    // 导航固定定位
// 需求 : 当页面被卷去头部的高度大于header高度时,变成固定定位
// 1 获取元素
    var header = document.getElementById("header");
    var main = document.getElementById("main");
    var banner=document.getElementById("banner");
// 2 窗体设置滚动事件
    window.onscroll = function () {
        // 3 判断页面被卷去的高度
        if (scroll().top > 0) {
            header.className = "headerfixed";
            header.style.zIndex = 100;
            banner.style.marginTop = 0 + "px";
            header.style.backgroundColor="rgba(255,255,255,0.9)";
            header.style.borderBottom="1px solide #1c1c1c";
        } else {
            header.className = "";
            main.style.marginTop = 0;
            header.style.backgroundColor="rgba(255,255,255,1)";
            header.style.borderBottom="none";
        }
    };

    // 轮播图
    //var timer=null;
    var grid=document.getElementById("grid");
    var cont=document.getElementById("cont");
    var ul=cont.children[0];
    var ulLis=ul.children;//所有广告
    var ol=cont.children[1];
    var imgWidth=cont.offsetWidth//图片宽度
    //1.动态生成结构
    //1.1动态生成按钮
    for(var i=0; i<ulLis.length; i++){
        var li=document.createElement("li");
        li.innerHTML=i+1;
        ol.appendChild(li);
    }
    var olLis=ol.children;//所有按钮
    //最开始按钮加高亮
    olLis[0].className="current";
    //1.2根据第一张图片 生成最后一张（假的第一张）
    var firstImg=ulLis[0].cloneNode(true);
    //追加
    ul.appendChild(firstImg);

    //2.鼠标经过按钮
    for(var i=0; i<olLis.length; i++){
        olLis[i].index=i;
        olLis[i].onmouseover=function(){
            for(var i=0; i<olLis.length; i++){
                olLis[i].className="";
            }
            this.className="current";
            var target=-this.index*imgWidth;
            animate(ul,target);
        }
    }


    var square = 0;//用来记录当前亮起的按钮的索引
    var pic = 0;//用来记录当前显示的图片的索引
    function playNext(){
        if(pic===ulLis.length-1){
            ul.style.left=0;
            pic=0;
        }
        pic++;
        var target=-pic*imgWidth;
        animate(ul,target);

        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }

        for(var i=0; i<olLis.length; i++){
            olLis[i].className="";
        }
        olLis[square].className="current";
    }


    setInterval(playNext,4000);
}








////主体部分轮播图
////鼠标经过每个span 当前span改变背景颜色  并且显示对应的图片
//$(function () {
//    var bg = "";
//    $(".cont>span").mouseenter(function () {
//        $(this).css("backgroundColor");
//        $(this).css("backgroundColor", "#4eb3ea").siblings().css("backgroundColor", bg)
//        var index = $(this).index();
//        $(".cont>ul>li").eq(index).show("5000").siblings().hide("5000");
//
//    });
//    $(".bullets").mouseleave(function () {
//        $(this).css("backgroundColor", bg);
//    });
//
//});

function animate1(obj, config, fn) {
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