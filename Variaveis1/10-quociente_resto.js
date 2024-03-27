//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const num1 = Number(input('Número 1:'))
const num2 = Number(input('Número 2:'))

//Processamento
const quociente = Math.floor(num1/num2)
const resto = num1 % num2

//Saída
console.log('O quociente é',quociente, 'e o resto é', resto)

