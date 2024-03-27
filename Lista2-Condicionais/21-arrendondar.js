/*21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/

import { question } from "readline-sync";

function main(){
    const num = Number(question('Número:'))

    if (num - Math.floor(num) >= 0.5){
        console.log(Math.ceil(num))
        
    }else{
        console.log(Math.floor(num))
    }
}
main()
