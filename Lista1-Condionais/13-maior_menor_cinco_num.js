/*13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.*/

import { question } from "readline-sync";

function main(){

    const num1 = Number(question('Número 1:'))
    const num2 = Number(question('Número 2:'))
    const num3 = Number(question('Número 3:'))
    const num4 = Number(question('Número 4:'))
    const num5 = Number(question('Número 5:'))
    
 if (is_valid(num1,num2,num3,num4,num5)){
        const maiorMenor = maior_menor(num1,num2,num3,num4,num5)
        console.log(maiorMenor)
    } else{
        console.log('Números inválidos.')
    }
}

main()
    
    function is_valid(n1,n2,n3,n4,n5){
        if (n1 !== n2 && n1 !== n3 && n1 !== n4 && n1 !== n5 && n2 !== n3 && n2 !== n4 && n2 !== n5 && n3 !== n4 && n3 !== n5 && n4 !== n5){
            return true;
        } else{
            return false;
        }
    }

    function maior_menor(num1, num2, num3, num4, num5) {
        let maior = num1;
        let menor = num1;

        if (num2 > maior) {
            maior = num2
        } else if (num2 < menor) {
            menor = num2
        }

        if (num3 > maior) {
            maior = num3
        } else if (num3 < menor) {
            menor = num3
        }

        if (num4 > maior) {
            maior = num4
        } else if (num4 < menor) {
            menor = num4
        }

        if (num5 > maior) {
            maior = num5
        } else if (num5 < menor) {
            menor = num5
        }

        return `O maior número é ${maior} e o menor número é ${menor}.`
    }

   
