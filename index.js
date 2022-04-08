
let display = document.querySelector('#display')
let buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button){
    button.addEventListener('click', displayValue)
})



function displayValue(e){ 
     
       display.innerHTML += e.target.textContent;
}

  let equal = document.querySelector('#equal')
  equal.addEventListener('click', calculate)


function calculate(){
  display.innerHTML = eval(display.innerHTML)
}

let clr = document.querySelector('#clear')

clr.addEventListener('click', clear)

function clear(e){
  display.innerHTML = ''
}

// const advanceMt = document.querySelector('#advance')

// advanceMt.addEventListener('click', widen)

// function widen(e){
//    e.target.classList.add('widen')
// }