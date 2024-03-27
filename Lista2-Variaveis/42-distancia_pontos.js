/*42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. d= √(x2-x1)**2 + (y2-y1)**2  */
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const x1 = Number(input('X1:'))
const y1 = Number(input('Y2:'))
const x2 = Number(input('X2:'))
const y2 = Number(input('Y2:'))

//Processamento
const diff_x = (x2-x1)**2
const diff_y = (y2-y1)**2
const distancia_entre_pontos = (Math.sqrt(diff_x + diff_y)).toFixed(1)

//Saída 
console.log('A distancia entre pontos é igual a', distancia_entre_pontos)
