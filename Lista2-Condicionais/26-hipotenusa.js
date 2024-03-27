/*26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.*/

import { question } from "readline-sync";

function main(){
    const lado1 = Number(question('Lado 1:'))
    const lado2 = Number(question('Lado 2:'))
    const lado3 = Number(question('Lado 3:'))

    if (lado1**2 === lado2**2 + lado3**2){
        console.log(`${lado1} é a hipotenusa e ${lado2} e ${lado3} são os catetos.`)

    }else if(lado2**2 === lado1**2 + lado3**2){
        console.log(`${lado2} é a hipotenusa e ${lado1} e ${lado3} são os catetos.`)

    }else if(lado3**2 === lado1**2 + lado2**2){
        console.log(`${lado3} é a hipotenusa e ${lado1} e ${lado2} são os catetos.`)

    }else{
        console.log('Os dados não correspondem a um triângulo válido.')
    }
    }
main()