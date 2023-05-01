import { question } from "readline-sync";

function main(){

    mostrar_texto('\n')
    mostrar_texto(`> Digite seus dados entre 0 a 100`)
    mostrar_texto('\n')
    mostrar_texto(`---------- SCORE 1.0 ----------`)
    const serasa_v1_itemA = obter_numero_positivo('Item A:')
    const serasa_v1_itemB = obter_numero_positivo('Item B:')
    const serasa_v1_itemC = obter_numero_positivo('Item C:')

    mostrar_texto(`---------- SCORE 2.0 ----------`)
    const serasa_v2_itemA = obter_numero_positivo('Item A:')
    const serasa_v2_itemB = obter_numero_positivo('Item B:')
    const serasa_v2_itemC = obter_numero_positivo('Item C:')

    const pontuacao_v1 = obter_score_v1(serasa_v1_itemA,serasa_v1_itemB,serasa_v1_itemC)
    const pontuacao_v2 = obter_score_v2(serasa_v2_itemA,serasa_v2_itemB,serasa_v2_itemC)

    const perfil_cliente_v1 = obter_perfil_cliente_v1(pontuacao_v1)
    const perfil_cliente_v2 = obter_perfil_cliente_v2(pontuacao_v2)

    mostrar_texto(`----------- RELATORIO ----------`)
    mostrar_texto(`Score 1.0: ${pontuacao_v1} pontos - Categoria ${perfil_cliente_v1}`)
    mostrar_texto(`Score 2.0: ${pontuacao_v2} pontos - Categoria ${perfil_cliente_v2}`)
    mostrar_texto('\n')

}

function obter_score_v1(itemA,itemB,itemC){
    const score_total_v1_itemA = 260
    const score_total_v1_itemB = 570
    const score_total_v1_itemC = 170

    let porcent_itemA = itemA/100
    let porcent_itemB = itemB/100
    let porcent_itemC = itemC/100

    const pontuacao_v1 = (score_total_v1_itemA * porcent_itemA) + (score_total_v1_itemB * porcent_itemB) + (score_total_v1_itemC * porcent_itemC)
    return pontuacao_v1
}

function obter_score_v2(itemA,itemB,itemC){
    const score_total_v2_itemA = 620
    const score_total_v2_itemB = 190
    const score_total_v2_itemC = 190

    let porcent_itemA = itemA/100
    let porcent_itemB = itemB/100
    let porcent_itemC = itemC/100

    const pontuacao_v2 = (score_total_v2_itemA * porcent_itemA) + (score_total_v2_itemB * porcent_itemB) + (score_total_v2_itemC * porcent_itemC)
    return pontuacao_v2
}

function obter_perfil_cliente_v1(pontuacao_v1){

    if (pontuacao_v1 >= 800 && pontuacao_v1 <= 1000){
        return 'Muito bom'
    } else if (pontuacao_v1 >= 600 && pontuacao_v1 < 800){
        return 'Bom'
    } else if (pontuacao_v1 >= 400 && pontuacao_v1 < 600){
        return 'Regular'
    }else if (pontuacao_v1 >= 0 && pontuacao_v1 < 400){
        return 'Baixo'
    }
}

function obter_perfil_cliente_v2(pontuacao_v2){
    
    if (pontuacao_v2 >= 701 && pontuacao_v2 <= 1000){
        return 'Muito bom'
    } else if (pontuacao_v2 >= 501 && pontuacao_v2 <= 700){
        return 'Bom'
    } else if (pontuacao_v2 >= 301 && pontuacao_v2 <= 500){
        return 'Regular'
    }else if (pontuacao_v2 >= 0 && pontuacao_v2 <= 300){
        return 'Baixo'
    }
}
main()