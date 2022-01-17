const calculator ={
    add : function (a, b) {
        return a + b;
    },

    minus : function (a, b){
        return a - b;
    },

    div : function (a, b){
        return a / b;
        console.log("Hello"); // 실행되지 않는다!!
    },
};

const resultAdd = calculator.add(10,5);
const resultMinus = calculator.minus(resultAdd, 5);
const resultDiv = calculator.div(resultMinus, 5);