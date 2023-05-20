const active = document.querySelector('.active')
const timee = document.querySelector('.timer')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')

document.addEventListener('DOMContentLoaded', timer);

var time = 0
function timer (){
setInterval(function(){
  time++
},300)
}

active.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
one.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
two.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
three.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
four.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
five.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
six.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
seven.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})
eight.addEventListener('click',function(){
  alert(time+' Saniye zaman geçirdiniz...')
})