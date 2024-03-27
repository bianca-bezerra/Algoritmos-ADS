import { question } from "readline-sync";

function main(){
    const preco = Number(question('Preco Iphone:'))
    const formaPagamento = question('Forma de pagamento PIX/Especie(1), Debito(2) ou Credito(3):')
    console.log(`Caso tenha escolhido a opção 3, informe abaixo:`)
    const entrada = Number(question('Valor da entrada:'))
    const qtdParcelas = Number(question('Quantidade de Parcelas:'))
       
    
    const juros_totaisCredito = obterJurosCredito(preco,entrada,qtdParcelas)
    const valorBase = preco - entrada
    const valorCreditoTotal = valorBase + juros_totaisCredito
    const valorTotal = obterValorTotal(preco,formaPagamento,valorCreditoTotal)
    


    console.log(`Valor final: R$ ${valorTotal.toFixed(2)}`)
    
    if (formaPagamento == '1'){
        const economia1 = preco * 0.15
        console.log(`Economia: R$ ${economia1.toFixed(2)} `)
    }else if(formaPagamento == '2'){
        const economia2 = preco * 0.1
        console.log(`Economia: R$ ${economia2.toFixed(2)}`)
    }else{
        console.log(`Juros: R$ ${juros_totaisCredito.toFixed(2)}`)
    }
}
main()


function obterJurosCredito(preco,entrada,qtdParcelas){
    const valor_base = preco - entrada
    const juros_em_todo = valor_base * 0.0399
    const juros_por_parcela = ((valor_base + juros_em_todo)/qtdParcelas) * 0.015
    const juros_totais = juros_em_todo + (qtdParcelas * juros_por_parcela)
    return juros_totais

}

function obterValorTotal(preco,formaPagamento,valorCreditoTotal){
    if (formaPagamento == '1'){
        return preco * 0.85
    }else if(formaPagamento == '2'){
        return preco * 0.9
    }else if (formaPagamento == '3'){
        return (valorCreditoTotal)
    }
}
   