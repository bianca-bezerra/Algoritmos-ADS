/*4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import { question } from "readline-sync";

function main(){

const numero = Number(question('Numero (2 digitos):'))

const verificação = verificar_dezena_unidade(numero)

console.log(verificação)
}
main()

function verificar_dezena_unidade(numero){
    if (Math.floor(numero/10) === numero % 10){
        return (`Algarismo de dezena e de unidade são iguais`)
    }else{
        return (`Algarismo de dezena e de unidade são diferentes`)
    }
}
