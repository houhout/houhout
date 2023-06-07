

var allHd = "HT的测试";


var tabTitleArr = ["详情", "分享", "扫一扫", "定位", "小程序", "添加桌面", "离线包", 'Vue学习'];

function pageShow() {
    var btnsView = document.getElementById('btns');
    for (var j = 0; j < 2; j++) {
        var div1 = document.createElement('div');
        div1.style = "width: 100%;height: 95px;";
        var rowN = 4;
        for (var i = 0; i < rowN; i++) {
            console.log(i);
            var div2 = document.createElement('div');
            div2.tabIndex = j * 4 + i;
            div2.style = "width: 25%;text-align: center;display:fixed;height: 95px;vertical-align: middle;float: left;";
            var image1 = document.createElement('img');
            image1.style = "flex:1;margin-top: 15px;";
            image1.src = "../img/menus/0" + (j * 4 + i + 1) + ".png";
            var p1 = document.createElement('p');
            p1.style = "height: 25px;flex:1;margin-top: 5px;";

            p1.append(tabTitleArr[j * 4 + i]);
            div2.append(image1, p1);
            div2.onclick = function itemClink() {
                console.log(this.tabIndex);
                switch (this.tabIndex) {
                    case 0:
                        openNewPage('https://houhout.github.io/testCode/testCode.html');
                        break;
                    case 1:
                        mpClink('shareMore');
                        break;
                    case 2:
                        mpClink('scanCode');
                        break;
                    case 3:
                        mpClink('addresss');
                        break;
                    case 4:
                        mpClink('tiny', { 'appId': '2021003186692012' });
                        break;
                    case 5:
                        mpClink('addDeskTop', { 'url': 'https://houhout.github.io/iOS/appStart.html?appName=哈哈哈&appIcon=https://houhout.github.io/img/seaworldLogo.jpg' });
                        break;
                    case 6:
                        mpClink('startAppId', { 'appId': '20230000' });
                        break;
                    case 7:

                        mpClink('startAppUrl', { 'url': 'https://v2.cn.vuejs.org/' })
                    default:
                        break;
                }
            };
            div1.append(div2);

        }
        btnsView.append(div1)
    }
}

function navBack() {
    history.back(-1);
}
function myFunction() {
    x = document.getElementById("toph1");
    var na = document.getElementById('ipuName');

    console.log(na.value);
    x.innerHTML = na.value;
}

function testlog(name, age) {
    var str = "姓名" + name + "年龄" + age;
    console.log(allHd + str);
    document.getElementById("demo").innerHTML = str;
}

function listLabel(num) {

    var box = document.getElementById('topBox');
    for (var i = 0; i < num; i++) {

        var la1 = document.createElement('label');
        la1.append("label index" + i);
        var la2 = document.createElement('br');
        box.append(la2, la1);

    }

}

function mpClink(operationType) {

    AlipayJSBridge.call('umapJsApis', {
        operationType: operationType
    }, function (result) {
        console.log(result);
    });

}

function mpClink(operationType, params) {

    window.AlipayJSBridge.call('umapJsApis', {
        operationType: operationType,
        params: params
    }, function (result) {
        console.log(result);
    });
}

function alipayGetData(operationType, params) {

    AlipayJSBridge.call('umapJsApis', {
        operationType: operationType,
        params: params
    }, function (result) {
        return result;
    });
}


function openNewPage(urlStr) {
    // 打开淘宝首页，自动读取 title，并且去除右边菜单按钮
    AlipayJSBridge.call('pushWindow', {
        url: urlStr,   // 要打开页面的 URL
        // 打开页面的配置参数
        param: {
            readTitle: true,              //自动读取 title
            showOptionMenu: false         // 隐藏右边菜单
        },
        // 用于给新开的页面传递参数，可选
        // 在新开的页面使用 AlipayJSBridge.startupParams 可以获取到 passData
    });
}



Vue.component('navbar-backbtn', {
    data() {
        return {
            count: 0
        }
    },
    template: '<button @click="navBack"> 返回上一页</button>',
    methods: {
        navBack() {
            history.back(-1);
        }
    },
})

Vue.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: '<button @click="count++"> 点击按钮次数:{{count}}</button>'
})

