let button = document.querySelector(".btn");
let input = document.querySelector("input");
let divContent = document.querySelector(".content");




button.addEventListener('click' , function () {
  let para = document.createElement('p')
  divContent.appendChild(para)
  para.innerHTML = input.value
  input.value = ''


  para.addEventListener('click' , function() {
    para.style.display = 'none'
  })
})















