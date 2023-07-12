function login() {
    console.log('登录点击');
    var state = document.getElementsByName('reading')[0].checked;
    var username = document.getElementById('username').value;
    var userpwd = document.getElementById('userpwd').value;


    if (username.length == 0 || userpwd.length == 0) {
        alert("请输入用户名和密码");
    } else {
        if (!state) {
            alert("请勾选隐私协议");
            return;
        }
        localStorage.setItem("logininfos", JSON.stringify({ 'username': username, 'userpwd': userpwd }))
        mpClink('Dialog', { 'title': "提示", 'message': '登录成功', 'buttons': ['确定'] });
        mpClink('AddData', { 'username': username, 'userpwd': userpwd, 'loginState': true });
        mpClink('LoginType', { 'loginState': true });
        AlipayJSBridge.call('popWindow');
    }
}

function rigerst() {
    mpClink('startAppUrl', { 'url': 'https://houhout.github.io/register/register.html' });
}

function mpClink(operationType, params) {

    AlipayJSBridge.call('umapJsApis', {
        operationType: operationType,
        params: params
    }, function (result) {
        console.log(result);
    });

}