//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const raio = Number(input('Raio:'))

//Processamento
const pi = 3.14
const comprimento = raio * pi * 2


//Saída
console.log('O comprimento equivale a' , comprimento)

