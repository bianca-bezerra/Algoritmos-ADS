/*15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/

import { question } from "readline-sync";

function main(){
    const titulo1 = console.log('>> Professor 1 <<')
    const hora1 = Number(question('Qtd. de horas dadas:'))
    const valor1 = Number(question('Valor por hora:'))
    const titulo2 = console.log('>> Professor 2 <<')
    const hora2 = Number(question('Qtd. de horas dadas:'))
    const valor2 = Number(question('Valor por hora:'))
    
    const resultado = maiorSalario(hora1,valor1,hora2,valor2)
   console.log(resultado)

}
main()

    function calcular_salario(hora,valor){
        const salario = hora * valor
        return salario
    }

   function maiorSalario(hora1,valor1,hora2,valor2){
    if (calcular_salario(hora1,valor1) > calcular_salario(hora2,valor2)){
        return (`Professor 1 recebe salário maior que o professor 2`)

    }else if (calcular_salario(hora1,valor1) === calcular_salario(hora2,valor2)){
        return (`Os dois recebem o mesmo salário`)

    }else{
        return (`Professor 2 recebe salário maior que o professor 1`)
    }
   }
   
