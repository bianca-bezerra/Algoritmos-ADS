/*38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
em forma de fração*/

import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const num1 = Number(input('Numerador 1: '))
const den1 = Number(input('Denominador 1: '))
const num2 = Number(input('Numerador 2: '))
const den2 = Number(input('Denominador 2: '))

//Processamento 
const denominador = den1 * den2
const numerador = ((denominador/den1)*num1) + ((denominador/den2)*num2)

//Saída
console.log('Resultado:', numerador+'/'+denominador)