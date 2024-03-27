// 2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import * as readsync from 'readline-sync'

//Entrada
const horas = Number(readsync.question('Horas:'))
const minutos = Number(readsync.question('Minutos:'))

//Processamento

const equivalente = (horas * 60) + minutos

//Saída
console.log('O equivalente é' , equivalente, 'minutos')

