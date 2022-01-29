//const list = document.querySelectorAll('li')
//list.forEach(li =>{
   // li.addEventListener('click',()=>{
  //      li.classList.add('click')
 //   })
//})


const ul = document.querySelector('ul')
ul.addEventListener('click',(event)=>{
    if(event.target.tagName = 'li'){
        event.target.classList.add('click')
    }
})