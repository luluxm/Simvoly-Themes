/**
 * Created by Administrator on 2017/3/19.
 */

window.onload = function () {
    //slide����
    // 1 ��ȡԪ��
    var iconfont = document.getElementById("iconfont");
    var gcontent = document.getElementById("gcontent");
    //var html = document.getElementById("html");
    var slide = document.getElementById("slide");
    // 2 Ϊbtn���õ���¼�
    var isClose = true;
    iconfont.onclick = function () {
        if (isClose) {
            iconfont.innerHTML = "&#xe69a";
            slide.style.display = "block";
            animate(slide, {right: 0});
            animate(gcontent, {left: -260});
            isClose = false;
        } else {
            iconfont.innerHTML = "&#xe699";
            animate(slide, {right: -260}, function () {
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

}