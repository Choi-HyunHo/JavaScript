console.log('1')
setTimeout(()=>{
    console.log('2')
}, 2000)
console.log('3')

// callback 동기 
function printA(print){
    print()
}
printA(()=>{
    console.log('hello')
})

// callback 비동기
function printB(print, timeout){
    setTimeout(print,timeout)
}

printB(()=>{
    console.log('good')
},3000)