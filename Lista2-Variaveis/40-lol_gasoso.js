/*40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros)*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const anos_fumando = Number(input('Numero de anos fumando:'))
const cigarros_por_dia = Number(input('Numero de cigarros fumados por dia:'))
const preco_carteira = Number(input('Valor de uma carteira de cigarro:'))

//Processamento
const quant_carteira_dia = cigarros_por_dia/20
const quant_carteira_ano = quant_carteira_dia*365
const valor_total_gasto = (quant_carteira_ano * preco_carteira).toFixed(1)

//Saída
console.log('A quantidade de dinheiro gasta por um fumante é R$', valor_total_gasto)