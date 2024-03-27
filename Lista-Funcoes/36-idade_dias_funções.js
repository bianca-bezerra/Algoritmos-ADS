//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import prompt from 'prompt-sync'

function main(){

//Entrada
const input = prompt()
const idade_em_anos = Number(input('Digite sua idade em anos:'))
const idade_em_meses = Number(input('Digite sua idade em meses:'))
const idade_em_dias = Number(input('Digite sua idade em dias:'))

//Processamento
const anos_para_dias = transformar_anos_em_dias(idade_em_anos)
const meses_para_dias = transformar_meses_em_dias(idade_em_meses)
const idade_final_em_dias = anos_para_dias + meses_para_dias + idade_em_dias

//Saída
console.log('A idade em dias é', idade_final_em_dias)

//Funções usadas
function transformar_anos_em_dias(idade_em_anos){
    const anos_em_dias = (idade_em_anos*365)
    return anos_em_dias
}
function transformar_meses_em_dias(idade_em__meses){
    const meses_em_dias = (idade_em__meses*30)
    return meses_em_dias
}
}
main()