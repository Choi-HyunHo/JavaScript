// function calculate(command, a, b)

function add(a, b){
    if(a < 10 && b < 10){
        return a + b;
    } else {
        console.log('restart');
    }
}
const result =  add(7,4);
console.log(`add: ${add(7, 4)}`);

function divide(x, y){
    return x / y;
}
const answer = divide(10,2);
console.log(`divide: ${divide(10, 2)}`);