let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mul = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('A soma é: ' + sum)
alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + mul)
alert('A divisão é: ' + div)
alert('O resto da divisão é: ' + rest)