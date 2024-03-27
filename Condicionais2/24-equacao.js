/*24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).*/

import { question } from "readline-sync";

function main(){
    const a = Number(question('A:'))
    const b = Number(question('B:'))
    const c = Number(question('C:'))

const discriminante = b ** 2 - 4 * a * c;

    if (discriminante < 0){
        console.log('Esta equação não possui raízes reais.')

    }else if (discriminante > 0 && a !== 0){
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a)

        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a)

        console.log(`As raízes da equação são ${raiz1} e ${raiz2}.`)

    }else{
        console.log(`${a} é inválido. Tente outro número maior que 0.`)
    }
}
main()