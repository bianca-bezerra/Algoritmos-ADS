//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const idade_em_anos = Number(input('Digite sua idade em anos:'))
const idade_em__meses = Number(input('Digite sua idade em meses:'))
const idade_em_dias = Number(input('Digite sua idade em dias:'))

//Processamento
const anos_meses_para_dias = (idade_em_anos*365)+(idade_em__meses*30)
const idade_final_em_dias = anos_meses_para_dias + idade_em_dias

//Saída
console.log('A idade em dias é', idade_final_em_dias)