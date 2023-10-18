var fn = function (params) {
    var number = 1;
    var result = Number(params)
        ? number + Number(params)
        : String(number).concat(String(params));
    return result;
};
fn(1);
fn('123');
console.log(fn('你好'));
function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }

  document.body.appendChild(component());