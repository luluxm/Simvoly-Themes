/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function(){
    //找人
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ullis = ul.children;
    var arr = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var imgWidth = screen.offsetWidth;
    var timer = null;
    // 1.动态创建结构
    //1.1根据实际有用的图片创建小按钮
    for (var i = 0; i < ullis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
        //获取ol中的按钮列表
        var ollis = ol.children;
        ollis[0].className = "current";
    }

    //2.给每一个li设置鼠标经过事件
    //2.1  给li设置图片切换
    for (var i = 0; i < ollis.length; i++) {
        //设置自定义属性  索引值
        ollis[i].index = i;
        ollis[i].onmouseover = function () {
            //7.如何解决鼠标放在最后一张图片上，点击第一张图从最后一张倒退到第一张的情况bug
            //在鼠标经过事件判断如果当前破防的是最后一张图并且鼠标指示在第一张的位置
            /*if (pic === ullis.length - 1 && this.index === 0) {
             ul.style.left = 0;
             }*/
            for (var i = 0; i < ollis.length; i++) {
                ollis[i].className = "";
            }
            this.className = "current";
            //当鼠标经过这个按钮时，调用动画函数
            //目标  和图片宽度  以及当前 按钮的索引有关 并且是负值
            var target = -this.index * imgWidth;
            animate(ul, target);
            //6.3当鼠标经过当前按钮时  需要记录当前鼠标经过按钮的索引值  与pic 和square对应
            //pic = this.index;
            //square = this.index;
            pic = square = this.index;
        };
    }
    //1.2克隆最后一张假图片  添加到ul中去
    var firstImg = ullis[0].cloneNode(true);
    ul.appendChild(firstImg);

    //2.2设置左右按钮的显示和隐藏
    //5.1 让鼠标经过box  图片禁止自动播放
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    //5.2  鼠标离开box  图片自动播放
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 1000);
    };

    //3.给左右按钮设置点击事件  点击按钮  切换图片
    //首先要知道当前显示的是哪张图片，然后点击鼠标右键往后加
    //因此需要一个变量来记录当前图片的编号

    var pic = 0;//当前播放的是第一张，点击就要播放第二张
    var square = 0;//用来记录当前按钮亮起的索引
    right.onclick = function () {
        playNext();
    };

    function playNext() {
        //但是 如果移动到了最后一张  我们就不应该再让ul移动了 （为了做出无缝连接的效果 当图片的索引小于最后一张图的索引时  就是需要判断的时候）
        if (pic === ullis.length - 1) {
            ul.style.left = 0;
            pic = 0;//让pic重新开始计数
        }
        pic++;
        //  pic++;//点击就要播放第二张 因此++
        var target = -pic * imgWidth;  //ul向左移  因此为负值
        animate(ul, target);
        //6 点击右箭头后 不仅变换图片 当前的按钮也要亮起 （排他）

        //小按钮  不能一直加  要判断一下
        if (square < ollis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //排他
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";
    }


    //左箭头点击事件
    left.onclick = function () {
        //但是 如果移动到了第一张  我们就不应该再让ul移动了 （为了做出无缝连接的效果 当图片的索引等于第一张图的索引时  就是需要判断的时候）
        if (pic === 0) {
            ul.style.left = -(ullis.length - 1) * imgWidth + "px";
            pic = ullis.length - 1;//让pic从最后一个图（假图）开始计数
        }
        pic--;
//  pic++;//点击就要播放第二张 因此--
        var target = -pic * imgWidth;//ul向左移  因此为负值
        animate(ul, target);

        //6.2点击左箭头之后 除了要播放下一张广告 对应的按钮也要亮起

        //如果 当前按钮的索引 大于 最开始的按钮的索引 就减小
        //否则 就应该跑到最后
        if (square > 0) {
            square--;
        } else {
            square = ollis.length - 1;
        }
        //干掉所有人
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        //留下算出来的
        ollis[square].className = "current";
    };

    //4. 自动播放  设置定时器  实际上就是让右击事件一直进行
    timer = setInterval(playNext, 1000);

    //7.如何解决鼠标放在最后一张图片上，点击第一张图从最后一张倒退到第一张的情况bug
    //在鼠标经过事件判断如果当前破防的是最后一张图并且鼠标指示在第一张的位置

}