/*30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45^2 = 2025.*/

import { question } from "readline-sync";


function main(){

    const num = Number(question('Número (entre 1000 e 9999):'))
    
    const doisUltimos = num % 100

    const doisPrimeiros = Math.floor(num/100)

    if (num >= 1000 && num <= 9999){
    if ((doisPrimeiros + doisUltimos)**2 === num){
        console.log(`O número ${num} obedece a característica.`)

    }else{
        console.log(`Não obedece a característica`)
    }
}else{
    console.log('Número inválido, tente novamente entre 1000 e 9999.')
}
}
main()