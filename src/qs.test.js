let qs = require('./qs');

// 如果定义一个测试用例
// expect 期望  toBe 等于
// describe 分组 把相类似的测试用例分为一组
describe('parse', () => {
  test('one', () => {
    expect(qs.parse('name=zfpx').name).toBe('zfpx');
  })

  test('two', () => {
    expect(qs.parse('name=zfpx&age=9').age).toBe('9');
  })
})


describe('stringify', () => {
  test('one', () => {
    expect(qs.stringify({name:'zfpx'})).toBe('name=zfpx');
  })

  test('two', () => {
    expect(qs.stringify({name:'zfpx',age:9})).toBe('name=zfpx&age=9');
  })
})
