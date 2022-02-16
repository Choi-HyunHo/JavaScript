// async & await

// 1. async 
async function fetchUser(){
    // 데이터를 받아오는데 10초 정도 걸린다고 가정
    return 'hyunho'
}

const user = fetchUser()
user.then(console.log)

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function getApple(){
    await delay(2000)
    return '🍎'
}

async function getBanana(){
    await delay(1000)
    return '🍌'
}

async function pick(){
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'))
}

pick().then(console.log);


function pickOne(){
    return Promise.race([getApple(), getBanana()])
}

pickOne().then(console.log)