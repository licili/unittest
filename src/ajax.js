// ajax只能是在前台用的，后台是用不了的。
function ajax (url, success) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      let data = JSON.parse(xhr.responseText)
      success && success(data);
    }
  }
  xhr.send(null);
}

module.exports = ajax;