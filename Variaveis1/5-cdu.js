//5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
import * as readsync from 'readline-sync'

//Entrada
const numero = Number(readsync.question('Numero:'))

//Processamento
const centena = Math.floor(numero/100)
const resto = numero % 100 

const dezena = Math.floor(resto/10)
const unidade = resto % 10

const soma = centena + dezena + unidade

//Saída
console.log('A soma de seus elementos é igual a', soma)