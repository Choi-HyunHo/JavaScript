function first(){
    console.log('first')
}

function second(){
    console.log('second')
}

function thrid(){
    console.log('thrid')
}

first()
setTimeout(()=> second(),2000)
thrid()