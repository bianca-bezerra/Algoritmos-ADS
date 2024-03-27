//31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nibble = input('Digite um numero de 4 digitos:')
const n1= Number(nibble[0])
const n2 = Number(nibble[1])
const n3= Number(nibble[2])
const n4 = Number(nibble[3])

//Processamento
const decimal = (n1 * 8) + (n2 * 4) + (n3 * 2) + (n4 * 1)

//Saída
console.log('O equivalente é', decimal)
