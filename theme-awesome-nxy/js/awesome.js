/**
 * Created by Administrator on 2017/3/20.
 */

window.onload=function(){


//���Ի����Ч��ʵ��
    var com=document.getElementById("comput");
    var nav=document.getElementById("nav");
    window.onscroll = function () {
        if (scroll().top > 50) {
            //com.className = "comput-con";
           animate(com,{left:220})
        }
    };

   /* //СͼƬ��ʾЧ��
    var is=document.getElementsByTagName("i");
    for(var j=0;j<is.length;j++){
        is[j].style.backgroundImage="url(../images/icon"+(j+1)+".png)";

    }*/

//�ֲ�Ч��ͼ
    //����
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ullis = ul.children;
    var arrow = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var imgWidth = screen.offsetWidth;
    var timer = null;
    // 1.��̬�����ṹ
    //1.1����ʵ�����õ�ͼƬ����С��ť
    for (var i = 0; i < ullis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
        //��ȡol�еİ�ť�б�
        var ollis = ol.children;
        ollis[0].className = "current";
    }

    //2.��ÿһ��li������꾭���¼�
    //2.1  ��li����ͼƬ�л�
    for (var i = 0; i < ollis.length; i++) {
        //�����Զ�������  ����ֵ
        ollis[i].index = i;
        ollis[i].onmouseover = function () {
            //7.��ν�����������һ��ͼƬ�ϣ������һ��ͼ�����һ�ŵ��˵���һ�ŵ����bug
            //����꾭���¼��ж������ǰ�Ʒ��������һ��ͼ�������ָʾ�ڵ�һ�ŵ�λ��
            /*if (pic === ullis.length - 1 && this.index === 0) {
             ul.style.left = 0;
             }*/
            for (var i = 0; i < ollis.length; i++) {
                ollis[i].className = "";
            }
            this.className = "current";
            //����꾭�������ťʱ�����ö�������
            //Ŀ��  ��ͼƬ���  �Լ���ǰ ��ť�������й� �����Ǹ�ֵ
            var target = -this.index * imgWidth;
            animate(ul,{left:target});
            //6.3����꾭����ǰ��ťʱ  ��Ҫ��¼��ǰ��꾭����ť������ֵ  ��pic ��square��Ӧ
            //pic = this.index;
            //square = this.index;
            pic = square = this.index;
        };
    }
    //1.2��¡���һ�ż�ͼƬ  ��ӵ�ul��ȥ
    var firstImg = ullis[0].cloneNode(true);
    ul.appendChild(firstImg);

    //2.2�������Ұ�ť����ʾ������
    //5.1 ����꾭��box  ͼƬ��ֹ�Զ�����
    //��꾭��wraP�ü�ͷ��ʾ
    box.onmouseover=function(){
        animate(arrow,{opacity:1});
        clearInterval(timer);
    };
    //����뿪�ü�ͷ����������
    box.onmouseout=function(){
        animate(arrow,{opacity:0});
        timer = setInterval(playNext, 1000);
    };
    /*box.onmouseover = function () {
        arr.style.display = "block";

    };
    //5.2  ����뿪box  ͼƬ�Զ�����
    box.onmouseout = function () {
        arr.style.display = "none";

    };*/

    //3.�����Ұ�ť���õ���¼�  �����ť  �л�ͼƬ
    //����Ҫ֪����ǰ��ʾ��������ͼƬ��Ȼ��������Ҽ������
    //�����Ҫһ����������¼��ǰͼƬ�ı��

    var pic = 0;//��ǰ���ŵ��ǵ�һ�ţ������Ҫ���ŵڶ���
    var square = 0;//������¼��ǰ��ť���������
    right.onclick = function () {
        playNext();
    };

    function playNext() {
        //���� ����ƶ��������һ��  ���ǾͲ�Ӧ������ul�ƶ��� ��Ϊ�������޷����ӵ�Ч�� ��ͼƬ������С�����һ��ͼ������ʱ  ������Ҫ�жϵ�ʱ��
        if (pic === ullis.length - 1) {
            ul.style.left = 0;
            pic = 0;//��pic���¿�ʼ����
        }
        pic++;
        //  pic++;//�����Ҫ���ŵڶ��� ���++
        var target = -pic * imgWidth;  //ul������  ���Ϊ��ֵ
        animate(ul,{left:target});
        //6 ����Ҽ�ͷ�� �����任ͼƬ ��ǰ�İ�ťҲҪ���� ��������

        //С��ť  ����һֱ��  Ҫ�ж�һ��
        if (square < ollis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //����
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        ollis[square].className = "current";
    }


    //���ͷ����¼�
    left.onclick = function () {
        //���� ����ƶ����˵�һ��  ���ǾͲ�Ӧ������ul�ƶ��� ��Ϊ�������޷����ӵ�Ч�� ��ͼƬ���������ڵ�һ��ͼ������ʱ  ������Ҫ�жϵ�ʱ��
        if (pic === 0) {
            ul.style.left = -(ullis.length - 1) * imgWidth + "px";
            pic = ullis.length - 1;//��pic�����һ��ͼ����ͼ����ʼ����
        }
        pic--;
//  pic++;//�����Ҫ���ŵڶ��� ���--
        var target = -pic * imgWidth;//ul������  ���Ϊ��ֵ
        animate(ul,{left:target});

        //6.2������ͷ֮�� ����Ҫ������һ�Ź�� ��Ӧ�İ�ťҲҪ����

        //��� ��ǰ��ť������ ���� �ʼ�İ�ť������ �ͼ�С
        //���� ��Ӧ���ܵ����
        if (square > 0) {
            square--;
        } else {
            square = ollis.length - 1;
        }
        //�ɵ�������
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = "";
        }
        //�����������
        ollis[square].className = "current";
    };

    //4. �Զ�����  ���ö�ʱ��  ʵ���Ͼ������һ��¼�һֱ����
    timer = setInterval(playNext, 1000);

    //7.��ν�����������һ��ͼƬ�ϣ������һ��ͼ�����һ�ŵ��˵���һ�ŵ����bug
    //����꾭���¼��ж������ǰ�Ʒ��������һ��ͼ�������ָʾ�ڵ�һ�ŵ�λ��



//ͼƬ���޵���




//����������
    var us=document.getElementById("us");
    console.log(us);
    var messages=[
        {"id": 1, "name": "HailiangChen", "position": "Designer","email":"john@domain.com","url":"images/t1.png"},
        {"id": 2, "name": "JianjiaoWang", "position": "Designer","email":"jo126hn@domain.com","url":"images/t4.png"},
        {"id": 3, "name": "JingLu", "position": "Designer","email":"tom-334@domain.com","url":"images/t2.png"},
        {"id": 4, "name": "MengWang", "position": "Designer","email":"john@domain.com","url":"images/t3.png"},
        {"id": 5, "name": "ShoushuiGu", "position": "Designer","email":"john@domain.com","url":"images/t1.png"},
        {"id": 6, "name": "HailiangChen", "position": "Designer","email":"john@domain.com","url":"images/t4.png"},
        {"id": 7, "name": "JianjiaoWang", "position": "Designer","email":"jo126hn@domain.com","url":"images/t3.png"},
        {"id": 8, "name": "JingLu", "position": "Designer","email":"tom-334@domain.com","url":"images/t2.png"},
        {"id": 9, "name": "MengWang", "position": "Designer","email":"john@domain.com","url":"images/t1.png"},
        {"id": 10, "name": "ShoushuiGu", "position": "Designer","email":"john@domain.com","url":"images/t3.png"},
    ];
    //���� �������ݶ�̬�����б�
    for (var i = 0; i < messages.length; i++) {
        var msg = messages[i];//ÿһ������
        var  li= document.createElement("li");//����ֽ��
        li.className = "ac";
        li.id = "cc";
        li.innerHTML ='<div class="item1">'
            +'<a href="javascript:;">'
            +'<img src="'+msg.url+'"alt="" class="xwcms"/>'
            +'</a>'
            +'</div>'
            +'<div class="item2">'+msg.name+'</div>'
            +'<div class="item3">'+msg.position+'</div>'
            +'<div class="item4">'+msg.email+'</div>';
        //�Ѵ�����������׷�ӵ�content��
        us.appendChild(li);
    }




//��ɫ�ڰ�ɫ�ı任
    $(".img").mouseenter(function () {
        var $this = $(this);
        var $div = $this.find(".inner div");
        $div.eq(1).stop();
        $div.eq(1).css({"top": "0px", "left": "0px", "width": "200px", "height": "200px"});
        $div.eq(0).stop().animate({
            "top": "-25px",
            "left": "-25px",
            "width": "250px",
            "height": "250px",
            "opacity": "0"
        }, 500);
        $div.eq(1).stop().animate({
            "top": "-25px",
            "left": "-25px",
            "width": "250px",
            "height": "250px",
            "opacity": "1"
        }, 500);
    }).mouseleave(function () {
        var $this = $(this);
        var $div = $this.find(".inner div");
        $div.eq(0).stop().animate({"top": "0", "left": "0", "width": "200px", "height": "200px", "opacity": "1"}, 500);
        $div.eq(1).stop().animate({"top": "0", "left": "0", "width": "200px", "height": "200px", "opacity": "0"}, 500);
    });

//
    var Nodes = {

        density: 20,
        drawDistance: 0,
        baseRadius: 4,
        maxLineThickness: 4,
        reactionSensitivity: 0.5,
        lineThickness: 1,

        points: [],
        mouse: { x: -1000, y: -1000, down: false, move: false },

        animation: null,

        canvas: null,
        context: null,

        imageInput: null,
        bgImage: null,
        bgCanvas: null,
        bgContext: null,
        bgContextPixelData: null,

        init: function() {
            this.canvas = document.getElementById('nodes');
            this.context = this.canvas.getContext('2d');
            this.context.globalCompositeOperation = 'lighter';
            this.canvas.style.display = 'block';

            this.canvas.addEventListener('mousemove', this.mouseMove, false);
            this.canvas.addEventListener('mousedown', this.mouseDown, false);
            this.canvas.addEventListener('mouseup',   this.mouseUp,   false);
            this.canvas.addEventListener('mouseout',  this.mouseOut,  false);

            this.preparePoints();
            this.draw();
            this.wiggle();

            var object_int = this;
            setInterval(function() {
                object_int.wiggle();
            }, 650);
        },

        preparePoints: function() {

            this.points = [];

            var width, height, i, j;

            var color = dotsColor;
            var offsetTop = 110;
            var offsetLeft = 110;

            this.points.push({ x: 20 + offsetLeft, y: 80 + offsetTop, originalX: 20 + offsetLeft, originalY: 80 + offsetTop, color: color, radius: 5, opacityDelay: 0 });
            this.points.push({ x: 20 + offsetLeft, y: 90 + offsetTop, originalX: 20 + offsetLeft, originalY: 90 + offsetTop, color: color, radius: 2, opacityDelay: - 0.3 });
            this.points.push({ x: 24 + offsetLeft, y: 100 + offsetTop, originalX: 24 + offsetLeft, originalY: 100 + offsetTop, color: color, radius: 3, opacityDelay: - 0.4 });
            this.points.push({ x: 20 + offsetLeft, y: 105 + offsetTop, originalX: 20 + offsetLeft, originalY: 105 + offsetTop, color: color, radius: 2, opacityDelay: - 0.6 });
            this.points.push({ x: 30 + offsetLeft, y: 107 + offsetTop, originalX: 30 + offsetLeft, originalY: 107 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 30 + offsetLeft, y: 112 + offsetTop, originalX: 30 + offsetLeft, originalY: 112 + offsetTop, color: color, radius: 1, opacityDelay: - 0.2 });
            this.points.push({ x: 22 + offsetLeft, y: 115 + offsetTop, originalX: 22 + offsetLeft, originalY: 115 + offsetTop, color: color, radius: 3, opacityDelay: - 0.7 });
            this.points.push({ x: 30 + offsetLeft, y: 125 + offsetTop, originalX: 30 + offsetLeft, originalY: 125 + offsetTop, color: color, radius: 5, opacityDelay: - 0.5 });
            this.points.push({ x: 30 + offsetLeft, y: 135 + offsetTop, originalX: 30 + offsetLeft, originalY: 135 + offsetTop, color: color, radius: 1, opacityDelay: - 0.3 });
            this.points.push({ x: 35 + offsetLeft, y: 132 + offsetTop, originalX: 35 + offsetLeft, originalY: 132 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 42 + offsetLeft, y: 140 + offsetTop, originalX: 42 + offsetLeft, originalY: 140 + offsetTop, color: color, radius: 8, opacityDelay: - 0.7 });
            this.points.push({ x: 30 + offsetLeft, y: 143 + offsetTop, originalX: 30 + offsetLeft, originalY: 143 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 55 + offsetLeft, y: 143 + offsetTop, originalX: 55 + offsetLeft, originalY: 143 + offsetTop, color: color, radius: 1, opacityDelay: - 0.4 });
            this.points.push({ x: 56 + offsetLeft, y: 151 + offsetTop, originalX: 56 + offsetLeft, originalY: 151 + offsetTop, color: color, radius: 3, opacityDelay: - 0.5 });
            this.points.push({ x: 72 + offsetLeft, y: 150 + offsetTop, originalX: 72 + offsetLeft, originalY: 150 + offsetTop, color: color, radius: 2, opacityDelay: - 0.9 });
            this.points.push({ x: 73 + offsetLeft, y: 159 + offsetTop, originalX: 73 + offsetLeft, originalY: 159 + offsetTop, color: color, radius: 3, opacityDelay: - 0.7 });
            this.points.push({ x: 79 + offsetLeft, y: 162 + offsetTop, originalX: 79 + offsetLeft, originalY: 162 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 84 + offsetLeft, y: 161 + offsetTop, originalX: 84 + offsetLeft, originalY: 161 + offsetTop, color: color, radius: 1, opacityDelay: - 0.4 });
            this.points.push({ x: 90 + offsetLeft, y: 164 + offsetTop, originalX: 90 + offsetLeft, originalY: 164 + offsetTop, color: color, radius: 3, opacityDelay: 0 });
            this.points.push({ x: 98 + offsetLeft, y: 158 + offsetTop, originalX: 98 + offsetLeft, originalY: 158 + offsetTop, color: color, radius: 3, opacityDelay: - 0.2 });
            this.points.push({ x: 105 + offsetLeft, y: 150 + offsetTop, originalX: 105 + offsetLeft, originalY: 150 + offsetTop, color: color, radius: 2, opacityDelay: - 0.7 });
            this.points.push({ x: 107 + offsetLeft, y: 170 + offsetTop, originalX: 107 + offsetLeft, originalY: 170 + offsetTop, color: color, radius: 1, opacityDelay: - 0.4 });
            this.points.push({ x: 115 + offsetLeft, y: 159 + offsetTop, originalX: 115 + offsetLeft, originalY: 159 + offsetTop, color: color, radius: 9, opacityDelay: - 0.6 });
            this.points.push({ x: 129 + offsetLeft, y: 152 + offsetTop, originalX: 129 + offsetLeft, originalY: 152 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 128 + offsetLeft, y: 142 + offsetTop, originalX: 128 + offsetLeft, originalY: 142 + offsetTop, color: color, radius: 4, opacityDelay: - 0.5 });
            this.points.push({ x: 139 + offsetLeft, y: 138 + offsetTop, originalX: 139 + offsetLeft, originalY: 138 + offsetTop, color: color, radius: 3, opacityDelay: 0 });
            this.points.push({ x: 158 + offsetLeft, y: 134 + offsetTop, originalX: 158 + offsetLeft, originalY: 134 + offsetTop, color: color, radius: 2, opacityDelay: - 0.3 });
            this.points.push({ x: 144 + offsetLeft, y: 125 + offsetTop, originalX: 144 + offsetLeft, originalY: 125 + offsetTop, color: color, radius: 2, opacityDelay: - 0.8 });
            this.points.push({ x: 153 + offsetLeft, y: 121 + offsetTop, originalX: 153 + offsetLeft, originalY: 121 + offsetTop, color: color, radius: 5, opacityDelay: 0 });
            this.points.push({ x: 153 + offsetLeft, y: 112 + offsetTop, originalX: 153 + offsetLeft, originalY: 112 + offsetTop, color: color, radius: 1, opacityDelay: - 0.7 });
            this.points.push({ x: 153 + offsetLeft, y: 103 + offsetTop, originalX: 153 + offsetLeft, originalY: 103 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 157 + offsetLeft, y: 102 + offsetTop, originalX: 157 + offsetLeft, originalY: 102 + offsetTop, color: color, radius: 1, opacityDelay: - 0.2 });
            this.points.push({ x: 155 + offsetLeft, y: 99 + offsetTop, originalX: 155 + offsetLeft, originalY: 99 + offsetTop, color: color, radius: 1, opacityDelay: - 0.6 });
            this.points.push({ x: 162 + offsetLeft, y: 92 + offsetTop, originalX: 162 + offsetLeft, originalY: 92 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 155 + offsetLeft, y: 83 + offsetTop, originalX: 155 + offsetLeft, originalY: 83 + offsetTop, color: color, radius: 3, opacityDelay: - 0.6 });
            this.points.push({ x: 155 + offsetLeft, y: 74 + offsetTop, originalX: 155 + offsetLeft, originalY: 74 + offsetTop, color: color, radius: 2, opacityDelay: - 0.4 });
            this.points.push({ x: 148 + offsetLeft, y: 68 + offsetTop, originalX: 148 + offsetLeft, originalY: 68 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 145 + offsetLeft, y: 54 + offsetTop, originalX: 145 + offsetLeft, originalY: 54 + offsetTop, color: color, radius: 5, opacityDelay: - 0.6 });
            this.points.push({ x: 152 + offsetLeft, y: 46 + offsetTop, originalX: 152 + offsetLeft, originalY: 46 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 136 + offsetLeft, y: 48 + offsetTop, originalX: 136 + offsetLeft, originalY: 48 + offsetTop, color: color, radius: 3, opacityDelay: - 0.3 });
            this.points.push({ x: 129 + offsetLeft, y: 35 + offsetTop, originalX: 129 + offsetLeft, originalY: 35 + offsetTop, color: color, radius: 3, opacityDelay: - 0.2 });
            this.points.push({ x: 118 + offsetLeft, y: 34 + offsetTop, originalX: 118 + offsetLeft, originalY: 34 + offsetTop, color: color, radius: 6, opacityDelay: - 0.6 });
            this.points.push({ x: 116 + offsetLeft, y: 24 + offsetTop, originalX: 116 + offsetLeft, originalY: 24 + offsetTop, color: color, radius: 2, opacityDelay: - 0.2 });
            this.points.push({ x: 106 + offsetLeft, y: 25 + offsetTop, originalX: 106 + offsetLeft, originalY: 25 + offsetTop, color: color, radius: 4, opacityDelay: - 0.1 });
            this.points.push({ x: 99 + offsetLeft, y: 31 + offsetTop, originalX: 99 + offsetLeft, originalY: 31 + offsetTop, color: color, radius: 3, opacityDelay: 0 });
            this.points.push({ x: 90 + offsetLeft, y: 23 + offsetTop, originalX: 90 + offsetLeft, originalY: 23 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 80 + offsetLeft, y: 27 + offsetTop, originalX: 80 + offsetLeft, originalY: 27 + offsetTop, color: color, radius: 2, opacityDelay: - 0.5 });
            this.points.push({ x: 80 + offsetLeft, y: 20 + offsetTop, originalX: 80 + offsetLeft, originalY: 20 + offsetTop, color: color, radius: 1, opacityDelay: - 0.4 });
            this.points.push({ x: 73 + offsetLeft, y: 6 + offsetTop, originalX: 73 + offsetLeft, originalY: 6 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 71 + offsetLeft, y: 15 + offsetTop, originalX: 71 + offsetLeft, originalY: 15 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 72 + offsetLeft, y: 24 + offsetTop, originalX: 73 + offsetLeft, originalY: 24 + offsetTop, color: color, radius: 2, opacityDelay: - 0.2 });
            this.points.push({ x: 69 + offsetLeft, y: 32 + offsetTop, originalX: 69 + offsetLeft, originalY: 32 + offsetTop, color: color, radius: 3, opacityDelay: - 0.3 });
            this.points.push({ x: 61 + offsetLeft, y: 26 + offsetTop, originalX: 61 + offsetLeft, originalY: 26 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
            this.points.push({ x: 62 + offsetLeft, y: 33 + offsetTop, originalX: 62 + offsetLeft, originalY: 33 + offsetTop, color: color, radius: 2, opacityDelay: - 0.6 });
            this.points.push({ x: 56 + offsetLeft, y: 32 + offsetTop, originalX: 56 + offsetLeft, originalY: 32 + offsetTop, color: color, radius: 1, opacityDelay: - 0.1 });
            this.points.push({ x: 48 + offsetLeft, y: 38 + offsetTop, originalX: 48 + offsetLeft, originalY: 38 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 43 + offsetLeft, y: 42 + offsetTop, originalX: 43 + offsetLeft, originalY: 42 + offsetTop, color: color, radius: 3, opacityDelay: - 0.5 });
            this.points.push({ x: 38 + offsetLeft, y: 49 + offsetTop, originalX: 38 + offsetLeft, originalY: 49 + offsetTop, color: color, radius: 1, opacityDelay: 0 });
            this.points.push({ x: 31 + offsetLeft, y: 58 + offsetTop, originalX: 31 + offsetLeft, originalY: 58 + offsetTop, color: color, radius: 4, opacityDelay: - 0.5 });
            this.points.push({ x: 24 + offsetLeft, y: 65 + offsetTop, originalX: 24 + offsetLeft, originalY: 65 + offsetTop, color: color, radius: 3, opacityDelay: 0 });
            this.points.push({ x: 27 + offsetLeft, y: 73 + offsetTop, originalX: 27 + offsetLeft, originalY: 73 + offsetTop, color: color, radius: 2, opacityDelay: 0 });
        },

        rdm: function(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        },

        wiggle: function() {
            if (!Nodes.mouse.move) {
                for (var i = 0; i < this.points.length; i++) {
                    currentPoint = this.points[i];

                    var newcx = currentPoint.originalX + this.rdm(-currentPoint.radius, currentPoint.radius);
                    var newcy = currentPoint.originalY + this.rdm(-currentPoint.radius, currentPoint.radius);

                    $(currentPoint).stop().animate({x: newcx, y: newcy}, currentPoint.radius * 100, 'linear');
                }
            }
        },

        updatePoints: function() {

            var i, currentPoint, theta, distance;

            for (i = 0; i < this.points.length; i++) {

                currentPoint = this.points[i];

                theta = Math.atan2(currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);


                if (this.mouse.down) {
                    distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                            (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                } else {
                    distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                            (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                }

                currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
                currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

            }
        },

        drawPoints: function() {
            var i, currentPoint;

            for (i = 0; i < this.points.length; i++) {
                currentPoint = this.points[i];

                this.context.fillStyle = 'rgba('+currentPoint.color+','+currentPoint.opacityDelay+')';
                if(currentPoint.opacityDelay < 1) currentPoint.opacityDelay = currentPoint.opacityDelay + 0.025;
                this.context.strokeStyle = 'rgb('+currentPoint.color+')';

                this.context.beginPath();
                this.context.arc(currentPoint.x, currentPoint.y, currentPoint.radius ,0 , Math.PI*2, true);
                this.context.closePath();
                this.context.fill();
            }
        },

        draw: function() {
            this.animation = requestAnimationFrame(function() {
                Nodes.draw()
            });

            this.clear();
            this.updatePoints();
            this.drawPoints();

        },

        clear: function() {
            this.canvas.width = this.canvas.width;
        },

        mouseDown: function(event) {
            Nodes.mouse.down = true;
        },

        mouseUp: function(event) {
            Nodes.mouse.down = false;
        },

        mouseMove: function(event) {
            for (var i = 0; i < Nodes.points.length; i++) {
                $(Nodes.points[i]).stop();
            }
            Nodes.mouse.x = event.offsetX || (event.layerX - Nodes.canvas.offsetLeft);
            Nodes.mouse.y = event.offsetY || (event.layerY - Nodes.canvas.offsetTop);
            Nodes.mouse.move = true;
        },

        mouseOut: function(event) {
            Nodes.mouse.x = -1000;
            Nodes.mouse.y = -1000;
            Nodes.mouse.down = false;
            Nodes.mouse.move = false;
        }
    }

    var dotsColor = '0, 0, 0';
    Nodes.init();


    //С����������С����
    var sheep=document.getElementById("sheep");
    var yacaves=document.getElementById("yacaves");
    var smally = document.getElementById("smally");
    //���� ����ں������ƶ� ��ȡ�����λ�� ��ͼƬ�ӵ�ǰλ�ý������ܵ������λ��
       yacaves.onmouseover=function(){
           animate(smally,{left:20});
       }
       yacaves.onmouseout=function(){
           animate(smally,{left:450});
       }


//    ��̬����about






}


