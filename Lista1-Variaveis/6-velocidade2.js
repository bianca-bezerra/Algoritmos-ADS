// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s.
import * as readsync from 'readline-sync'

//Entrada
const velocidade_kmh = Number(readsync.question('Velocidade(km/h):'))

//Processamento
const velocidade_ms = (velocidade_kmh/3.6).toFixed(1)

//Saída
console.log('Essa velocidade equivale a',velocidade_ms, 'm/s')
