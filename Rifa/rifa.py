from rifa_features import *
from rifa_utils import *


def main():

    opcao = -1
    valor_da_rifa = 0
    taxa_de_adm = 0
    num_premios_rifados = 0

    VALOR_PONTO = '1'
    TAXA_ADM = '2'
    VALOR_ARRECADADO = '3'
    QTD_PREMIOS = '4'
    QTD_PONTOS_LIVRES = '5'
    QTD_PONTOS_VENDIDOS = '6'
    INFO_GERAL = '7'
    ZERAR =  '8'
    SORTEIAR = '9'

    while opcao != '0':
        print(menu())
        opcao = input('\n>>> ')
        compradores = verificar_pontos_vendidos()[0]
        pontos_vendidos = len(verificar_pontos_vendidos()[0])
        pontos_disponiveis = qtd_pessoas() - pontos_vendidos

        if opcao == VALOR_PONTO:
            valor_da_rifa = obter_numero('> Informe o valor do ponto: ') 
            print(f'Valor da rifa = R$ {valor_da_rifa}')
            print('\nValor da rifa atualizado com sucesso!') 

        elif opcao == TAXA_ADM:
            taxa_de_adm = obter_numero('> Informe a taxa de administração: ')
            print(f'Taxa de administração = {taxa_de_adm}%')

        elif opcao == VALOR_ARRECADADO:

            if  valor_da_rifa == 0 or taxa_de_adm == 0:
                print('Variáveis dessa cálculo ainda indefinidas. Verifique se há valor de rifa e taxa de administração definidos!')

            else:
                valor_arrecadado = calcular_valor_arrecadado(pontos_vendidos,valor_da_rifa,taxa_de_adm)[0]
                print(f'Valor arrecadado = R$ {valor_arrecadado}')

                valor_liquido = calcular_valor_arrecadado(pontos_vendidos,valor_da_rifa,taxa_de_adm)[1]
                print(f'Valor líquido = R$ {valor_liquido}')

                valor_da_taxa = calcular_valor_arrecadado(pontos_vendidos,valor_da_rifa,taxa_de_adm)[2]
                print(f'Valor dado a plataforma = R$ {valor_da_taxa}')

        elif opcao == QTD_PREMIOS:
            num_premios_rifados = int(input(('> Informe a quantidade de prêmios rifados: ')))
            dinheiro_dos_premios = definir_premios(num_premios_rifados)
            print(f'\nQuantidade de prêmios rifados = {num_premios_rifados}')
            

        elif opcao == QTD_PONTOS_LIVRES:
            print(f'Quantidade de pontos disponíveis = {pontos_disponiveis}\n')
            listar_pontos_disponiveis()
        
        elif opcao == QTD_PONTOS_VENDIDOS:
            print(f'Quantidade de pontos vendidos = {pontos_vendidos}\n')
            listar_pessoas_pontos()

        elif opcao == ZERAR:
            valor_da_rifa = 0
            taxa_de_adm = 0
            valor_arrecadado = 0
            print('Resetado!')
        
        elif opcao == INFO_GERAL:
            if valor_da_rifa == 0 or taxa_de_adm == 0 or valor_arrecadado == 0 or num_premios_rifados == 0:
                print('Informações não registradas ainda, verifique se foram preenchidas.')
            else:
                print('Informações gerais: \n')
                print(f'Valor da rifa = R$ {valor_da_rifa}')
                print(f'Valor da taxa de adm = R$ {calcular_valor_arrecadado(pontos_vendidos,valor_da_rifa,taxa_de_adm)[2]}')
                print(f'Valor arrecadado = R$ {valor_arrecadado}')
                print(f'Quantidade de prêmios = {num_premios_rifados}')
        
        elif opcao == SORTEIAR:
            sortear(num_premios_rifados,pontos_vendidos,compradores)

        input('\n<Press enter to continue>')
        limpar_tela()
    
    goodbye()
           
main()