//16. Leia o valor do lado de um quadrado, calcule e escreva sua área.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const lado = Number(input('Lado do quadrado(m):'))

//Processamento
const area = lado**2

//Saída
console.log('A área equivale a', area, 'metros')


