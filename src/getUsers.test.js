// 用__mock__下的ajax.js 代替./ajax
jest.mock('./ajax');
let getUsers = require('./getUsers');
test('getUsers', (done) => {
  document.body.innerHTML = `<ul id="users"></ul>`;
  let users = document.getElementById('users')
  expect(users.nodeName.toLocaleLowerCase()).toBe('ul');
  getUsers('/user.json', 'users', () => {
    let lis = users.querySelectorAll('li')
    expect(lis.length).toBe(4);
    expect(lis[0].innerHTML).toBe('lici1');
    expect(lis[1].innerHTML).toBe('lici2');
    done();
  })

})