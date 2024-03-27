//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import * as readsync from 'readline-sync'

//Entrada
const valor_em_dolar = Number(readsync.question('Valor em dolar:'))
const valor_do_dolar = Number(readsync.question('Dolar:'))

//Processamento
const equivalente = valor_do_dolar * valor_em_dolar

//Saída
console.log('O equivalente é', 'R$', equivalente)