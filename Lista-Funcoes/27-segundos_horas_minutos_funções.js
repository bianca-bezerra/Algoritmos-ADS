/*27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde*/
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const seg = Number(input('Segundos:'))

//Processamento
const horas = transformar_segundo_em_horas(seg)
const min = transformar_seg_restante_em_min(seg)
const seg_restante = calcular_segundos_restante(seg)


//Saída
console.log('Equivale a',horas,'hora(s)',',',min.toFixed(0),'minuto(s) e', seg_restante,'segundo(s)')

//Funções usadas
function transformar_segundo_em_horas(seg){
    const segundos_em_minutos = Math.trunc(seg/3600)
    return segundos_em_minutos

}
function transformar_seg_restante_em_min(seg){
    const resto = Math.floor(seg % 3600/60)
    return resto
}
function calcular_segundos_restante(seg){
    const segundos_restante = seg % 3600 % 60
    return segundos_restante
}
}
main()
