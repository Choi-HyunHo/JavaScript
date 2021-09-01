// Function
// - 재사용가능
// - 프로그램을 구성하는 기본적인 구조
// - 서브 프로그램, 한 가지의 태스크나 값을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// 하나의 함수는 한 가지의 일만 하도록 만들어야 한다!
// naming : 동사, 커맨드 형태
// ex) createCardAndPoint -> createCard, createPoint
// JS 에서 Function은 object 이다.
// TS 에서는 타입을 명시 해야 한다. ex) function log(message : string)
function printHello(){
    console.log('Hello');
}
printHello(); // Hello 만 출력

function log(message){
    console.log(message);
}
log('Hello@'); // message에 입력 받는 값 출력 -> Hello@
log(1234);

// 2. Parameters
// premitive parameters : 메모리에 value가 그대로 저장 -> value 전달
// object : 메모리에 ref가 저장되어 -> ref 전달
function changeName(obj){
    obj.name = 'coder';
}
const hyunho = { name: 'hyunho'};
changeName(hyunho);
console.log(hyunho); // coder 출력

// 3. Default parameters 
function showMessage(message, from){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')
// 출력 : Hi! by undefined 
// from 은 정의되어 있지 않다.

// 파라미터를 사용하지 않을 때 대체 하여 사용 가능
 function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// 4. Rest Parameters
// Rest Parameters -> (...args)
// 배열 형태로 전달
// args 는 총 3개
// 이유는, 현재 dream, coding, ellie 의 3개의 인자가 전달되어서
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 같은 출력 값이나, 간락히 표현 하는 방법
    for(const arg of args){
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie')

// 5. Local scope
// '밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다!'
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage); // 안에서는 볼 수 있다.
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit ( 현업 팁! )
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// 7. Function expression
const print = function(){
    // anonymous function
    console.log('print');
}
print(); // print 출력
const printAgain = print;
printAgain(); // print 출력
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4 출력

// 8. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function 이름 없는 
const printYes = function(){
    console.log('yes!');
}

// named function
// 디버깅을 할 때 유용하게 하기 위해
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function
// 함수를 간결하게 만들어 준다
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

// Arrow
const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
}

// IIFE : 함수를 곧 바로 호출 하는 방법
(function hello(){
    console.log('IIFE');
})();