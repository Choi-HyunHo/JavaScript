'use strict';

// Array

// 1. ์ ์ธ
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position(์ ๊ทผ)
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.lenght);
console.log(fruits[0]); // ์ฌ๊ณผ ํธ์ถ 
console.log(fruits[1]); // ๋ฐ๋๋ ํธ์ถ
console.log(fruits[2]); // undefined 
console.log(fruits[fruits.lenght - 1]); // ๊ฐ์ฅ ๋ง์ง๋ง index 

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
// push : add an item to the end -> ๋งจ ๋ค ๋ถํฐ ์ถ๊ฐ
fruits.push('๐','๐');
console.log(fruits);

// pop : remove an item from the end -> ๋งจ ๋ค ๋ถํฐ ์ญ์ 
fruits.pop();
console.log(fruits);

// unshif : add an item to the first -> ๋งจ ์ ๋ถํฐ ์ถ๊ฐ
fruits.unshift('๐','๐ญ');
console.log(fruits);

// shift : remove an item from the first -> ๋งจ ์ ๋ถํฐ ์ญ์ 
fruits.shift();
fruits.shift();
console.log(fruits);

// ์ค์!! 
// shift, unshift ๋ pop, push ๋ณด๋ค ๋๋ฆฌ๋ค.
// ๋ค๋ถํฐ ๋ฃ๊ณ  ๋นผ๋ ๊ฒ์ ๊ธฐ์กด์ ๋ค์ด์๋ ๋ฐ์ดํฐ๊ฐ ์์ง์ผ ํ์๊ฐ ์์ด์ ๋น ๋ฅด๊ฒ ์งํํ  ์ ์๋ค
// ์์์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ผ๋ฉด ๊ธฐ์กด์ ๋ฐ์ดํฐ๋ฅผ ๋จผ์  ๋ค๋ก ์๋ฆฌ๋ฅผ ์ด๋์์ผ์ ๋น ๊ณต๊ฐ์ ๋ง๋ค์ด ์ง์ด ๋ฃ๊ธฐ ๋๋ฌธ
// ์ญ์  ๋ํ ์์ ๋ฐ๋๋ก ์ผ์ด ์ผ์ด๋จ, ๊ฒฐ๊ตญ ๊ธธ์ด๊ฐ ๊ธธ๋ฉด ๊ธธ ์๋ก ์์์ด ๋๋ ค์ง๋ค.

// splice : remove an item by index position -> ์ง์ ํ ์์น๋ฅผ ์ญ์ 
fruits.push('๐','๐','๐');
console.log(fruits);
//fruits.splice(1,) // 1๋ถํฐ ์ง์ฐ๊ณ  ์ถ๋ค, ํ์ง๋ง ์ง์ฐ๊ณ  ์ถ์ ๊ฐ์๋ ์ ์ธํ์ง ์์๋ค.
//console.log(fruits); // ์ง์ ํ ์ธ๋ฑ์ค๋ถํฐ ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์ง์ด๋ค.
fruits.splice(1, 1); // ์ธ๋ฑ์ค 1๋ถํฐ 1๊ฐ๋ง ์ง์ด๋ค.
console.log(fruits);
fruits.splice(1, 1, '๐ฅ', '๐'); // 1๋ถํฐ 1๊ฐ๋ง ์ง์ฐ๊ณ  ๊ทธ ์๋ฆฌ๋ถํฐ ๋น๊ทผ๊ณผ ๊ฐ์ง๋ฅผ ๋ฃ๋๋ค.
console.log(fruits);

// combine two arrays
// ๊ธฐ์กด์ ๋ฐฐ์ด๊ณผ ์๋กญ๊ฒ ๋ง๋  ๋ฐฐ์ด์ ํฉ์น  ์ ์๋ค.
const frutis2 = ['๐', '๐'];
const newFruits = fruits.concat(frutis2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐')); // ์๋ ๊ฐ์ ์ถ๋ ฅํ์ฌ -1
console.log(fruits.indexOf('๐')); // ํฌ๋์ ์ธ๋ฑ์ค ๊ฐ์ธ 4 ์ถ๋ ฅ
console.log(fruits.includes('๐')); // array์ ์กด์ฌ ์ ๋ฌด ํ์ธ -> true

// lastIndeoxOf
console.clear();
console.log(fruits);
fruits.push('๐');
console.log(fruits); // ์ฌ๊ณผ ๋งจ ๋ค์ ์ถ๊ฐ
console.log(fruits.indexOf('๐')); // array ์์ ์ฌ๊ณผ๊ฐ ๋ ๊ฐ ์์ง๋ง ์์ ์๋ ์ฌ๊ณผ์ ์ธ๋ฑ์ค๋ฅผ ์ถ๋ ฅ -> 0
console.log(fruits.lastIndexOf('๐')); // ๋ง์ง๋ง ์ฌ๊ณผ์ ์ธ๋ฑ์ค ์ถ๋ ฅ -> 6
