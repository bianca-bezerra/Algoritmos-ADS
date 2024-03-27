/*20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/

import { question } from "readline-sync";

function main(){
    const angulo = Number(question('Angulo:'))
    
    const quadrante = achar_quadrante(angulo)
    console.log(quadrante)
}
main()

    function achar_quadrante(a){
        if ( a >= 0 && a <= 90){
            return 'Primeiro quadrante'

        }else if (a > 90 && a <= 180){
            return 'Segundo quadrante'

        }else if (a > 180 && a <= 270){
            return 'Terceiro quadrante'
            
        }else{
            return 'Quarto quadrante'
        }
    }
