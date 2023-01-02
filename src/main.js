let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*你好，我叫小李
* 接下来展示一下我的前端功底
* 首先要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
* 注意看好了
* 首先把div变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); 
}
/* 加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let string2 = ""; //是用来缓存显示在屏幕上的结果
let n = -1;

let step = () => {
    setTimeout(() => {
        if (string[n + 1] === "\n") {
            string2 += "<br>";
        } else if (string[n + 1] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n + 1];
            //如果是回车就不照搬
        }
        if (n + 1 >= string.length) {
            return;
        }
        n = n + 1;
        html.innerHTML = string2; //把string2显示在页面里面
        style.innerHTML = string.substring(0, n); //显示css格式
        window.scrollTo(0, 99999); //设置竖向滚动条位置
        html.scrollTo(0, 9999);
        step();
    }, 50);
};

step();