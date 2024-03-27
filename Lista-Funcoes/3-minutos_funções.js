//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import {question} from 'readline-sync'

function main(){
//Entrada
const minutos = Number(question('Minutos:'))

//Processamento
const valor_em_horas = transformar_de_min_para_horas(minutos)
const valor_em_minutos = calcular_min_restante(minutos)

//Saída
console.log(valor_em_horas, 'hora(s) e', valor_em_minutos , 'minuto(s)')

//Funções usadas
function transformar_de_min_para_horas(minutos){
    const horas = Math.floor(minutos/60)
    return horas

}
function calcular_min_restante(minutos){
    const minutos_restantes = minutos % 60
    return minutos_restantes

}

}
main()
