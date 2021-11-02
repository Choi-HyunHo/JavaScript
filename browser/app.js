const title = document.querySelector(".name h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse is here";
}

function handleMouseLeave(){
    title.innerText = "mouse is over";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

