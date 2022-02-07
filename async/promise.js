// 자바스크립트 안에 내장 되어있는 오브젝트
// 비동기를 위해서 콜백 함수 대신 유용하게 사용된다. 
// 1. state : 프로세스가 무거운 기능을 수행하고 있는 중 인지, 아니면 다 완료가 되어 성공했는지,
// 이런 상태에 대해서 이해
// 2. 제공자와 소비자 : 제공하는 사람과, 제공된 데이터를 사용하는 사람의 차이점

// producer
const promise = new Promise((resolve, reject)=>{
    // heavy work (network, read files)
    console.log('doing someting...')
    setTimeout(() => {
        resolve('hyunho')
        reject(new Error('no network'))
    }, 2000)
})

// consumers : then, catch, finally
// 
promise
    .then((value)=>{
        console.log(value)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(()=>{
        console.log('finally')
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(num - 1)
            }, 1000)
        })
    })
    .then(num => console.log(num))

// 4. error handling
const getHen = ()=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>
            resolve('🐔')
        ,1000)
    })


const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>
            reject(new Error(`${hen}=>🥚`))
        ,1000)
    })


const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>
            resolve(`${egg}=>🍳`)
        ,1000)
    })


getHen() 
    .then(getEgg)
    .catch(error =>{ // getEgg를 받아올 때 문제가 생긴다면
        return '🍕'
    })
    .then(cook)
    .then(console.log)
    .catch(console.log)