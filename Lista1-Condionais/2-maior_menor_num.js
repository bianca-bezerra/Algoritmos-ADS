//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { question } from "readline-sync";

function main(){


const num1 = Number(question('Numero 1:'))
const num2 = Number(question('Numero 2:'))

const situacao = verificar_menor_maior(num1,num2)

console.log(situacao)
}
main()

function verificar_menor_maior(num1,num2){
    if (num1 > num2){
        return (`${num1} é o maior e ${num2} é o menor`)
    }
    else{
        return  (`${num2} é o maior e o ${num1} é o menor`)
    }
}
