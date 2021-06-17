let qs = require('./qs');
const assert = require('assert');

assert(qs.parse('name=zfpx').name=='zfpx','姓名必须是zfpx')
assert(qs.parse('name=zfpx&age=9').age == '9', '年龄必须是9')

assert(qs.stringify({name:'lici'})=='name=lici','一个字段时不正确')
assert(qs.stringify({name:'lici',age:9})=='name=lici&age=9','两个字段')

// 测试写的代码对不对
// console.log(qs.parse('name=zfpx').name=='zfpx')
// console.log(qs.parse('name=zfpx&age=9').age == 9)

// console.log(qs.stringify({name:'lici'})=='name=lici')
// console.log(qs.stringify({name:'lici',age:9})=='name=lici&age=9')
