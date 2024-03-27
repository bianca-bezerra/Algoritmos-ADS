//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const valor_kg = Number(input('Valor(kg):'))

//Processamento
const valor_g = valor_kg * 1000

//Saída
console.log('O valor equivalente em gramas é', valor_g)
