const title = document.querySelector(".name h1");

function handleTitleClick(){
    const clickedClass = "clicked";
  if(title.classList.contains(clickedClass)){ // classList 가 clicked를 포함하고 있는지만을 확인
    //만약 clickedClass title의 classList에 포함되어 있다면
      title.classList.remove(clickedClass);
  } else {
    //만약 clickedClass title의 classList에 포함되어 있지 않다면,
      title.classList.add(clickedClass);
  }
}


title.addEventListener("click", handleTitleClick);
