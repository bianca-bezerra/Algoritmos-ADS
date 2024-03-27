//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { question } from "readline-sync";

function main(){

//Entrada
const num1 = Number(question('Numero 1:'))
const num2 = Number(question('Numero 2:'))
const num3 = Number(question('Numero 3:'))

const maior_numero = verificar_num_maior(num1,num2,num3)

console.log(maior_numero)
    
}
main()

function verificar_num_maior(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        return (`O maior número é o ${num1}`)
    }
    else if (num2 > num1 && num2 > num3){
        return (`O maior número é o ${num2}`)
    }
    else{
        return (`O maior número é o ${num3}`)
    }
}
