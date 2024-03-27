//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import { question } from "readline-sync";

function main(){

//Entrada
const dia = Number(question('Dia:'))
const mes = Number(question('Mes:'))
const ano = Number(question('Ano:'))

//Processamento
const data_valida = verificar_data_valida(dia,mes,ano)

//Saída
console.log(data_valida)
    
}
main()    

function verificar_data_valida(dia,mes,ano){
    if (dia <= 30 && mes <= 12 && 0<ano ){
        return 'Válido'
    }else{
        return 'Inválido'
    }
}
