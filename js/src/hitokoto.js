window.onload=function () {
    var hitokoto = document.querySelector('.hitokoto');
    var from = document.querySelector('.from');
    update();
    function update() {
        gethi = new XMLHttpRequest();
        gethi.open("GET","https://v1.hitokoto.cn/");
        //这里选择类别，详见官方文档
        gethi.send();
        gethi.onreadystatechange = function () {
            if (gethi.readyState===4 && gethi.status===200) {
                var Hi = JSON.parse(gethi.responseText);
                hitokoto.innerHTML = Hi.hitokoto;
                from.innerHTML = "——" + Hi.from; //可自定义输出格式
            }
        }
    }
}
