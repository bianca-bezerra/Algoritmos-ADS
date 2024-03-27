//39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R+S)/2 , onde R=(A+B)**2  S=(B+C)*2
import prompt from 'prompt-sync'

function main(){

//Entrada
const input = prompt()
const a = Number(input('A:'))
const b = Number(input('B:'))
const c = Number(input('C:'))

//Processamento
const r = calcular_r(a,b)
const s = calcular_s(b,c)
const d = calcular_d(r,s)

//Saída
console.log('D é equivalente a', d)

//Funções usadas
function calcular_r(a,b){
    const resultado_r = (a + b)**2
    return resultado_r
}
function calcular_s(b,c){
    const resultado_s = (b + c)**2
    return resultado_s
}
function calcular_d(r,s){
    const resultado_d = (r+s)/2
    return resultado_d
}
}
main()
