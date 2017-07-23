/**
 * Created by we on 2017/3/19.
 */
window.onload = function () {

    //slide����
    // 1 ��ȡԪ��
    var iconfont = document.getElementById("iconfont");
    var gcontent = document.getElementById("gcontent");
    var slide = document.getElementById("slide");
    // 2 Ϊbtn���õ���¼�
    var isClose = true;
    var scrollTop = scroll().top;
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

    // �����̶���λ
    // ���� : ��ҳ�汻��ȥͷ���ĸ߶ȴ���header�߶�ʱ,��ɹ̶���λ
    // 1 ��ȡԪ��
    var header = document.getElementById("header");
    var logo = document.getElementById("logo");
    var headertitle = document.getElementById("headertitle");
    var titles = headertitle.getElementsByTagName("a");
    var main = document.getElementById("main");
    // 2 �������ù����¼�
    window.onscroll = function () {
        // 3 �ж�ҳ�汻��ȥ�ĸ߶�
        if (scroll().top > 0) {
            //animate(header, {backgroundColor: white});
            header.style.backgroundColor = "rgba(255,255,255,0.9)";
            header.style.borderBottom = "1px solid #e4e2e2";
            // ��logo
            logo.src = "images/logo.png";
            // ��������ɫ
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
            // ������̶���λ
            slide.style.position = "fixed";
        } else {
            header.style.backgroundColor = "rgba(255,255,255,0)";
            header.style.borderBottom = "none";
            // ��logo
            logo.src = "images/simvoly-logo-wh.png";
            // ��������ɫ
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
            // ��������Զ�λ
            slide.style.position = "absolute";
        }
    };


    //�Ŷӳ�Ա���� ��ʼ

    // 1 ��ȡԪ��
    var yaotout = document.getElementById("yaotou");
    var yaotous = yaotout.children;
    var yaotou1 = yaotous[0];

    for (var i = 0; i < yaotous.length; i++) {
        // 2 Ϊ���е�yaotous׷�Ӳ�ͬ����
        yaotous[i].style.backgroundImage = "url('images/yaotou/yaotou1(" + (i + 1) + ").jpg')";
    }

    // 3 ��ȡ�����ҳ���ϵ�����
    document.onmousemove = function (event) {
        var event = event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        for (var i = 0; i < yaotous.length; i++) {
            yaotou(yaotous[i]);
        }
        // ҡͷ�ķ�װ����
        function yaotou(obj) {
            var x = (pageX - obj.offsetLeft - obj.offsetWidth / 2);
            var y = (pageY - obj.offsetTop - obj.offsetHeight / 2);
            var a = y / x;
            var deg = Math.atan(a) * 180 / Math.PI;
            // ˮƽ (0,0)
            if (x > 0 && deg < 15 && deg > -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = 0;
            }
            if (x < 0 && deg < 15 && deg > -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -6 * 190 + "px";
            }
            // ����1 (0,-190*11)
            if (x > 0 && deg > -45 && deg < -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 11 + "px";
            }
            if (x < 0 && deg > -45 && deg < -15) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 5 + "px";
            }
            // ����2 (0,-190*10)
            if (x > 0 && deg > -75 && deg < -45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 10 + "px";
            }
            if (x < 0 && deg > -75 && deg < -45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 4 + "px";
            }
            // �� (0,-190*9)
            if (x > 0 && deg > -90 && deg < -75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 9 + "px";
            }
            if (x < 0 && deg > 75 && deg < 90) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 9 + "px";
            }
            // ����2
            if (x < 0 && deg > 45 && deg < 75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 8 + "px";
            }
            if (x > 0 && deg > 45 && deg < 75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 2 + "px";
            }
            // ����1
            if (x < 0 && deg > 15 && deg < 45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 7 + "px";
            }
            if (x > 0 && deg > 15 && deg < 45) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 1 + "px";
            }
            // ��
            if (x > 0 && deg > 75 && deg < 90) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 3 + "px";
            }
            if (x < 0 && deg > -90 && deg < -75) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 3 + "px";
            }
            //��
            if (x < 35 && x > -35 && y < 35 && y > -35) {
                obj.style.backgroundPositionX = 0;
                obj.style.backgroundPositionY = -190 * 12 + "px";
            }
        };
    };

    // �Ŷӳ�Ա����
};