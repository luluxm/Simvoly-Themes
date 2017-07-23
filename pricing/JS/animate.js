/**
 * Created by 谷守帅 on 2017/3/10.
 */
/**
 * 匀速动画
 * @param obj
 * @param target
 */
function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}

/**
 * 缓动动画
 * @param obj
 * @param config
 */
function animate2(obj,config,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var k in config){//k就是属性 config[k]是属性值
            if(k==="opacity"){
                var target=config[k]*100;
                var leader=getStyle(obj,k)*100;
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader/100;
            }else if(k==="zIndex"){
                obj.style.zIndex=config[k];
            } else{
                var target=config[k];
                var leader=parseInt(getStyle(obj,k)) || 0 ;
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader+"px";
            }
            if(leader!==target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },15)
}
/**
 * 生效后的样式
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

/**
 * 获取页面滚动坐标，卷去的宽高
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return {
        top:window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop || 0,
        left:window.pageXOffset ||document.documentElement.scrollLeft ||document.body.scrollLeft || 0
    };
}

/**
 * 获取窗口宽高
 * @returns {{height: (Number|number), width: (Number|number)}}
 */
function client(){
    return {
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0
    };
}