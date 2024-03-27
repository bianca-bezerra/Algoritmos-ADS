//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const salario = Number(input('Salário:'))

//Processamento
const aumento = salario/100 * 25
const novoSalario = aumento + salario

//Saída
console.log('O novo salário custa' , novoSalario)

