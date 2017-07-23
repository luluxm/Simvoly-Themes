/**
 * Created by hp on 2017/3/20.
 */
/*window.onload = function () {
 //var timer = null;
 ////0.找人
 //var box = document.getElementById("box");
 //var screen = box.children[0];
 ////var ul11 = screen.children[0];
 //var ul11 =document.getElementById("ul11");
 //var ulLis = ul11.children;//所有广告
 //var ol = screen.children[1];
 //var arr = document.getElementById("arr");
 //var left = document.getElementById("left");
 //var right = document.getElementById("right");
 //var imgWidth = screen.offsetWidth;
 //
 //
 ////1.动态生成结构
 ////1.1 创建按钮
 //for (var i = 0; i < ulLis.length; i++) {
 //    var li = document.createElement("li");
 //    li.innerHTML = i + 1;
 //    ol.appendChild(li);
 //}
 //var olLis = ol.children;//所有按钮
 //olLis[0].className = "current";
 ////1.2 克隆第一张图
 //var firstImg = ulLis[0].cloneNode(true);
 //ul11.appendChild(firstImg);
 //
 ////2.鼠标经过按钮
 //for (var i = 0; i < olLis.length; i++) {
 //    olLis[i].index = i;
 //    olLis[i].onmouseover = function () {
 //        //干掉所有人
 //        for (var i = 0; i < olLis.length; i++) {
 //            olLis[i].className = "";
 //        }
 //        //留下我自己
 //        this.className = "current";
 //        //移动ul
 //        //目标 和 当前按钮的索引有关 和 图片宽度有关 而且是负数
 //        var target = -this.index * imgWidth;
 //        animate(ul11, target);
 //
 //        //把pic和square和当前按钮的索引统一起来
 //        pic = square = this.index;
 //    };
 //}
 ////3.点击箭头
 ////经过box显示箭头 离开box隐藏箭头
 //box.onmouseover = function () {
 //    arr.style.display = "block";
 //    clearInterval(timer);
 //};
 //box.onmouseout = function () {
 //    arr.style.display = "none";
 //    timer = setInterval(playNext, 1000);
 //};
 //
 //var square = 0;//记录当前亮起的按钮的索引
 //var pic = 0;//记录当前正在显示的图片的索引
 //right.onclick = function () {
 //    playNext();
 //};
 //
 //function playNext() {
 //    //如果是最后一张图了 就要瞬间跳到开始位置
 //    if (pic === ulLis.length - 1) {
 //        ul11.style.left = 0 + "px";//瞬间跳到开始位置
 //        pic = 0;//索引也要归零
 //    }
 //    pic++;
 //    //目标 和 pic有关 和 图片宽度有关 而且负数
 //    var target = -pic * imgWidth;
 //    animate(ul11, target);
 //    //按钮也要跟着
 //    //如果小于最后一个按钮的索引才能加 否则就回到0
 //    if (square < olLis.length - 1) {
 //        square++;
 //    } else {
 //        square = 0;
 //    }
 //    //干掉所有人
 //    for (var i = 0; i < olLis.length; i++) {
 //        olLis[i].className = "";
 //    }
 //    olLis[square].className = "current";
 //}
 //
 //left.onclick = function () {
 //    //如果是第一张图了 就要瞬间跳到最后的位置
 //    if (pic === 0) {
 //        ul11.style.left = -(ulLis.length - 1) * imgWidth + "px";//瞬间跳到最后的位置
 //        pic = ulLis.length - 1;//索引也要到最后
 //    }
 //    pic--;
 //    //目标 和 pic有关 和 图片宽度有关 而且负数
 //    var target = -pic * imgWidth;
 //    animate(ul11, target);
 //
 //    //如果大于第一个按钮的索引才能减 否则就到最后
 //    if (square > 0) {
 //        square--;
 //    } else {
 //        square = olLis.length - 1;
 //    }
 //    //干掉所有人
 //    for (var i = 0; i < olLis.length; i++) {
 //        olLis[i].className = "";
 //    }
 //    olLis[square].className = "current";
 //};
 //
 ////自动滚动
 //timer = setInterval(playNext, 1000);
 //
 //
 //

 //var configs = [
 //    {
 //        width: 400,
 //        top: 20,
 //        left: 50,
 //        opacity: 0.2,
 //        zIndex: 2,
 //    },//0
 //    {
 //        width: 600,
 //        top: 70,
 //        left: 0,
 //        opacity: 0.8,
 //        zIndex: 3
 //    },//1
 //    {
 //        width: 800,
 //        top: 100,
 //        left: 200,
 //        opacity: 1,
 //        zIndex: 4
 //    },//2
 //    {
 //        width: 600,
 //        top: 70,
 //        left: 600,
 //        opacity: 0.8,
 //        zIndex: 3
 //    },//3
 //    {
 //        width: 400,
 //        top: 20,
 //        left: 750,
 //        opacity: 0.2,
 //        zIndex: 2
 //    }//4
 //];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
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
 var ul = slide.children[0];
 var lis = ul.children;//所有的广告

 for(var i=0;i<lis.length;i++){

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
 };*/

$(function () {

    $(".top-img").mouseenter(function () {
        $("#one").stop().animate({
            left: "44%",
            opacity: 1
        })
    });
    $(".top-img").mouseenter(function () {
        $(".top-img>h1").stop().animate({
            left: "25%",
            opacity: 1
        },1500)
    });
    $(".top-img").mouseenter(function () {
        $("#two").stop().animate({
            left: "40%",
            opacity: 1
        }, 2500)
    });

    $(".bigImg>.button>a").mouseenter(function () {
        $(this).stop().animate({
            width: "122px",
            height: "41px",
            lineHeight: "41px",
            fontSize: "20px"

        })
    });
    $(".bigImg>.button>a").mouseleave(function () {
        $(this).stop().animate({
            width: "102px",
            height: "21px",
            lineHeight: "21px",
            fontSize: "15px"

        })
    });
    $(".bigImg").mouseenter(function () {
        $(".bigImg>h1").slideDown("fast");
        $(".bigImg>p").slideDown("fast");
    });

});
