'use strict';

// Array

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position(접근)
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.lenght);
console.log(fruits[0]); // 사과 호출 
console.log(fruits[1]); // 바나나 호출
console.log(fruits[2]); // undefined 
console.log(fruits[fruits.lenght - 1]); // 가장 마지막 index 

// 3. Looping over an array
// print all fruits
// a. for
for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for( let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end -> 맨 뒤 부터 추가
fruits.push('🍒','🍍');
console.log(fruits);

// pop : remove an item from the end -> 맨 뒤 부터 삭제
fruits.pop();
console.log(fruits);

// unshif : add an item to the first -> 맨 앞 부터 추가
fruits.unshift('🍔','🌭');
console.log(fruits);

// shift : remove an item from the first -> 맨 앞 부터 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// 중요!! 
// shift, unshift 는 pop, push 보다 느리다.
// 뒤부터 넣고 빼는 것은 기존의 들어있던 데이터가 움직일 필요가 없어서 빠르게 진행할 수 있다
// 앞에서 데이터를 넣으면 기존의 데이터를 먼저 뒤로 자리를 이동시켜서 빈 공간을 만들어 집어 넣기 때문
// 삭제 또한 위의 반대로 일이 일어남, 결국 길이가 길면 길 수록 작업이 느려진다.

// splice : remove an item by index position -> 지정한 위치를 삭제
fruits.push('🍊','🍇','🍑');
console.log(fruits);
//fruits.splice(1,) // 1부터 지우고 싶다, 하지만 지우고 싶은 개수는 선언하지 않았다.
//console.log(fruits); // 지정한 인덱스부터 모든 데이터를 지운다.
fruits.splice(1, 1); // 인덱스 1부터 1개만 지운다.
console.log(fruits);
fruits.splice(1, 1, '🥕', '🍆'); // 1부터 1개만 지우고 그 자리부터 당근과 가지를 넣는다.
console.log(fruits);

// combine two arrays
// 기존의 배열과 새롭게 만든 배열을 합칠 수 있다.
const frutis2 = ['🍏', '🍉'];
const newFruits = fruits.concat(frutis2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍉')); // 없는 값을 출력하여 -1
console.log(fruits.indexOf('🍇')); // 포도의 인덱스 값인 4 출력
console.log(fruits.includes('🍇')); // array에 존재 유무 확인 -> true

// lastIndeoxOf
console.clear();
console.log(fruits);
fruits.push('🍎');
console.log(fruits); // 사과 맨 뒤에 추가
console.log(fruits.indexOf('🍎')); // array 안에 사과가 두 개 있지만 앞에 있는 사과의 인덱스를 출력 -> 0
console.log(fruits.lastIndexOf('🍎')); // 마지막 사과의 인덱스 출력 -> 6
