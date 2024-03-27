/*11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3. */

import { question } from "readline-sync";

function main(){

const opção = Number(question('Opção (1,2 ou 3):'))
const num1 = Number(question('Número 1:'))
const num2 = Number(question('Número 2:'))
const num3 = Number(question('Número 3:'))

const apresentar = imprimir_numeros(opção,num1,num2,num3)
console.log(apresentar)

}
main()


function imprimir_numeros(opção,num1,num2,num3){
    if (opção === 1){
    return (`${num1}`)

    }else if ( opção === 2){
        return (`${num2}`)
    }else{
        return (`${num3}`)
    }
}
