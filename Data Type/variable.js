'use strict';

// Variable
// 변수 : 변경될 수 있는 값
// let(added in ES6)  (read/write)
// Mutable : 값이 계속 변경될 수 있다.
// block scope

{
let name = 'hyunho';
console.log(name);
name = 'hello';
console.log(name);
}

// var(don't ever use this!)
// var hoisting(move declaration from bottom to top)
// has no block scope

// constants (only read)
// Immutable : 변경이 불가능!
// 값을 할당하고 다시는 값을 변경하지 않는다!
// 보안상의 이유

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// primitive : 더 이상 작은 단위로 나눌 수 없는 single item
// -> number, string, boolean, null, undefiedn, symbol
// object : single item을 여러 개 묶어서 한 단위로 관리할 수 있게 해주는 것
// function : 다른 데이터 타입처럼 변수 할당이 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (새로 추가!) - 크롬, 파이어폭스만 지원 
const bigInt = 1234556n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting} type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
// 변수의 값이 자동적으로 붙여서 나온다
console.log(`value: ${helloBob} type:${typeof helloBob}`);

// boolean
// false: 0, null, undefined , NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명확하게 아무것도 아니다라고 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되었으나 값이 정해지지 않는 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// Symbol
// 정말 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 같은 symbol를 만들고 싶을 때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// 바로 출력하면 에러가 뜬다. description을 활용하여 string으로 변환해야 한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
const hyunho = { name: 'hyunho', age: 25};
hyunho.age = 26;

// Dynamic typing : dynamically typed language
// 프로그램이 동작할 떄 할당된 값에 따라 변경 될 수 있다.
// 런타임에서 에러가 많이 발생한다.
let text = 'hello';
console.log(text.charAt(0)); // h 출력
console.log(`value: ${text}, type: ${typeof text}`); // type : string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // type : number
text = '7' + 5; // JS에서 문자열에 더하기가 있어서 5를 string 변환한다.
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2'; // 숫자와 숫자로 나누는 걸로 인식한다.
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type : number
console.log(text.charAt(0)); // 오류 ? 가장 최근에 타입이 number이라서
