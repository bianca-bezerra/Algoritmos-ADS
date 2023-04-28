import { question } from "readline-sync"

function main(){
    const leitura_atual = Number(question('Leitura atual:'))
    const leitura_anterior = Number(question('Leitura anterior:'))

    const consumo = leitura_atual - leitura_anterior
    const valor_consumo = apuracao_consumo(consumo)
    const valor_bandeira_vermelha = obter_bandeira(consumo)
    const qtd_bandeiras = valor_bandeira_vermelha/8
    const valor_iluminacao = obter_taxa_de_iluminacao(consumo,valor_consumo)
    const valor_icms = obter_valor_icms(valor_consumo)
    const valor_confins = obter_valor_confins(valor_consumo)
    const valor_faturado = valor_consumo + valor_bandeira_vermelha + valor_confins + valor_icms + valor_iluminacao

    console.log('\n')
    console.log('--------- TALÃO DE ENERGIA --------')
    console.log(`Consumo: ${consumo} Kwh`)
    console.log(`Valor faturado: R$ ${valor_faturado}`)
    console.log(`Bandeira: R$ ${valor_bandeira_vermelha} - (${qtd_bandeiras}) bandeira(s) `)
    console.log(`ICMS: R$ ${valor_icms}`)
    console.log(`PIS/CONFINS: R$ ${valor_confins}`)
    console.log(`Taxa de iluminação: R$ ${valor_iluminacao}`)
    console.log('\n')
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
