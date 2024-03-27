/*41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const custo_de_fabrica = Number(input('Custo de fabrica:'))

//Processamento
const custo_do_consumidor = custo_de_fabrica + (custo_de_fabrica*0.28) + (custo_de_fabrica*0.45)

//Saída
console.log('Custo do consumidor: R$',custo_do_consumidor)
