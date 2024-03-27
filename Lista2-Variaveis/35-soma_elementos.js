//35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nibble = (input('Numero(4 dígitos):'))
const n1 = Number(nibble[0])
const n2 = Number(nibble[1])
const n3 = Number(nibble[2])
const n4 = Number(nibble[3])

//Processamento
const soma = (n1+n2+n3+n4)

//Saída
console.log('Soma dos elementos:',soma)