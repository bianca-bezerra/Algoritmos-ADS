// 8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const num1 = Number(input('Numero 1:'))
const num2 = Number(input('Numero 2:'))

//Processamento
const resposta = (num1 + num2)/(num1 - num2)

//Saída
console.log('A divisão da soma pela subtração dos números lidos é', resposta)

