/*43. Um sistema de equações lineares do tipo (ax + by = c) (dx + ey = f), pode ser resolvido segundo mostrado abaixo 
x = (ce - bf)/(ae - bd)   y = (af - cd)/(ae - bd). 
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const a = Number(input('A:'))
const b = Number(input('B:'))
const c = Number(input('C:'))
const d = Number(input('D:'))
const e = Number(input('E:'))
const f = Number(input('F:'))

//Processamento
const x = Number(c*e - b*f)/(a*e - b*d)
const y = Number(a*f - c*d)/(a*e - b*d)


//Saída
console.log(x,',',y)
