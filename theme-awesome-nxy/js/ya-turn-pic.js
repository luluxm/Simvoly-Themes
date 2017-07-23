/**
 * Created by Administrator on 2017/3/20.
 */
window.onload=function(){
    //����
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
            animate(ul, target);
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
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    //5.2  ����뿪box  ͼƬ�Զ�����
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 1000);
    };

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
        animate(ul, target);
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
        animate(ul, target);

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

}