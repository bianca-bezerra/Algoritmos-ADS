//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import * as readsync from 'readline-sync'

//Entrada
const minutos = Number(readsync.question('Minutos:'))

//Processamento
const valor_em_horas = Math.floor(minutos/60)
const valor_em_minutos = minutos % 60

//Saída
console.log(valor_em_horas, 'hora(s) e', valor_em_minutos , 'minuto(s)')
