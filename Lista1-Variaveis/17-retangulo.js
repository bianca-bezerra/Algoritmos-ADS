//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área.
import prompt from 'prompt-sync'

//Entrando
const input = prompt()
const base = Number(input('Base(m):'))
const altura = Number(input('Altura(m):'))

//Processamento
const area = base * altura 

//Saída 
console.log('A área mede', area ,'metros quadrados')
