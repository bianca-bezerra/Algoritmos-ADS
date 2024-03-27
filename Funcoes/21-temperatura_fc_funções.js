//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C.
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const temperatura_f = Number(input('Temperatura:'))

//Processamento
const temperatura_c = transformar_fahrenheit_para_celsius(temperatura_f)

//Saída 
console.log('A temperatura em Celsius é', temperatura_c)

//Função usada
function transformar_fahrenheit_para_celsius(temperatura_f){
    const temperatura_em_celsius = ((5* temperatura_f - 160)/9).toFixed(1)
    return temperatura_em_celsius
}
}
main()