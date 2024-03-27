// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s.
import { question } from "readline-sync"

function main(){
//Entrada
const velocidade_kmh = Number(question('Velocidade(km/h):'))

//Processamento
const velocidade_ms = converter_kmh_para_ms(velocidade_kmh)

//Saída
console.log('Essa velocidade equivale a',velocidade_ms, 'm/s')

//Função usada
function converter_kmh_para_ms(velocidade_kmh){
    const conversao = (velocidade_kmh/3.6).toFixed(1)
    return conversao
}
}
main()
