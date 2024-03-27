//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { question } from "readline-sync";

function main(){

     const num = Number(question('Numero (entre 1 e 100):'))

     if (num > 0 && num < 100){
        if (num == 1){
            console.log('Não é primo.')

        }else if (num == 2 || num ==3 || num == 5 || num == 7 || num == 9){
            console.log('É primo')

        }else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0 && num % 9 !== 0){
            console.log('É primo.')

        }else{
            console.log('Não é primo.')
        }
        
}else{
    console.log('ERRO! Tente novamente com um número entre 0 e 100.')
}
}
main()