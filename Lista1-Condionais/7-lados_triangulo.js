/*7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).*/

import { question } from "readline-sync";

function main() {
    const lado1 = Number(question('Lado 1:'))
    const lado2 = Number(question('Lado 2:'))
    const lado3 = Number(question('Lado 3:'))

    if (lado1 > 0 && lado2 > 0 && lado3 > 0){

        if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
        console.log('Não forma triângulo!')

        }else{
            console.log('Forma triângulo')

            const tipo = verificar_tipo(lado1,lado2,lado3)
            console.log(tipo)
        }
    }else{
        console.log('ERRO! Tente novamente com lado maior que 0.')
    }
}
main()

function verificar_tipo(l1,l2,l3){
    if ( l1 === l2 && l1 === l3){
        return ('Triângulo equilátero')
    }
    if ( l1 === l2 || l1 === l3 || l2 === l3 || l3 === l2){
        return ('Triângulo isoscéles')
    }
    if (l1 !== l2 && l1 !== l3 && l2 !== l3 && l3 !== l1){
        return ('Triângulo escaleno')
    }
    
}
