'use strict';

// object = { key : value};
// 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const hyunho = {name: 'hyunho' , age: 4};
print(hyunho);

// JS 는 런타임 동안 타입이 결정되기 때문에 가능
// 하지만 가능한 이렇게 하지는 말자
hyunho.hasJob = true;
console.log(hyunho.hasJob);

delete hyunho.hasJob;
console.log(hyunho.hasJob);

// 2. Computed properties
// 접근 방법
// 주의점, string 타입으로 지정해서 받아야 한다!
console.log(hyunho.name); // hyunho 출력
console.log(hyunho['name']); // hyunho 출력, 실시간으로 원하는 key의 값을 받고 싶을 때 주로 사용
hyunho['hasJob'] = true;
console.log(hyunho.hasJob); // 다시, true로 출력된다.

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('hyunho', 25);
console.log(person4);

// 4. Constuctor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator
// 해당하는 object 안에 key가 존재하는지 확인
console.log('name' in hyunho);
console.log('age' in hyunho);
console.log('random' in hyunho); // false 출력, 정의하지 않기 때문

// 6. for..in vs for..of
// for (key in obj)
console.clear(); 
for (const key in hyunho){
    // hyunho가 가지고 있는 key 들이 블럭을 돌 때마다 key라는 지역변수에 할당된다.
    console.log(key);
}

// for (value of iterable)
// 배열과 같은 순차적으로 iterable한 것을 사용할 때
const array = [1,2,3,4];
for(const value of array){
    // array의 모든 값들이 value에 할당되어 순차적으로 나온다
    console.log(value);
}

// 7. cloning
const user = { name: 'hyunho', age: '25'};
const user2 = user;
user2.name = 'coder';
console.log(user); // coder 출력

// 다른 방법
const user3 = Object.assign({}, user);
console.log(user3);