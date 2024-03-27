//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
/*corresponde*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const horas = Number(input('Horas:'))

//Processamento
const semana = Math.floor(horas/168)
const dias = horas - (168 * semana)
const hora_s = 24 % dias

console.log('Equivale a', semana,'semana(s)',dias,'dia(s) e',hora_s,'hora(s)')
