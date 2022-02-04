function second(){
    console.log('hello');
    return;
}

function first(){
    second()
    return;
}

function main(){
    first()
    return;
}

main()


function End(){
    End()
}

End()