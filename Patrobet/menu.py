from features import *
from termcolor import colored

def main():
    opcao = obter_numero(menu())
    bilhetes = []

    VENDER_BILHETE = 1
    VALOR_ARRECADADO = 2
    PREMIOS = 5
    REALIZAR_SORTEIO = 3
    MOSTRAR_RESULTADOS = 4
    MOSTRAR_BILHETES = 6
    ZERAR = 7

    while opcao != 0:
    
        if opcao == VENDER_BILHETE:

            opcao2 = obter_numero(menu_venda())

            while opcao2 != 0:
                
                if opcao2 == 1:
                    vender_bilhetes(bilhetes)
                if opcao2 == 2:
                    vender_bilhetes_manual(bilhetes)
                
                limpar_tela()
                print(menu())
                opcao2 = obter_numero(menu_venda())
                
        if opcao == VALOR_ARRECADADO:
            if len(bilhetes) >= 1:
                valor_arrecadado = obter_valor_arrecadado(bilhetes)
                arrecadado_colorido = colored('> Valor arrecadado','green')
                print(f'{arrecadado_colorido} = R$ {valor_arrecadado}')
            else:
                print(colored('> Ainda não foram vendidos bilhetes!','red'))

        if opcao == PREMIOS:
            print(colored('########### DISTRIBUIÇÃO PRÊMIOS ###########\n','blue'))
            premiacoes = definir_valor_premios(valor_arrecadado,len(senas),len(quinas),len(quadras))
            print(f'> Prêmio para cada ganhador da quadra = R$ {premiacoes[0]}')
            print(f'> Prêmio para cada ganhador da quina = R$ {premiacoes[1]}')
            print(f'> Prêmio para cada ganhador da sena = R$ {premiacoes[2]}')
            print(colored('\n##########################################','blue'))

        if opcao == REALIZAR_SORTEIO:
            sorteados = gerar_numeros_sorteados()
            senas = verificar_acertos_senas(bilhetes,sorteados)
            quadras = verificar_acertos_quadra(bilhetes,sorteados)
            quinas = verificar_acertos_quinas(bilhetes,sorteados)
            
            printar_numeros_sorteados(sorteados)

            print(f'\n> {len(quadras)} acertaram a quadra!')

            print(f'> {len(quinas)} acertaram a quina!')

            if len(senas) > 0:
                print(f'> {len(senas)} acertaram a sena!')
            else:
                print(colored('\n      ACUMULOU!!!!!','yellow'))
            
        if opcao == MOSTRAR_RESULTADOS:
            opcao3 = obter_numero(menu_resultados())
            
            while opcao3 != 0:
                
                if opcao3 == 1:
                    if len(quadras) > 0:
                        print(f'> Há {len(quadras)} quadra(s)!')
                        show_matriz(quadras)
                    else:
                        print(colored('> Não há quadras','light_red'))

                elif opcao3 == 2:
                    if len(quinas) > 0:
                        print(f'> Há {len(quinas)} quina(s)!')
                        show_matriz(quinas)
                    else:
                        print(colored('> Não há quinas!','light_red'))

                elif opcao3 == 3:
                    if len(senas) > 0:
                        print(f'> Há {len(senas)} sena(s)!')
                        show_matriz(senas)
                    else:
                        print(colored('> Não há senas','light_red'))

                limpar_tela()
                print(menu())
                opcao3 = obter_numero(menu_resultados())

        if opcao == MOSTRAR_BILHETES:
            show_bilhetes(bilhetes)

        if opcao == ZERAR:
            bilhetes = []
            print(colored('> Sistema resetado com sucesso!','green'))

        limpar_tela()
        opcao = obter_numero(menu())


main()
