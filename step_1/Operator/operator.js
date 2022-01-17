// 1. String concatenation
// 문자열 + 문자열, 문자열 + 숫자
// string literals : ${1+2} 변수 값을 계산하여 string으로 포함하여 문자열을 만든다.
// 좋은점: 줄바꿈을 하거나 특수 기호를 넣어도 그대로 문자열로 나온다.
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); 
console.log(1 - 1); 
console.log(1 / 1); 
console.log(1 * 1); 
console.log(1 % 1);
console.log(2 ** 3); // 2의 3승  

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// -- 또한 마찬가지

// 4. Assignment operators (할당)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (비교)
console.log(6 < 10 ); 
console.log(6 <= 10 ); 
console.log(6 > 10 ); 
console.log(6 >= 10 ); 

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; // false;

// || (or) , 하나라도 true 면 true
// 처음으로 true가 나오면 거기서 멈춘다!!
// value1이 true 면 뒤에 상관없이 true
// check 같은 함수를 사용하는 코드는 마지막에 배치
console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('hi'); // wasting time
    }
    return true; // 결국 true 리턴
}

// && (and)
// 3개가 다 true가 나와야 true
// value1 이 false 면 뒤에 상관없이 false
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
// 값을 반대로 바꾼다
// true -> false, false -> true
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, 타입을 변경하여 검사 ( with type conversion )
console.log(stringFive == numberFive); // 두 타입은 같다. true 값
console.log(stringFive != numberFive); // false
// false -> 이유?? 문자열이긴 한데 안에 들어있는건 숫자 5, 결론 : 둘 다 같다

// === strict equality, no type conversion
// 타입을 신경써서 타입이 다르면 다르다!
// 검사할때는 주로 strict 사용
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// object -> 메모리에 탑재될 때 ref 형태로 저장
const hyunho1 = { name: 'hyunho'};
const hyunho2 = { name: 'hyunho'};
// hyunho1 과 2는 똑같은 데이터가 들어있는 object지만
// 실제 메모리에는 1과 2는 각각 다른 ref가 들어있고 
// 다른 ref는 서로 다른 object를 가르키고 있다.
const hyunho3 = hyunho1;
// hyunho3 은 1과 동일
console.log(hyunho1 == hyunho2); // 각각 다른 ref가 저장되어있어 false
console.log(hyunho1 === hyunho2); // 똑같은 타입이든 아니든, ref값이 달라서 false
console.log(hyunho1 === hyunho3); // true, 같은 ref

// equality - puzzler
// 0, null, undefined, '' 는 false로 간주 될 수 있다
console.log( 0 == false); // true
console.log( 0 === false); // false, 0은 boolean 타입이 아니다!
console.log( '' == false); // true
console.log( '' === false); // false, ''는 boolean 타입이 아니다!
console.log( null == undefined); // true
console.log( null === undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'hyunho';
if(name === 'hyunho'){
    console.log('Welcome, hyunoh!'); // 실행
} else if(name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// if 를 간단하게 사용
// condition ? value 1 : value2;
// true = value1, false = value2
console.log(name === 'hyunho' ? 'yes' : 'no');

// 10. Switch
// brower의 값이 'IE' 이므로 
// 'IE' 에 해당하는 case가 실행한다.
const brower = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loop
// 무한 반복, true 값을 경우
// 조건문이 맞을 때만 사용하고 싶다면,
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do ~ while loop
// 블럭을 먼저 실행하여 출력이 된 다음, 조건을 검사
// 현재 i = 0
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

// for
// for(begin; condition; step);
// for(초기값; 조건; 증가값);
// 조건이 맞을 때 까지 실행
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i=i-2){
    // inline variable declaration, 지역변수로 선언하여 작성
    console.log(`for: ${i}`);
}

// 중첩 ( nested )
// 되도록 피하자!
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 숫자를 0 ~ 10 까지 짝수만 출력 하도록 continue를 사용하여 만들기
for(let z = 0; z < 11; i++){
    if(z % 2 !== 0){
        continue;
    }
    console.log(`z : ${z}`);
}


// 0 ~ 10 까지 숫자를 출력하는데 8에서 멈추도록 break 를 사용하여 만들기
for(let m = 0; m < 11; m++){
    if(m > 8){
        break;
    }
    console.log(`m : ${m}`);
}
