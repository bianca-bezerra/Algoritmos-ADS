//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_m = Number(input('Valor(m):'))

//Processamento
const valor_km = Math.floor(valor_m/1000)
const valor_m2 = ((valor_m/1000 - valor_km) * 1000).toFixed(1)

//Saída 
console.log('Equivale a', valor_km, 'km e', valor_m2, 'm')