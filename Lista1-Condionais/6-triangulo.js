/*6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).*/ 

import { question} from "readline-sync";

function main(){

    const ang1 = Number(question('Angulo 1:'))
    const ang2 = Number(question('Angulo 2:'))
    const ang3 = Number(question('Angulo 3:'))

    if (ang1 > 0 && ang2 > 0 && ang3 > 0){

        if (ang1 + ang2 + ang3 === 180){
            console.log('Forma triângulo')

            const tipo = verificar_tipo(ang1,ang2,ang3)

            console.log(tipo)

        }else{
            console.log('Não forma triângulo')
        }
    }else{
        console.log('ERRO! Coloque valor de ângulo maior que 0.')
    }
}
main()

function verificar_tipo(a1,a2,a3){
    if (a1 < 90 && a2 < 90 && a3 < 90){
        return ('O triângulo é ACUTÂNGULO')
    }else if ( a1 === 90 || a2 === 90 || a3 === 90){
        return ('O triângulo é RETÂNGULO')
    }else{
        return ('O triângulo é OBTUSÂNGULO')
    }
}
