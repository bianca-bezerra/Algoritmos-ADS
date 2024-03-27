
import { question } from "readline-sync";
import { mostrar_texto, obter_numero_positivo } from "./lib_utils.js";

function main(){

    //Entrada
    const largura = obter_numero_positivo('Largura:')
    const comprimento = obter_numero_positivo('Comprimento:')
    const profundidade = obter_numero_positivo('Profundidade:')

    //Volume recomendado de 85% do volume total
    const volume_recomendacao = obter_volume_recomendado(largura,comprimento,profundidade)
    mostrar_texto(`Volume recomendado (litros): ${volume_recomendacao}`)

    //Gasto para encher a piscina
    const valor_agua_mil_litros = obter_numero_positivo('Valor da agua (1000l):')
    const gasto_com_agua = obter_conta_de_agua(valor_agua_mil_litros,volume_recomendacao)
    mostrar_texto(`Gasto para encher a piscina: R$ ${gasto_com_agua}`)

    //Gasto de manutenção
    const valor_reposicao_agua = repor_porcentagem_da_piscina(volume_recomendacao,valor_agua_mil_litros)
    mostrar_texto(`Gasto mensal de manutenção: R$ ${valor_reposicao_agua}`)

}

function obter_volume_recomendado(l,c,p){
    const volume = (l * c * p)/1000
    const volume_recomendado = volume * 0.85
    return (volume_recomendado)

}

function obter_conta_de_agua(valor_agua,volume_recomendacao){  
   
    if (volume_recomendacao <= 1000){
        return valor_agua
    }else {
        let fracoes_de_mil_litros = Math.floor(volume_recomendacao/1000) + 1
        return valor_agua * fracoes_de_mil_litros
    }

}

function repor_porcentagem_da_piscina(volume_recomendacao,valor_agua){
    const volume_a_repor = volume_recomendacao * 0.1

    if (volume_a_repor <= 1000){
        return valor_agua
    }else {
        let fracoes_de_mil_litros_reposicao = Math.floor(volume_a_repor/1000) + 1
        return valor_agua * fracoes_de_mil_litros_reposicao
    }
}

main()