//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const raio = Number(input('Raio:'))

//Processamento
const valor_pi = 3.14
const comprimento = calcular_comprimento(raio,valor_pi)

//Saída
console.log('O comprimento equivale a' , comprimento)

//Função usada
function calcular_comprimento(raio,valor_pi){
    const valor_comprimento = raio * valor_pi * 2
    return valor_comprimento
}

}
main()
