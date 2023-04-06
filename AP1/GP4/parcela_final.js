import { question } from "readline-sync";

function main(){
    const valor_veiculo = Number(question('Valor do veiculo:'))
    const renda = Number(question('Renda:'))
    const profissao = question('Servidor publico(1) ou Privado(2):')
    const entrada = Number(question('Entrada (R$):'))
    const saida = Number(question('Percentual para a saida:'))
    const tempo_meses = Number(question('Quantos meses parcelar:'))
    const taxa_juros = Number(question('Taxa de juros do financiamento(%):'))
    const inflacao = Number(question('Inflacao do mes(%):'))

    console.log(`-------VALIDAÇÃO-------`)
    if (entrada >= valor_veiculo * 0.3 && saida <= 0.3 * valor_veiculo){
        console.log(`Valores de entrada e saída válidas, voce pode prosseguir!`)
    }else{
        console.log(`Informe valores válidos de entrada e saída para continuar.`)
        console.log(`Valor de entrada mínima: R$ ${(0.3 * valor_veiculo)}`)
        console.log(`Valor de saída máxima: R$ ${(0.3 * valor_veiculo)}`)
        return
    }

    const entrada_porcento = obter_entrada_porcento(entrada,valor_veiculo)
    const valor_saida = obter_valor_saida(saida,valor_veiculo,inflacao)
    const valor_base = (valor_veiculo - entrada - (saida/100 * valor_veiculo))
    const valor_afinanciar_sem_iof = inserir_juros_a_valorbase(valor_base,taxa_juros,tempo_meses)
    const iof = valor_iof(valor_afinanciar_sem_iof,tempo_meses)
    const valor_afinanciar_com_iof = valor_afinanciar_sem_iof + iof
    const valor_parcela = obter_parcela_final(valor_afinanciar_com_iof,tempo_meses).toFixed(2)
    const soma_parcelas = valor_parcela * tempo_meses
    const total_a_pagar = entrada + valor_afinanciar_com_iof + valor_saida
    const validacao = validar_renda_pela_profissao(profissao,valor_parcela,renda)


    console.log(`-------FINANCIAMENTO-------`)
    console.log(`Valor da entrada: ${entrada_porcento}% de R$ ${valor_veiculo} - R$ ${entrada}`)
    console.log(`Valor a ser financiado sem IOF: R$ ${valor_afinanciar_sem_iof}`)
    console.log(`Valor do IOF: R$ ${iof.toFixed(2)}`)
    console.log(`Valor a ser financiado com IOF: R$ ${valor_afinanciar_com_iof.toFixed(2)}`)
    console.log(`Valor da saída: R$ ${valor_saida.toFixed(2)}`)
    console.log(`Parcelamento: ${tempo_meses} parcelas de R$ ${valor_parcela}`)
    console.log(`Soma das Parcelas: ${soma_parcelas}`)
    console.log(`Total a ser pago: R$ ${total_a_pagar}`)
    console.log(validacao)

}
main()

function obter_entrada_porcento(entrada,valor_veiculo){
    return ((entrada/valor_veiculo) * 100)
}

function obter_valor_saida(saida,valor_veiculo,inflacao){
    const valor_da_saida = (saida/100 * valor_veiculo)
    const valor_com_inflacao = (valor_da_saida * inflacao/100) + valor_da_saida
    return valor_com_inflacao
}

function inserir_juros_a_valorbase(valor_base,taxa_juros,tempo_meses){
    const juros = valor_base * taxa_juros/100 * tempo_meses
    return (valor_base + juros)
}

function valor_iof(valor_afinanciar_sem_iof,tempo_meses){
    const iof_fixo = valor_afinanciar_sem_iof * 0.0038
    const iof_por_dia = valor_afinanciar_sem_iof * 0.000118 * (tempo_meses*30)
    return iof_fixo + iof_por_dia
}

function obter_parcela_final(valor_afinanciar_com_iof,tempo_meses){
    return valor_afinanciar_com_iof/tempo_meses
}

function validar_renda_pela_profissao(profissao,valor_parcela,renda){
    if (profissao == '1'){
        if(valor_parcela <= 0.35 * renda){
            return 'A parcela cabe na renda do comprador'
        }else{
            return 'A parcela não cabe na renda do comprador'
        }
    }else if(profissao == '2'){
        if (valor_parcela <= 0.3 * renda){
            return 'A parcela cabe na renda do comprador'
        }else{
            return 'A parcela não cabe na renda do comprador'
        }
    }else{
        return 'ERRO! Informe opção válida, (1) para servidor público e (2) para servidor privado.'
    }
    
}
