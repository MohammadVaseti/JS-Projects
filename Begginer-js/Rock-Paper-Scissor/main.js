
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')

let cmRes = document.querySelector('.cmRes')
let youRes = document.querySelector('.youRes')
let h1 = document.querySelector('h1')

let com = document.querySelector('.com')
let you = document.querySelector('.you')




let cmScore =0

let youScore = 0










function randNum () {
let array = [ 'rock' , 'paper' , 'scissor']
let num = Math.floor(Math.random()*3)
return array[num]

}

 let cmInput =  randNum()

rock.addEventListener('click' , function () {
  

  youRes.innerHTML = 'rock'.toUpperCase()
  cmRes.innerHTML = cmInput.toUpperCase()
  if(cmInput == 'rock'){
    h1.innerHTML = 'draw'
    h1.style.backgroundColor = 'yellow'


  }
  else{

    if(cmInput == 'scissor' ) {

      h1.innerHTML = ' win'
      h1.style.backgroundColor = 'green'
      youScore++ ;
      you.innerHTML += youScore



    }
    else if (cmInput == 'paper'){
      h1.innerHTML = 'lose'
      h1.style.backgroundColor = 'red'
      cmScore++
      com.innerHTML += cmScore ;





    }
  }

})


paper.addEventListener('click' , function () {
  youRes.innerHTML = 'paper'.toUpperCase()
  cmRes.innerHTML = cmInput.toUpperCase()


  your='paper'
  if(cmInput== 'paper'){
    h1.innerHTML = 'draw'
    h1.style.backgroundColor = 'yellow'

  }
  else{
    if(cmInput == 'rock' ) {
      h1.innerHTML = ' win'
      h1.style.backgroundColor = 'green'
      youScore++ ;
      you.innerHTML += youScore





    }
    else if (cmInput == 'scissor'){
      h1.innerHTML = 'lose'
      h1.style.backgroundColor = 'red'
      cmScore++
      com.innerHTML += cmScore ;





    }
  }

})


scissor.addEventListener('click' , function () {

  youRes.innerHTML = 'scissor'.toUpperCase()
  cmRes.innerHTML = cmInput.toUpperCase()


  your='scissor'
  if(cmInput=='scissor'){
    h1.innerHTML = 'draw'
    h1.style.backgroundColor = 'yellow'


  }
  else{
    if(cmInput == 'rock' ) {
      h1.innerHTML = 'lose'
      h1.style.backgroundColor = 'red'
      cmScore++
      com.innerHTML += cmScore ;





    }
    else if (cmInput == 'paper'){
      h1.innerHTML = 'win'
      h1.style.backgroundColor = 'green'
      youScore++ ;
      you.innerHTML += youScore





    }
  }



})








