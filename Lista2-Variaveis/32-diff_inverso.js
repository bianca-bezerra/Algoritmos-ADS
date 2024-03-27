//32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nibble = (input('Digite um numero inteiro de 3 digitos:'))
const n1 = (nibble[0])
const n2 = (nibble[1])
const n3 = (nibble[2])
const numero1 = (n1+n2+n3)
const inverso = (n3+n2+n1)

//Processamento
const soma = (numero1 - inverso)

//Saída
console.log('A diferença entre o numero e seu inverso é',soma)

