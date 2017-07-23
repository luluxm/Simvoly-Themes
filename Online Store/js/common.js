/**
 * Created by jf on 2017/3/3.
 */

/**
 * 获取元素内部文本的兼容函数
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (element.innerText === undefined) {//说明不支持innerText
        return element.textContent;
    } else {
        return element.innerText;
    }
}

/**
 * 设置元素内部文本的兼容函数
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (element.innerText === undefined) {//说明不支持innerText
        element.textContent = content;
    } else {
        element.innerText = content;
    }
}

/**设置找到下一个兄弟元素的兼容函数
 * @param element
 */

function getNextSiling(element) {
    //如果支持，那么就直接返回值就好
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = next.nextSibling;
        //直到找到兄弟元素停止
        while (next && 1 !== next.nextSibling.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**设置找到上一个兄弟元素的兼容函数
 * @param element
 */

function getPreviousSiling(element) {
    //如果支持，那么就直接返回值就好
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var pre = next.previousSibling;
        //直到找到兄弟元素停止
        while (pre && 1 !== next.previousSibling.nodeType) {
            pre = pre.previousSibling;
        }
        return pre;
    }
}

/** 设置找到第一个子元素的兼容函数
 * @param element
 */

function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //利用没有兼容问题的firstChild
        var first = element.firstChild;
        while (first && 1 !== first.nodeType) {
            first = element.firstChild;
        }
        return first;
    }
}

/** 设置找到最后一个子元素的兼容函数
 * @param element
 */

function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        //利用没有兼容问题的previousSibling 及lastChild
        var last = element.lastChild;
        while (last && 1 !== last.nodeType) {
            last = element.previousSibling;
        }
        return last;
    }
    //return element.children[element.children.length-1];//ie678中也会把注释获取
}


/** 替换类名的方法
 *  @param element
 *  @param oldStr
 *  @param newStr
 */

function replaceClassName(element, oldStr, newStr) {
    // 1 通过空字符串对类名进行切分
    var names = element.className.split(" ");
    // 2 遍历类名数组 把每一个类名和我要找的类名 做全等比较 如果有就替换
    for (var i = 0; i < names.length; i++) {
        //names[i]//每一个类名
        if (names[i] === oldStr) {//完全相等才替换
            names[i] = newStr;
        }
    }
    // 3 通过join方法把替换好的数组拼接成带有空格的字符串
    element.className = names.join(" ");//注意:用空格进行拼接
}


/** 通过类名取对象
 * @param element
 * @param className
 */

function getElementsByClassName(element, className) {
    // 1 定义一个过滤数组接收符合要求的对象
    var filterArr = [];
    // 2 通过没有兼容问题的tagname取出所有对象
    var elements = document.getElementsByTagName("*");
    // 3 遍历数组,取出类名
    for (var i = 0; i < elements.length; i++) {
        // 4 对类名进行切割 用新的变量进行接收
        var names = elements[i].className.split(" ");
        // 5 并对要求的className进行全等判断
        for (var i = 0; i < names.length; i++) {
            if (names[i] === className) {
                filterArr.push(elements[i]);//把当前元素放到数组中
            }
        }
    }
}

/**封装 获取页面被卷去的头部的高度和 被卷去的左侧的宽度的 兼容函数
 * 调用时,直接用scroll().top或者scroll().left
 */

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**封装获取窗口宽度和高度的兼容函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 * 调用时,直接用client().width或者client().height
 */

function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}


/** 缓动函数封装
 * @param obj
 * @param config{属性名:属性值,属性名:属性值,...}
 * @param fn
 */

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


/** 封装获取计算后样式属性值的兼容函数
 * @param obj
 * @param attr
 * @returns {*}
 */

function getStyle(obj, attr) {
    if (window.getComputedStyle(obj)[attr]) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
};


//事件专题  eventUtil
// 1 注册事件的兼容处理 .addEvent
// 2 移除事件的兼容处理 .removeEvent
// 3 获取事件对象的兼容函数 .getEvent
// 4 获取鼠标在页面水平位置的兼容函数 .getPageX
// 5 获取鼠标在页面垂直水平位置的兼容函数 .getPageY
// 6 获取事件目标的兼容函数 .getTarget
// 7 阻止冒泡的兼容函数 .stopBubble

var eventUtil = {

    /** 1 注册事件的兼容处理
     * @param element
     * @param eventType
     * @param listener
     */
    addEvent: function (element, eventType, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventType, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventType, listener);
        } else {
            element["on" + eventType] = listener;
        }
    },

    /** 2 移除事件的兼容处理
     * @param element
     * @param eventType
     * @param listener
     */
    removeEvent: function (element, eventType, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventType, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventType, listener);
        } else {
            element["on" + eventType] = null;
        }
    },

    /** 3 获取事件对象的兼容函数
     * @param event
     * @returns {*|Event}
     */
    getEvent: function (event) {
        return event || window.event;
    },

    /** 4 获取鼠标在页面水平位置的兼容函数
     * @param event
     * @returns {Number|*}
     */
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },

    /** 5 获取鼠标在页面垂直水平位置的兼容函数
     * @param event
     * @returns {Number|*}
     */
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },

    /** 6 获取事件目标的兼容函数
     * @param event
     * @returns {EventTarget|string|*|Node|Object}
     */
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    /** 7 阻止冒泡的兼容函数
     * @param event
     */
    stopBubble: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};

/**对字符串的修剪
 * @param str
 * @returns {string|void|XML}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
};
