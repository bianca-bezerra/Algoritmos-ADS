//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nibble =(input('Digite um número de 3 dígitos:'))
const n1 = (nibble[0])
const n2 = (nibble[1])
const n3 = (nibble[2])

//Proceesamento
const inverso = n3+n2+n1

//Saída
console.log('O inverso do número é',inverso)

