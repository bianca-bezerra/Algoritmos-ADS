/*16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.*/

import { question } from "readline-sync";

function main(){
    const nota1 = Number(question('Nota 1:'))
    const nota2 = Number(question('Nota 2:'))
    
     if (calcularMedia(nota1,nota2) >= 7){
        const media = calcularMedia(nota1,nota2)
        console.log(`O aluno foi APROVADO! Média ${media}`)

    }else{
        console.log(`Sua média não foi satisfatória. Sua situação é de prova final.`)
        const nota_pf = Number(question('Nota da prova final:'))
        
        if (nota_pf >= 5){
            console.log(`Sua nota ${nota_pf} foi satisfatória, você foi APROVADO!`)
        }else{
            console.log(`Sua nota ${nota_pf} não foi suficiente, você foi REPROVADO.`)
        }
    }
}
main()

    function calcularMedia(n1,n2){
        const media = (n1 + n2)/2
        return media
    }
   
