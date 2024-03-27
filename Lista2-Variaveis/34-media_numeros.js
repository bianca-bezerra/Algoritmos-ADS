//34. Leia 3 números, calcule e escreva a média dos números.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const num1 = Number(input('Numero 1:'))
const num2 = Number(input('Numero 2:'))
const num3 = Number(input('Numero 3:'))

//Processamento
const media = (num1 + num2 + num3)/3

//Saída
console.log('A média é', media)
