//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const num1 = Number(input('Numero 1:'))
const num2 = Number(input('Numero 2:'))
const num3 = Number(input('Numero 3:'))

//Processamento
const soma = num1 + num2
const diferenca = num2 - num3

//Saída
console.log('A soma dos 2 primeiros é', soma, 'e a diferença entre os 2 últimos é', diferenca)