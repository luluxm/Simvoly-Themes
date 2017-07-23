

window.onload=function(){
    //配置单
    var configs = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
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
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        }//4
    ];
    var wrap=document.getElementById("wrap");
    var arrow=document.getElementById("arrow");
    var arrLeft=document.getElementById("arrLeft");
    var arrRight=document.getElementById("arrRight");
    var slide=document.getElementById("slide");
    var ul=slide.children[0];
    var lis=ul.children; //所有广告
    //1.箭头显示隐藏
    wrap.onmouseover=function(){
        animate(arrow,{opacity:1});
    };
    wrap.onmouseout=function(){
        animate(arrow,{opacity:0});
    }
    //2.让广告按着配置单到指定位置
    function assign(){
        for(var i=0; i<lis.length; i++){
            animate(lis[i],configs[i],function(){
                flage=true;
            });
        }
    }
    assign();
    //3.点击右箭头旋转
    arrRight.onclick=function(){
        if(flage){
            flage=false;
            configs.push(configs.shift());
            assign();
        }
    };
    arrLeft.onclick=function(){
        if(flage){
            flage=false;
            configs.unshift(configs.pop());
            assign();
        }
    };
    var flag=true;
}

$(function(){
    $(".w").mouseenter(function () {
        $(".h3>h3").stop().animate({
            left: "360px",
            opacity: 1
        })
    });

    $(".w").mouseenter(function () {
        $(".p>p").stop().animate({
            left: "520px",
            opacity: 1
        })
    });
})