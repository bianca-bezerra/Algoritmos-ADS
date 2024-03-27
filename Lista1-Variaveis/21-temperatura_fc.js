//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const temperatura_f = Number(input('Temperatura:'))

//Processamento
const temperatura_c = ((5* temperatura_f - 160)/9).toFixed(1)

//Saída 
console.log('A temperatura em Celsius é', temperatura_c)