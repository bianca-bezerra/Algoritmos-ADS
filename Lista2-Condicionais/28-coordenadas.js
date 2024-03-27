/*28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/

import { question } from "readline-sync";

function main(){
    const x1 = Number(question('X1:'))
    const y1 = Number(question('Y1:'))
    const x2 = Number(question('X2:'))
    const y2 = Number(question('Y2:'))
    
    const area = calcularArea(x1, y1, x2, y2)
console.log(`A área do retângulo é ${area}`)
      
}
main()

function calcularArea(x1, y1, x2, y2){
    const base = Math.abs(x2 - x1)

    const altura = Math.abs(y2 - y1)

    const area = base * altura

    if (area >= 0){
    return area
        
}else{
    return 'A área não pode ser negativa, tente novamente.'
}
}
