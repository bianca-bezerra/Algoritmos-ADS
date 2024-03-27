/*22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.*/

import { question } from "readline-sync";

function main(){
    const titulo1 = console.log('>> Hora de início do jogo <<')
    const horaInicio = Number(question('Hora:'))
    const minInicio = Number(question('Minuto:'))
    const titulo2 = console.log('>> Hora de fim de jogo <<')
    const horaFim = Number(question('Hora:'))
    const minFim = Number(question('Minuto:'))
    
    const duracao = calcularDuracao(horaInicio, minInicio, horaFim, minFim)
    console.log(`Duração do jogo: ${duracao.horas}h${duracao.minutos}min`)
      
}
main()

function calcularDuracao(horaInicio, minInicio, horaFim, minFim){
    const minutosInicio = horaInicio * 60 + minInicio
    const minutosFim = horaFim * 60 + minFim
    let duracaoMinutos = minutosFim - minutosInicio
      
    if (duracaoMinutos < 0){
        duracaoMinutos += 1440
    }
      
    const horas = Math.floor(duracaoMinutos / 60)
    const minutos = duracaoMinutos % 60
      
    return {horas, minutos}
}   
