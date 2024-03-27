//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const meses = Number(input('Meses:'))

//Processamento
const anos = Math.floor(meses/12)
const mese_s = ((meses/12 - anos) * 12).toFixed(0)

//Saída
console.log('Equivale a', anos, 'ano(s) e', mese_s,'mes(es)')