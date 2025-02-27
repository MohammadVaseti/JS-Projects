let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')


let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')

let h1 = document.querySelector('h1')
let body = document.querySelector('body')


input1.addEventListener('input' , function(){
  body.style.backgroundColor = `rgb(${input1.value},${input2.value},${input3.value})`
  a.innerHTML = input1.value

})



input2.addEventListener('input' , function(){
  body.style.backgroundColor = `rgb(${input1.value},${input2.value},${input3.value})`
  b.innerHTML = input2.value

})

input3.addEventListener('input' , function(){
  body.style.backgroundColor = `rgb(${input1.value},${input2.value},${input3.value})`
  c.innerHTML = input3.value

})



