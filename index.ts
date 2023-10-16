type fnT = string | number;

const fn = (params: string | number): fnT => {
    const number = 1;
    const result = Number(params)
        ? number + Number(params)
        : String(number).concat(String(params));
    return result;
};

fn(1);
fn('123');
console.log(fn('你好'));
