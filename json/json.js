// 1. object to json
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple','banana'])
console.log(json)

const rabbit = {
    name : 'coco',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : ()=>{
        console.log(`${name} can jump`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]); // 내가 원하는 속성만 골라서 JSON으로 변환 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value)=>{

});

// 함수는 json에 포함되지 않는다 . 함수는 object에 있는 데이터가 아니어서 제외
// symbol 과 같은 자바스크립트 자체적으로 들어있는 특별한 데이터도 json에서 제외

// 2. JSON to object

json = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value)=>{
     return key === 'birthDate' ? new Date(value) : value;
 })
console.log(obj)
rabbit.jump() // 사용이 가능한 이유는 JSON으로 변환 할 때 함수가 포함되어 있지 않았기 때문
//obj.jump() // 에러 발생

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate())


// 변환한 object는 string으로 만들어진 json으로부터 다시 object로 만들었기 때문에
// 다시 JSON으로부터 object로 만든 것에는 (JSON에서 클라이언트로 올 때는) 사용할 수 있도록 실체화 해야한다.