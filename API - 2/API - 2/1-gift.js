import { question } from 'readline-sync'
import { mostrar_texto, obter_numero_positivo} from './lib_utils.js'

function main(){
    const nome_cliente = question('Nome:')
    const n_compras = obter_numero_positivo('Numero de compras:')
    
    let valor_compra = 0
    let soma_vendas = 0 
    let cashback = 0
    let contador = 0 
    let cashback_5 = 250
    let cashback_7 = 500
    let cashback_8 = 750
    let acumulador_cashback = 0
    let percentual_investido = 0
    let acumulador_percentual = 0
    let menor_cashback = Infinity
    let maior_cashback = -Infinity


    while (contador < n_compras){
        valor_compra = obter_numero_positivo('Valor da compra:')

        if (valor_compra <= 250){
            cashback = valor_compra * 0.05
            percentual_investido = 0.05
        } else if (valor_compra <= 500){
            cashback = valor_compra * 0.07
            percentual_investido = 0.07
        } else if (valor_compra <= 750){
            cashback = valor_compra * 0.08
            percentual_investido = 0.008
        }else{
            cashback = (cashback_5 * 0.05) + (cashback_7 * 0.07) + (cashback_8 * 0.08) + ((valor_compra - 750) * 0.25)
            percentual_investido = cashback/valor_compra 
        }

        if (cashback < menor_cashback){
            menor_cashback = cashback
        }
        if (cashback > maior_cashback){
            maior_cashback = cashback
        }
    
        soma_vendas += valor_compra
        acumulador_cashback += cashback
        acumulador_percentual += percentual_investido

        contador++
    }

   const percentual = (acumulador_percentual * 100).toFixed(2)

    mostrar_texto('\n')
    mostrar_texto(`---------- Nota do(a) ${nome_cliente} ----------`)
    mostrar_texto(`Soma das vendas: R$ ${soma_vendas}`)
    mostrar_texto(`Valor distribuido em cashback: R$ ${acumulador_cashback}`)
    mostrar_texto(`Valor percentual investido em cashback: ${percentual}%`)
    mostrar_texto(`Maior valor de cashback: R$ ${maior_cashback.toFixed(2)}`)
    mostrar_texto(`Menor valor de cashback: R$ ${menor_cashback.toFixed(2)}`)
    mostrar_texto('\n')
}
main()