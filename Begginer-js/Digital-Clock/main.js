
setInterval(function(){
  let time = new Date()
  let hours = document.querySelector('.hour')
  hours.innerHTML = time.getHours()
  let min = document.querySelector('.min')
  min.innerHTML = time.getMinutes()
  let sec = document.querySelector('.sec')
  sec.innerHTML = time.getSeconds()
  if(hours.innerHTML < 10){
    hours.innerHTML = '0' + time.getHours()
  }
  if(sec.innerHTML < 10){
    sec.innerHTML = '0' + time.getSeconds()
  } 
  if(min.innerHTML < 10){
    min.innerHTML = '0' + time.getMinutes()
  }
} , 1000)

