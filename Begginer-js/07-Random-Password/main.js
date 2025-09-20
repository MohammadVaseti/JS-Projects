let range = document.querySelector('.range')
let  text = document.querySelector('.text')
let span = document.querySelector('span')
let btn = document.querySelector('button')
range.max = 37

range.addEventListener('input' , function(){
  span.innerHTML = range.value
  let string = 'abcde#fghijklmnopqr123456tuvwxyz7890@'
  let newStr = ''
  for(let i =0 ; i<range.value ; i++){
    let rand = Math.floor(Math.random()*string.length)
    newStr += string.charAt(rand)
  }
text.value = newStr

})


btn.addEventListener('click' ,()=>{
  navigator.clipboard.writeText(text.value)
  alert('password coppied')
})

