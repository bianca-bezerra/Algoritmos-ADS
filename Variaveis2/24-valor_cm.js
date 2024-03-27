//24. Leia um valor em m, calcule e escreva o equivalente em cm.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_m = Number(input('Valor(m):'))

//Processamento
const valor_cm = valor_m * 100

//Saída
console.log('O equivalente em cm é', valor_cm)
