const age = parseInt(prompt("How old are you?"));


if(isNaN(age)){
    //condition === true
    //조건이 true 일 경우, 여기서 끝난다. 
    console.log("Please write a number")
}else{
    //condition ===false
    console.log("Thank you for writing your age.")
}