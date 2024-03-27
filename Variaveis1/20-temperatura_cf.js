//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const temperatura_c = Number(input('Temperatura:'))

//Processamento
const temperatura_f = (9 * temperatura_c + 160)/5

//Saída
console.log('A tempertura em Fahrenheit é', temperatura_f)

