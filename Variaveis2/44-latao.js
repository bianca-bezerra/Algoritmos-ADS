//44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const quant_latao = Number(input('Quantidade de latão(kg):'))

//Processamento
const cobre = 0.7*quant_latao
const zinco = 0.3*quant_latao
const composicao = cobre + zinco

//Saída
console.log('Equivale a', cobre,'kg de cobre e', zinco,'kg de zinco')