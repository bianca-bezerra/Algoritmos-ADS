import { question } from "readline-sync"
import { obter_numero_positivo } from "./lib_utils.js"

function main(){

    //Entrada
    const renda_mensal = obter_numero_positivo('Renda mensal:')
    let valor_emprestimo = obter_numero_positivo('Valor do Emprestimo:')
    let prazo = obter_numero_positivo('Prazo (2 a 24x):')
    const salario_min_atual = obter_numero_positivo('Salario mínimo atual:')

    //Validação de dados
    if (valor_emprestimo < salario_min_atual){
        mostrar_texto('Emprestimo deve ser maior que o salário mínimo, tente novamente.')
        return
    }
    if (prazo < 2 || prazo > 24){
        mostrar_texto('Prazo deve ser entre 2 e 24 meses, tente novamente.')
        return
    }

    //Taxa de juros de acordo com a Selic
    const taxa_de_juros = obter_taxa(prazo)
    
    //Valor do IOF
    const valor_iof = obter_IOF(valor_emprestimo,prazo)

    //Valor do emprestimo + IOF
    const valor_com_iof = obter_valor_com_iof(valor_emprestimo,valor_iof)

    
    //Calculo de juros compostos
    const valor_total_emprestimo = (valor_com_iof * Math.pow(1 + taxa_de_juros, prazo)).toFixed(2)
    const valor_juros = valor_total_emprestimo - valor_com_iof

    
    const parcela = (valor_total_emprestimo/prazo).toFixed(2)
    const comprometimento_de_renda = (parcela/renda_mensal * 100).toFixed(2)
    const situacao_emprestimo = obter_situacao_emprestimo(parcela,renda_mensal)


    //Saída
    mostrar_texto('\n')
    mostrar_texto('---------- RELATÓRIO ----------')
    mostrar_texto(`Valor pedido: R$ ${valor_emprestimo}`)
    mostrar_texto(`Valor do IOF: R$ ${valor_iof.toFixed(2)}`)
    mostrar_texto(`Valor do juros a pagar: R$ ${valor_juros.toFixed(2)}`)
    mostrar_texto(`Valor total a pagar: R$ ${valor_total_emprestimo}`)
    mostrar_texto(`Valor da parcela mensal: ${prazo}x de R$ ${parcela}`)
    mostrar_texto(`Comprometimento de renda: ${comprometimento_de_renda}%`)
    mostrar_texto(`Situação do Emprestimo: ${situacao_emprestimo}`)


}


function obter_taxa(prazo){
    let taxa = 0
    if (prazo <= 6){
        taxa = 0.5 * 0.1375
    }else if(prazo <= 12){
        taxa = 0.75 * 0.1375
    }else if (prazo <= 18){
        taxa = 1 * 0.1375
    }else if (prazo > 18){
        taxa = 1.3 * 0.1375
    }
    return taxa
}

function obter_IOF(valor_emprestimo,prazo){
    const iof_fixo = 0.0038 * valor_emprestimo
    const iof_mensal = 0.000082 * (prazo * 30) * valor_emprestimo
    const iof = iof_fixo + iof_mensal
    return iof
}

function obter_valor_com_iof(valor_emprestimo,valor_iof){
    return valor_emprestimo + valor_iof
}

function obter_situacao_emprestimo(parcela,renda_mensal){
    if (parcela > 0.4 * renda_mensal){
        return 'REPROVADO'
    }else{
        return 'APROVADO'
    }
}

main()