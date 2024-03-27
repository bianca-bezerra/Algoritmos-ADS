//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const minutos = Number(input('Minutos:'))

//Processamento
const dias = Math.floor(minutos/1440)
const horas = Math.floor((minutos%1440)/60)
const min = minutos % 1440 % 60

//Saída
console.log('Equivale a',minuto_s,'minuto(s)', horas,'hora(s) e', dias,'dia(s)')
