let button = document.querySelector('button')
let div = document.querySelector('.bottom')
let input = document.querySelector('input')
let iner = document.querySelector('.iner')


button.addEventListener('click' , function() {
  let newP = document.createElement('p')
  newP.innerHTML = input.value
  iner.appendChild(newP)

  newP.style.cursor = 'pointer'

  input.value = ''

newP.addEventListener('click' , function () {
  newP.style.textDecoration ='line-through'
})

newP.addEventListener('dblclick' , function () {
  newP.style.display = 'none'
})

})

