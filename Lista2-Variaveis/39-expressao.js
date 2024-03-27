//39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R+S)/2 , onde R=(A+B)**2  S=(B+C)*2
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const a = Number(input('A:'))
const b = Number(input('B:'))
const c = Number(input('C:'))

//Processamento
const r = (a + b)**2
const s = (b + c)**2
const d = (r+s)/2

//Saída
console.log('D é equivalente a', d)
