'use strict';
// Object-oriented programming
// class : template
// object : instance of a class

// 1. class 선언
class Person{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const hyunho = new Person('hyunho', 20);
console.log(hyunho.name);
console.log(hyunho.age);
hyunho.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
        // get을 설정해서 메모리에 올라가있는 데이터를 읽어오지 않고 get 호출
    }

    get age() {
        // 값을 리턴
        return this._age;
    }

    set age(value){
        // 값을 설정
        //if (value < 0){
        //    throw Error(`age can not be negative`);
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// 3. Public, Private
// 출시된지 얼마 안되서 많이 사용하지는 않는다!
class Experiment{
    publicField = 2; // 외부에서 접근 가능
    #privateField = 0; // 클래스 내부에서만 값이 보이고 접근 가능, 클래스 외부에서는 x
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined 호출

// 4. Static
// 들어오는 데이터에 상관없이 
// 아직 사용하지 않기 때문에 나중에 다시 보자!

// 5. Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

// extends 사용!!
class Rectangle extends Shape{}
class Triangle extends Shape{
    // 오버라이딩
    draw(){
        super.draw(); // 부모의 메소드 호출
        console.log('★');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class chechking : instanceof
// 왼쪽의 오브젝트가 오른쪽 클래스의 오브젝트인지 확인할 때
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
