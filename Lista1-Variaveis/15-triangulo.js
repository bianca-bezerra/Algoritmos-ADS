//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const base = Number(input('Base(m):'))
const altura = Number(input('Altura do triângulo(m):'))

//Processamento
const area = (base*altura)/2

//Saída
console.log('A área mede', area ,'metros quadrados')