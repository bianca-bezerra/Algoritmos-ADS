// 1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import {question} from 'readline-sync'

function main(){


const numero1 = (question('Numero 1:'))
const numero2 = (question('Numero 2:'))
const numero3 = (question('Numero 3:'))

const numeros_iguais = verificar_num_iguais(numero1,numero2,numero3)

console.log(numeros_iguais)
    
}
main()

function verificar_num_iguais(n1,n2,n3){
    if ( n1 === n2 && n1 === n3){
        return (`Todos os números são iguais`)   // verifica se todos são iguais a princípio

    } else if (n1 === n2|| n1 === n3){
        return (`Existe pelo menos 2 números iguais`)

    } else if (n2 === n1 || n2=== n3){
        return (`Existe pelo menos 2 números iguais`)

    } else if (n3 === n1 || n3 === n2){
        return (`Existe pelo menos 2 números iguais`)

    } else{
        return (`Não existe números iguais`)
    } 
}
    
