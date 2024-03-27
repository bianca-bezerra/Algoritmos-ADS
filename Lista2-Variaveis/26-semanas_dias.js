//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const dias = Number(input('Dias:'))

//Processamento
const semana = Math.floor(dias/7)
const dia2 = ((dias/7 - semana) * 7).toFixed(1)

//Saída
console.log('Equivale a',semana,'semana(s) e', dia2,'dia(s)')