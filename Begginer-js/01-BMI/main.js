let kg = document.querySelector('#kg')
let cm = document.querySelector('#cm')

let pkg = document.querySelector('.kg')
let pc = document.querySelector('.cm')
let h1 = document.querySelector('h1')
let final = document.querySelector('.res')

h1.innerHTML = 24

kg.addEventListener('input' , ()=>{
  pkg.innerHTML = kg.value + ' kg'
  let res = kg.value/(cm.value**2)*(10**4)

h1.innerHTML = res

if(res<18){
  h1.style.color = 'gold'
  final.innerHTML = 'underweight'
}
else if (res>=18 && res<=24){
  h1.style.color = 'green'
  final.innerHTML = 'normal'


}
else if (res>24){
  h1.style.color = 'red'
  final.innerHTML = 'overweight'


}

})

cm.addEventListener('input' , ()=>{
  pc.innerHTML = cm.value + ' cm'
  let res = (kg.value/(cm.value)**2) *10**4

h1.innerHTML = res

if(res<18){
  h1.style.color = 'gold'
  final.innerHTML = 'underweight'

}
else if ( res>=18 && res<=24){
  h1.style.color = 'green'
  final.innerHTML = 'normal'

  

}
else if (res>24){
  h1.style.color = 'red'
  final.innerHTML = 'overweight'


}

})





