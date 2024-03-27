//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_em_real = Number(input('Valor em real:'))

//Processamento
const porcentagem = valor_em_real/100 * 70

//Saída
console.log('70% desse valor é', porcentagem)


