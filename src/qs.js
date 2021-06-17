function parse(str) {
    let arr = str.split('&');
    let obj = {};
    arr.forEach(item => {
        let [key,value] = item.split('=');
        obj[key] = value;
    })
    return obj;
}
function stringify(obj) {
    let arr = [];
    for(let key in obj) {
        if(!obj.hasOwnProperty(key)) return;
        arr.push(key+'='+obj[key]);
    }
    return arr.join('&');
}
exports.parse = parse;
exports.stringify = stringify;