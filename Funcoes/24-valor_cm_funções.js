//24. Leia um valor em m, calcule e escreva o equivalente em cm.
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const valor_m = Number(input('Valor(m):'))

//Processamento
const valor_cm = transformar_m_em_cm(valor_m)

//Saída
console.log('O equivalente em cm é', valor_cm)

//Função usada
function transformar_m_em_cm(valor_m){
    const valor_em_cm = valor_m * 100
    return valor_em_cm
}
}
main()