/*27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const seg = Number(input('Segundos:'))

//Processamento
const horas = Math.trunc(seg/3600)
const min = Math.floor(seg % 3600/60)
const seg_restante = seg % 3600 % 60



console.log('Equivale a',horas,'hora(s)',',',min.toFixed(0),'minuto(s) e', seg_restante,'segundo(s)')
