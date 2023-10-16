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
