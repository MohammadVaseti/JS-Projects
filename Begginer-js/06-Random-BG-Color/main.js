let btn = document.querySelector('button')
let body = document.querySelector('body')

function randNum () {
  return Math.floor(Math.random()*256)
}

btn.addEventListener('click' , ()=>{
  body.style.backgroundColor = `rgb(${randNum()},${randNum()},${randNum()})`


})