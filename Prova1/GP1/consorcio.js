import { question } from "readline-sync";

function main(){
    const valorBem = Number(question('Valor do bem:'))
    const prazo = Number(question('Prazo (meses):'))
    const taxaADM = Number(question('Taxa de administração:'))
    const valorLance = Number(question('Valor do lance proposto:'))
    const escolha = Number(question('Manter Prazo ou Parcela(1 ou 2):'))
    const rendaMensal = Number(question('Renda mensal:'))
    

    const taxa = obterValorTaxa(taxaADM,valorBem)
    const valorTotal = obterValorTotal(valorBem,taxa)
    const parcela = obterValorParcela(valorTotal,prazo)
    const resgate = aceitarResgate(rendaMensal,parcela)


    console.log('----- RESULTADOS -----')
    console.log(resgate)
    console.log(`A parcela custa R$ ${parcela}.`)
    console.log(`O total a pagar, com taxa de administração, custa R$ ${valorTotal}`)
    console.log(`O total de taxa de administração é R$ ${taxa}`)
   

    
   //Segunda Parte
    
    const novoValorParcela = manterPrazo(valorTotal,valorLance,prazo)
    const resgate2 = aceitarResgate2(rendaMensal,novoValorParcela)
    console.log('--- RESULTADOS POS LANCE ---')
    console.log(resgate2)

    const novoPrazo = manterParcela(valorTotal,valorLance,parcela,prazo)
    if (escolha === 1){
        console.log(`O prazo se manterá e a parcela passará a custar R$ ${novoValorParcela.toFixed(2)}`)
    }else if (escolha === 2){
        console.log(`O novo prazo é de ${novoPrazo.toFixed(0)} parcelas/meses e o valor R$ ${parcela} se manterá.`)
    }else{
        return 'ERRO! Escolha a modalidade Manter Prazo(1) ou Manter Parcela (2).'
    }
    
  
    const UltimaParcela = valorUltimaParcela(valorTotal,valorLance,prazo)
    if (escolha == 1){
    console.log(`A última parcela custará R$${UltimaParcela} reais`)
    }
    
}
main()

function aceitarResgate(rendaMensal,parcela){
if (rendaMensal * 0.3 >= parcela){
    return 'Resgate permitido!'
}else{
    const rendaMin = (parcela/3 * 10).toFixed(2)
    return `Resgaste não permitido, você tem que ter renda mensal,no mínimo, de ${rendaMin}`
}
}

function obterValorTaxa(taxaADM,valorBem){
    const taxa = valorBem * taxaADM
    return taxa
}

function obterValorTotal(valorBem,taxa){
    const valorTotal = valorBem + (taxa)
    return valorTotal
}


function obterValorParcela(valorTotal,prazo){
    const parcela = (valorTotal/prazo).toFixed(2)
    return parcela
}


function manterPrazo(valorTotal,valorLance,prazo){
    const novaParcela = ((valorTotal - valorLance)/prazo)
    return novaParcela
}
function valorUltimaParcela(valorTotal,valorLance,prazo){
    const valorUltimaParcela = (valorTotal - valorLance) % (prazo)
    return valorUltimaParcela
   
}

function manterParcela(valorTotal,valorLance,parcela,prazo){
    const novaQtdPrazo = Math.floor((valorTotal - valorLance) / parcela)
    const novoPrazo = (prazo - (prazo - novaQtdPrazo))
    return novoPrazo
}

function aceitarResgate2(rendaMensal,novoValorParcela){
    if (rendaMensal * 0.3 >= novoValorParcela){
        return 'Resgate permitido, em caso de lance.'
    }else{
        const rendaMin = (novoValorParcela/3 * 10).toFixed(2)
        return `Resgaste não permitido, você tem que ter renda mensal,no mínimo, de ${rendaMin}`
    }
    }
