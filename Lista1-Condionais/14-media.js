//14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { question } from "readline-sync";

function main(){

const num1 = Number(question('Numero 1:'))
const num2= Number(question('Numero 2:'))
const num3 = Number(question('Numero 3:'))
const num4 = Number(question('Numero 4:'))
const num5 = Number(question('Numero 5:'))

const media = calcular_media(num1,num2,num3,num4,num5)

console.log(`A média dos números é ${media}`)

console.log(`>>> Os números maiores que a média são:`)
    
}
main()

function calcular_media(n1,n2,n3,n4,n5){
    const media = ((n1 + n2 + n3 + n4 + n5)/5)
    return media
}

function verificar_num_maior_qamedia(numero){
    if (numero > media){
        return true
    } else{
        return false
    }
}
if (verificar_num_maior_qamedia(num1,media)){
    console.log(num1)
    
}
if (verificar_num_maior_qamedia(num2,media)){
    console.log(num2)
    
}
if (verificar_num_maior_qamedia(num3,media)){
    console.log(num3)
    
}
if (verificar_num_maior_qamedia(num4,media)){
    console.log(num4)
    
}
if (verificar_num_maior_qamedia(num5,media)){
    console.log(num5)
    
}
