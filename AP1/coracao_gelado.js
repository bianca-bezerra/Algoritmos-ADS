import { question } from "readline-sync";

function main(){
    const nome = question('Nome:')
    const idade = Number(question('Idade:'))

    const frequencia_cardiaca_maxima = obter_frequencia_cardiaca_maxima(idade)
    const atividadeFisica = obter_tabela_ativ_fisica(frequencia_cardiaca_maxima)

    console.log(`Tabela de Atividade Física feita para ${nome}:
    Atividade Muito Leve(50-60%): ${atividadeFisica.ativ_muito_leve_min} - ${atividadeFisica.ativ_muito_leve_max} (bpm)
    Atividade Leve(60-70%): ${atividadeFisica.ativ_leve_min} - ${atividadeFisica.ativ_leve_max} (bpm)
    Atividade Moderada (70-80%): ${atividadeFisica.ativ_moderada_min} - ${atividadeFisica.ativ_moderada_max}
    Atividade Difícil (80-90%): ${atividadeFisica.ativ_dificil_min} - ${atividadeFisica.ativ_dificil_max} (bpm)
    Atividade Máxima (90-100%): ${atividadeFisica.ativ_maxima_min} - ${atividadeFisica.ativ_maxima_max} (bpm)`)

    const tempo_ativ_fisica = Number(question('Tempo de atividade fisica(min):'))
    const plano_ativ_fisica = obter_plano_FC(tempo_ativ_fisica,atividadeFisica)

    console.log(plano_ativ_fisica)
    
}
main()

function obter_frequencia_cardiaca_maxima(idade){
    return 220 - idade
}

function obter_tabela_ativ_fisica(frequencia_cardiaca_maxima){
    const ativ_muito_leve_min = (frequencia_cardiaca_maxima * 0.5).toFixed(2)
    const ativ_muito_leve_max = (frequencia_cardiaca_maxima * 0.6).toFixed(2)
    const ativ_leve_min = (frequencia_cardiaca_maxima * 0.6).toFixed(2)
    const ativ_leve_max = (frequencia_cardiaca_maxima * 0.7).toFixed(2)
    const ativ_moderada_min = (frequencia_cardiaca_maxima * 0.7).toFixed(2)
    const ativ_moderada_max = (frequencia_cardiaca_maxima * 0.8).toFixed(2)
    const ativ_dificil_min = (frequencia_cardiaca_maxima * 0.8).toFixed(2)
    const ativ_dificil_max = (frequencia_cardiaca_maxima * 0.9).toFixed(2)
    const ativ_maxima_min = (frequencia_cardiaca_maxima * 0.9).toFixed(2)
    const ativ_maxima_max = (frequencia_cardiaca_maxima * 1).toFixed(2)
    return {ativ_muito_leve_min,ativ_muito_leve_max,ativ_leve_min,ativ_leve_max,ativ_moderada_min,ativ_moderada_max,ativ_dificil_min,ativ_dificil_max,ativ_maxima_min,ativ_maxima_max}
}

function obter_plano_FC(tempo_ativ_fisica,atividadeFisica){
    const moderada = 0.6 * tempo_ativ_fisica
    const leve = 0.2 * tempo_ativ_fisica
    const dificil = 0.1 * tempo_ativ_fisica
    const muito_leve = 0.2 * tempo_ativ_fisica

    return `Plano de FC: 
    ${moderada} min com batimentos entre ${atividadeFisica.ativ_moderada_min} - ${atividadeFisica.ativ_moderada_max}
    ${leve} min com batimentos entre ${atividadeFisica.ativ_leve_min} - ${atividadeFisica.ativ_leve_max}
    ${dificil} min com batimentos entre ${atividadeFisica.ativ_dificil_min} - ${atividadeFisica.ativ_dificil_max}
    ${muito_leve} min com batimentos entre ${atividadeFisica.ativ_muito_leve_min} - ${atividadeFisica.ativ_muito_leve_max}`
}
