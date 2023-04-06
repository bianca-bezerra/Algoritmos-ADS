import { question } from "readline-sync"

function main(){

    const duracao = Number(question('Duracão do curso (em anos):'))
    const valorMensal = Number(question('Valor da mensalidade:'))
    const taxaSelic = Number(question('Taxa Selic:'))
    const salarioVigente = Number(question('Salário mínimo vigente:'))
    const rendaFamilia = Number(question('Renda familiar:'))
    const qtdPessoaFamilia = Number(question('Quantidade de pessoas na família:'))
    const anoInicio = Number(question('Ano de inicio:'))
    const semInicio = Number(question('Semestre de inicio:'))
    
    
        const rendaPorPessoa = rendaFamilia/qtdPessoaFamilia  //Fast fail
        if (rendaPorPessoa <= (3 * salarioVigente)){
            console.log ('Você foi aprovado para o FIES!')
        }else{
            console.log('Você foi reprovado, não é possível participar do FIES.')
            return
        }
         
    
    const selic = obterSelic(rendaPorPessoa,taxaSelic,salarioVigente)
    const juros = obterValorJuros(valorMensal,selic,duracao)
    const parcelaFixa = obterParcelaFixa(duracao)
    const valorOriginal = obterValorOriginal(duracao,valorMensal)
    const saldoDevedor = obterSaldoDevedor(valorOriginal,juros,parcelaFixa,duracao)
    const jurosTotal = (juros * duracao)
    const carencia = 6 * 150
    const valorTotal = saldoDevedor + carencia
    const parcelaFinanciada = obterParcelaFinanciada(duracao,saldoDevedor)
    const rendaMin = obterRendaMin(parcelaFinanciada)
    const inicioPagamento = calcular_inicio_pagamento(anoInicio, semInicio, duracao)
    const finalPagamento = calcular_final_pagamento(anoInicio, semInicio, duracao)
    

    console.log('----- Simulador FIES -----')
    console.log(`Valor total financiado: R$ ${saldoDevedor}`)
    console.log(`Valor total de juros: R$${jurosTotal}`)
    console.log(`Valor total a ser pago: R$ ${valorTotal}`)
    console.log(`Vai ser pago durante o curso R$ ${parcelaFixa} e na carencia R$ ${carencia}`)
    console.log(`Parcela do financiamento: R$ ${parcelaFinanciada.toFixed(2)}`)
    console.log(`O salário mínimo do profissional deve ser de R$ ${rendaMin.toFixed(2)}`)
    console.log(`Início Pagamento: ${inicioPagamento}`)
    console.log(`Final Pagamento: ${finalPagamento}`)
    //console.log(`O aluno começará a pagar em ${inicioDoPagamento.inicioDoPagamento} e pode terminar até ${inicioDoPagamento.fimDoPagamento}`)

}
main()
 
function obterSelic(rendaPorPessoa,taxaSelic,salarioVigente){
    if (rendaPorPessoa <= 1.5 * 1302){
        const selic= taxaSelic * 0.1
        return selic
     }else if (rendaPorPessoa > 1.5 * salarioVigente && rendaPorPessoa <= 2 * salarioVigente){
        const selic = taxaSelic * 0.15
        return selic
     }else if (rendaPorPessoa > 2 * salarioVigente && rendaPorPessoa <= 2.5 * salarioVigente){
        const selic = taxaSelic * 0.20
        return selic
     }else{
        const selic = taxaSelic * 0.25
        return selic
     }
    }

function obterValorJuros(valorMensal,taxaSelic){  //Juros por ano
    const jurosSimples = valorMensal * taxaSelic/100
    return jurosSimples 
}


function obterValorOriginal(duracao,valorMensal){
    const anoEmMes = 12
    const original = ((duracao * anoEmMes) * valorMensal)
    return original
}

function obterParcelaFixa(duracao){ // Valor parcela fixa total
    const mesesEmAno = 12
    const trimestre = 3
    const parcela = ((duracao * mesesEmAno)/trimestre) * 150
    return parcela
}

function obterSaldoDevedor(valorOriginal,juros,parcelaFixa,duracao){ // Valor total a pagar
    const saldo = (valorOriginal + ((juros * duracao) - parcelaFixa))
    return saldo
}

function obterParcelaFinanciada(duracao,saldoDevedor){ // Valor da parcela financiamento
    const mesesEmAno = 12
    const parcelaFinanciada = saldoDevedor/((duracao*mesesEmAno)*4)
    return parcelaFinanciada
}

function obterRendaMin(parcelaFinanciada){ // Renda mínima pra pagar o financimento
    return (parcelaFinanciada * 10)

}
function calcular_inicio_pagamento(anoInicio, semInicio, duracao){
    const carencia_em_meses = 18
    const meses_semestre_inicio = semInicio=== 1 ? 0 : 6
    const ano_inicio_em_meses = anoInicio * 12

    // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
    const inicio_em_meses = ano_inicio_em_meses + meses_semestre_inicio + (duracao*12) + carencia_em_meses + 1

    const ano_semestre = converter_meses_em_ano_semestre(inicio_em_meses)

    return ano_semestre
}

function calcular_final_pagamento(anoInicio, semInicio, duracao){
    const carencia_em_meses = 18
    const meses_semestre_inicio = semInicio === 1 ? 0 : 6
    const ano_inicio_em_meses = anoInicio * 12

    // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
    const final_em_meses = ano_inicio_em_meses + meses_semestre_inicio + (duracao*12) + carencia_em_meses + 1 + (4 * duracao* 12)

    const ano_semestre = converter_meses_em_ano_semestre(final_em_meses)

    return ano_semestre
}

function converter_meses_em_ano_semestre(meses){
    const ano = Math.floor(meses / 12)
    const semestre = meses % 12 <= 6 ? 1 : 2

    return `${ano}/${semestre}`
}

 




