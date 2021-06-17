module.exports = {
  // 识别哪些文件是测试文件（glob形式 全局匹配模式），与testRegexp互斥
  // 放在__tests__目录下，或者以test.js结尾
  testMatch:['**/__tests__/**/*.js?(x)','**/?(*.)(spec|test).js?(x)'],//glob形式
  // testRegexp:'(/__test__).*|(\\.|/)(test|spec))\\.jsx?$', //普通正则
  testEnvironment:'jsdom', // 测试环境，默认是jsdom，可修改为node
  rootDir:'', // 默认值 当前目录 一般是package.json所在的目录
  moduleFileExtensions:['js','json','jsx','node']
}