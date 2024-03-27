//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { question } from "readline-sync";

function main(){

const numero = Number(question('Numero:'))

const par_ou_impar = verificar_par_impar(numero)

console.log(par_ou_impar)
}
main()

function verificar_par_impar(numero){
    if (numero % 2 === 0){
        return (`O número é par!`)

    } else{
        return (`O número é ímpar!`)
    }
}
