//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nibble = (input('Digite um numero inteiro de 3 digitos:'))
const n1 = (nibble[0])
const n2 = (nibble[1])
const n3 = (nibble[2])
const numero1 = Number(n1+n2+n3)
const inverso = Number(n3+n2+n1)

//Processamento
const soma = (numero1 + inverso)

//Saída
console.log('A soma do número com seu inverso é',soma)