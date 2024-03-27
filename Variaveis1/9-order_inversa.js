//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const coordenada = input('Informe os valores de a e b:').split(',')
const a = coordenada[0]
const b = coordenada[1]
const inverso_a = b
const inverso_b = a

//Processamento
console.log(`${a},${b}`)
console.log(`${inverso_a},${inverso_b}`)







