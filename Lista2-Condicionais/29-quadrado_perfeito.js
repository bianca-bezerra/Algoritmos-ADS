/* Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.*/

import { question } from "readline-sync";

function main(){

    const num = Number(question('Número (4 dígitos):'))

    const doisUltimos = num % 100
    const doisPrimeiros = Math.floor(num/100)
    
    if (num > 0){
    if (Math.sqrt(num) === (doisPrimeiros + doisUltimos)){
        console.log('É quadrado perfeito')

    }else{
        console.log('Não é quadrado perfeito')
        
    }
}else{
    console.log('Número inválido, tente novamente.')
}    
}
main()