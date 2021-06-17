const express = require('express');
const path = require('path');
const app = express();
app.get('/users', (req, res) => {
  res.sendFile(path.resolve(__dirname,'users.html'))
})
// 这里应该写静态文件中间件。为了求快。就这样写了
app.get('/ajax.js', (req, res) => {
  res.sendFile(path.resolve(__dirname,'src/ajax.js'))
})
app.get('/getUsers.js', (req, res) => {
  res.sendFile(path.resolve(__dirname,'src/getUsers.js'))
})
app.get('/users.json', (req, res) => {
  res.json({
    code: 0,
    users: [
      {name:'lici1'},
      {name:'lici12'},
      {name:'lici13'},
      {name:'lici14'},
    ]
  })
})
app.listen(3000)