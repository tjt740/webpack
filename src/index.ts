import { cube } from './main';

interface Fn {
    fn: () => string;
    name: string;
    age: number;
}

class Aa implements Fn {
    // private tall: number;
    protected weight: number = 130;
    name = 'tjt';
    age = 123;
    constructor() {}
    fn(params = '1234') {
        return params;
    }
}

class Bb extends Aa {
    constructor(weight: number) {
        const element = document.createElement('pre');
        element.innerHTML = [
            'Hello webpack!',
            '5 cubed is equal to ' + cube(5),
        ].join('\n\n');
        super();
        console.log(this.weight, weight);
    }
}

const b = new Bb(14521);
const b1 = new Bb(120);

console.log(process.env.NODE_ENV);
