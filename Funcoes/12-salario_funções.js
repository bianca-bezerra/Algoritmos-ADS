//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const salario = Number(input('Salário:'))

//Processamento
const aumento = calcular_aumento(salario)
const novoSalario = calcular_novoSalario(aumento,salario)

//Saída
console.log('O novo salário custa' , novoSalario)

//Funções usadas
function calcular_aumento(salario){
    const valor_aumento = salario/100 * 25
    return valor_aumento
}
function calcular_novoSalario(aumento,salario){
    const novo_salario = aumento + salario
    return novo_salario
}

}
main()