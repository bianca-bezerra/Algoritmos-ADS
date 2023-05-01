import { question } from "readline-sync";
import {obter_numero_positivo,mostrar_texto} from './lib_utils.js'

function main(){

    const objetivo = question('Qual seu objetivo: ')
    const objetivo_valor = obter_numero_positivo('Quanto precisa para realizar seu objetivo: ')
    const salario = obter_numero_positivo('Salario:')
    let porcent_investimento = obter_numero_positivo('Porcentagem de investimento: ')


    while (porcent_investimento > 30){
        mostrar_texto('Informe um valor válido, o maior valor possível é 30%')
        porcent_investimento = obter_numero_positivo('Porcentagem de investimento: ')
    }

    const taxa_juros = obter_numero_positivo('Taxa de juros (0,01 a 1%): ')
    let meses= 0
    let saldo = salario * porcent_investimento/100
    let acumulador_saldo = 0
    let anos = 0
    let resto_meses = 0

    
    mostrar_texto('\n')
    mostrar_texto('---------- ATUALIZAÇÕES DE SALDO ----------')
    while (acumulador_saldo < objetivo_valor){
        mostrar_texto(`Saldo atual: ${saldo.toFixed(1)}`)
       
        if (meses >= 12){
            anos = Math.floor(meses/12)

            resto_meses = meses % 12 

            mostrar_texto(`${anos} ano(s) e ${resto_meses} mes(es)`)
            mostrar_texto('\n')

        }else{
            mostrar_texto(`${meses} mes(es)`)
            mostrar_texto('\n')
        }
        acumulador_saldo = (saldo + saldo * taxa_juros/100)
        saldo = acumulador_saldo
        meses += 1
        }

        meses = meses % 12
        mostrar_texto(`> Tempo estimado para atingir o objetivo: ${anos} ano(s) e ${meses} mes(es)`)
        mostrar_texto(`> Saldo: R$ ${saldo.toFixed(0)}`)
    }
main()