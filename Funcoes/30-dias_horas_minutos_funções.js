//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.
import prompt from 'prompt-sync'

function main(){

//Entrada
const input = prompt()
const minutos = Number(input('Minutos:'))

//Processamento
const dias = calcular_dias(minutos)
const horas = calcular_horas(minutos)
const min = calcular_min_resto(minutos)

//Saída
console.log(`Esse número equivale a ${dias} dia(s), ${horas} hora(s) e ${min} minuto(s)`)

//Funções usadas
function calcular_dias(minutos){
    const dia = Math.floor(minutos/1440)
    return dia
}
function calcular_horas(minutos){
    const hora = Math.floor((minutos%1440)/60)
    return hora
}
function calcular_min_resto(minutos){
    const minuto = minutos % 1440 % 60
    return minuto
}

}
main()