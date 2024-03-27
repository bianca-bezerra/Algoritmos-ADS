/*45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_total = Number(input('Valor solicitado:'))

//Processamento
const nota_50 = Math.floor(valor_total/50)
const nota_10 = Math.floor((valor_total % 50)/10)
const resto = (valor_total % 50)
const nota_5 = Math.floor((resto % 10)/5)
const nota_1 = (((resto % 10/5)-nota_5)*5).toFixed(1)



//Saída
console.log('Notas de 50:',nota_50)
console.log('Notas de 10:',nota_10)
console.log('Nota de 5:', nota_5)
console.log('Moeda de 1 real:', nota_1)