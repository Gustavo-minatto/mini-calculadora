let firstNumber = prompt("Digite o primeiro numero")
let secondNumber = prompt("Digite o segundo numero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mul = firstNumber * secondNumber
const div = firstNumber / secondNumber
const resto = firstNumber % secondNumber

alert('A soma é: ' + sum)
alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + mul)
alert('A divisão é: ' + div)
alert('O resto é: ' + resto)


if(sum % 2 == 0){
  alert('A soma dos dois numéros é par: ' + sum)
}else {
  alert('A soma dos dois numéros é impar: ' + sum)
}


if(firstNumber == secondNumber ){
  alert('Os números inseridos são iguais')
}  else{
  alert('Os números inseridos são diferentes')
}