import { question } from "readline-sync"
import { mostrar_texto, obter_numero_positivo } from "./lib_utils.js"

function main(){
    const leitura_atual = obter_numero_positivo('Leitura atual:')
    const leitura_anterior = obter_numero_positivo('Leitura anterior:')

    const consumo = leitura_atual - leitura_anterior
    const valor_consumo = apuracao_consumo(consumo)
    const valor_bandeira_vermelha = obter_bandeira(consumo)
    const qtd_bandeiras = valor_bandeira_vermelha/8
    const valor_iluminacao = obter_taxa_de_iluminacao(consumo,valor_consumo)
    const valor_icms = obter_valor_icms(valor_consumo)
    const valor_confins = obter_valor_confins(valor_consumo)
    const valor_faturado = valor_consumo + valor_bandeira_vermelha + valor_confins + valor_icms + valor_iluminacao

    mostrar_texto('\n')
    mostrar_texto('--------- TALÃO DE ENERGIA --------')
    mostrar_texto(`Consumo: ${consumo} Kwh`)
    mostrar_texto(`Valor faturado: R$ ${valor_faturado}`)
    mostrar_texto(`Bandeira: R$ ${valor_bandeira_vermelha} - (${qtd_bandeiras}) bandeira(s) `)
    mostrar_texto(`ICMS: R$ ${valor_icms}`)
    mostrar_texto(`PIS/CONFINS: R$ ${valor_confins}`)
    mostrar_texto(`Taxa de iluminação: R$ ${valor_iluminacao}`)
    mostrar_texto('\n')
}
main()

function apuracao_consumo(consumo){
    if (consumo <= 30){
        return 0
    }else if (consumo <= 100){
        return 0.59 * consumo
    }else{
        return 0.75 * consumo
    }
}

function obter_bandeira(consumo){
    if (consumo < 100){
        return 0
    }else{
        const fracao_de_100 = Math.floor(consumo/100) 
        return 8 * fracao_de_100
    }
}

function obter_taxa_de_iluminacao(consumo,valor_consumo){
    if (consumo > 80){
        const valor = 0.08 * valor_consumo
        return valor
    }else{
        return 0
    }
}

function obter_valor_icms(valor_consumo){
    const icms = 0.25 * valor_consumo
    return icms
}

function obter_valor_confins(valor_consumo){
    const confins = 0.15 * valor_consumo
    return confins
}
