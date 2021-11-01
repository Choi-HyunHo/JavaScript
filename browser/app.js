const title = document.querySelector(".name h1");

function handleTitleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
