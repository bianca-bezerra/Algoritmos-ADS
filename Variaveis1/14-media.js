//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const nota1 = Number(input('Nota 1:'))
const peso1 = Number(input('Peso da nota 1:'))
const nota2 = Number(input('Nota 2:'))
const peso2 = Number(input('Peso da nota 2:'))
const nota3 = Number(input('Nota 3:'))
const peso3 = Number(input('Peso da nota 3:'))


//Processamento
const mediaPonderada = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3))/(peso1+peso2+peso3)


//Saída
console.log('A média ponderada é igual a', mediaPonderada)

