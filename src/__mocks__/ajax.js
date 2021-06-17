// ajax只能是在前台用的，后台是用不了的。
function ajax (url, success) {
  setTimeout(function () {
    success({
      code: 0,
      users: [
        {name:'lici1'},
        {name:'lici2'},
        {name:'lici3'},
        {name:'lici4'},
      ]
    });
  },1000)
}

module.exports = ajax;