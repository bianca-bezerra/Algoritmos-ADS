/*19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2).Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/

import { question } from "readline-sync";
 
function main(){

    const altura = Number(question('Altura(m):'))
    const peso = Number(question('Peso(kg):'))
    const imc = calcular_imc(altura,peso)

const classificacao = calcular_classe(imc)

console.log(`Seu imc é igual a ${imc.toFixed(2)} e você está classificado em ${classificacao}`)
}
main()

function calcular_imc(a,p){
    const imc = p/(a*2)
    return imc
}
function calcular_classe(imc){
    if (imc < 25){
        return 'NORMAL'
    }else if (imc => 25 && imc <= 30){
        return 'OBESO'
    }else{
        return 'OBESO MÓRBIDO'
    }
}

const imc = calcular_imc(altura,peso)

const classificacao = calcular_classe(imc)

console.log(`Seu imc é igual a ${imc.toFixed(2)} e você está classificado em ${classificacao}`)
}
main()
