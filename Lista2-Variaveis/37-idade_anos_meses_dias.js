//37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const idade_em_dias = Number(input('Idade em dias:'))

//Processamento
const anos = Math.floor(idade_em_dias/365)
const resto_anos = (idade_em_dias%365)
const meses = Math.floor(resto_anos/30)
const dias = Math.floor(resto_anos%30)

console.log('Equivale a',anos,'ano(s)', meses,'mes(es) e', dias,'dia(s)')
