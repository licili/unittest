// url 请求url地址  id 容器ID  callback 成功回调
let ajax = require('./ajax')
function getUsers (url,id,callback) {
      ajax(url, (res) => {
      if (res.code == 0) {
        let users = res.users;
        let html = users.map(user => `<li>${user.name}</li>`).join('');
        document.getElementById(id).innerHTML = html;
        callback();
      }
    })
}
module.exports = getUsers;