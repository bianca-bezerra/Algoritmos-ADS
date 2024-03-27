/*17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.*/

import { question } from "readline-sync";

function main(){
    const valor1 = Number(question('Variável 1:'))
    const valor2 = Number(question('Variável 2:'))
    
     }
    if (valor1 % valor2 === 2){
       if (valor1 % 2 === 0 && valor2 % 2 === 0){
        console.log(`Ambos são pares.`)

       }else if ( valor1 % 2 !== 0 && valor2 % 2 !== 0){
        console.log(`Ambos são ímpares.`)

       }else if (valor1 % 2 !== 0 && valor2 % 2 === 0){
        console.log(`Valor 1 é ímpar e valor 2 é par.`)

       }else{
        console.log(`Valor 1 é par e valor 2 é ímpar.`)
       }
    }

      if ( valor1 % valor2 === 3){
        const operação3 = (valor1 + valor2) * valor1
        console.log(`A multiplicação da soma das variáveis vezes o valor 1 é igual a ${operação3}`)
    }
    if (valor2 !== 0){
      if ( valor1 % valor2 === 4 ){
            const operação4 = (valor1 + valor2)/valor2
            console.log(`A soma das variáveis dividida pelo valor 2 é igual a ${operação4}`)
    } 
    }
    else{
        const nenhumaOpção = (`O quadrado dos números é ${valor1*2} e ${valor2*2}`)
    }
    }

const verificar = verificar_valores(valor1,valor2)

    
}
main()

    function verificar_valores(valor1,valor2){
    if (valor1 % valor2 === 1){
        const soma = valor1 + valor2 + 1
        console.log(`A soma das variáveis mais 1 é igual a ${soma}`)

   
  
