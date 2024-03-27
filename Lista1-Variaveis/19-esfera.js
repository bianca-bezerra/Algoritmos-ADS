//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const raio = Number(input('Raio(cm):'))

//Processamento
const pi = 3.14
const volume = ((4* pi * (Math.pow(raio,3)))/3).toFixed(1)

//Saída
console.log('O volume é', volume, 'centímetros cubicos')

