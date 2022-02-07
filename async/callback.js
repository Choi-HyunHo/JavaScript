// console.log('1')
// setTimeout(()=>{
//     console.log('2')
// }, 2000)
// console.log('3')

// // callback 동기 
// function printA(print){
//     print()
// }
// printA(()=>{
//     console.log('hello')
// })

// // callback 비동기
// function printB(print, timeout){
//     setTimeout(print,timeout)
// }

// printB(()=>{
//     console.log('good')
// },3000)

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'hyunho' && password === 'coder') ||
                (id === 'who' && password === 'no')
            ) {
                onSuccess(id)
            } else{
                onError(new Error('not found'))
            }
        },2000)
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'hyunho'){
                onSuccess({name: 'hyunho', role:'master'})
            } else{
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(id, password,(user) =>{
    userStorage.getRoles(user, (onSuccess)=>{
        alert(`Hello ${onSuccess.name}, you have a ${onSuccess.role} role`)
    },
    (error)=>{
        console.log(error)
    })
},
(error)=>{
    console.log(error)
})