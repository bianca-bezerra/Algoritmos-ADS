import { question } from "readline-sync";

function main(){
    const argo = 89000
    const corolla = 185000
    const percentual_fipe = Number(question('Percentual FIPE (do carro que será vendido):'))
    const meses = Number(question('Tempo de parcelamento (meses):'))
    const taxa_juros= Number(question('Taxa de juros (1.2 a 2.5%):'))
    const taxa_adm = Number(question('Taxa de administração:'))

    //CDC
    const valor_base = obterValorTotal(corolla,percentual_fipe,argo)
    const jurosCDC = obterJurosCDC(valor_base,taxa_juros,meses)
    const valor_parcelar = valor_base + jurosCDC
    const parcela = obterParcelaCDC(valor_parcelar,meses)
    const total_a_pagar = (argo * percentual_fipe/100) + valor_parcelar

   console.log(`------- CDC -------`)
    console.log(`Valor de bem: R$ ${corolla}`)
    console.log(`Valor a ser parcelado: R$ ${valor_parcelar}`)
    console.log(`Juros totais: R$ ${jurosCDC}`)
    console.log(`Parcelamento: ${meses} prestações de R$ ${parcela}`)
    console.log(`Total a pagar: R$ ${total_a_pagar}`)


    //CONSORCIO
    const jurosCSC = obterJurosCSC(valor_base,taxa_adm)
    const valorParcelar = valor_base + jurosCSC
    const parcelaCSC = obterParcelaCSC(valorParcelar,meses)
    const totalCSC = (argo * percentual_fipe/100) + valorParcelar

    console.log(`----- CONSÓRCIO -----`)
    console.log(`Valor de bem: R$ ${corolla}`)
    console.log(`Valor a ser parcelado : R$ ${valorParcelar}`)
    console.log(`Juros totais: R$ ${jurosCSC}`)
    console.log(`Parcelamento: ${meses} prestações de R$ ${parcelaCSC}`)
    console.log(`Total a pagar:R$ ${totalCSC}`)

    if (totalCSC < total_a_pagar){
        console.log(`O método Consórcio é mais vantajoso!`)
    }else if (total_a_pagar < totalCSC){
        console.log(`O método CDC é mais vantajoso!`)
    }else{
        console.log(`Nenhum tem vantagem.`)
    }
    
}
main()

function obterValorTotal(corolla,percentual_fipe,argo){
    return (corolla - (percentual_fipe/100 * argo))
}

function obterJurosCDC(valor_base,taxa_juros,meses){
    return (valor_base*taxa_juros/100) * meses
}
function obterParcelaCDC(valor_parcelar,meses){
    return (valor_parcelar/meses)
}

function obterJurosCSC(valor_base,taxa_adm){
    return (valor_base * taxa_adm/100)
}
function obterParcelaCSC(valorParcelar,meses){
    return valorParcelar/meses
}
