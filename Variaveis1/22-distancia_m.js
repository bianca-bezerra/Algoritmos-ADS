//22. Leia um valor em km, calcule e escreva o equivalente em m.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_km = Number(input('Valor(km):'))

//Processamento
const valor_m = valor_km * 1000

//Saída
console.log('O equivalente em metros é', valor_m)
