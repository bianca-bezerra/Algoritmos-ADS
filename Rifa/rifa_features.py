import random
import os

def obter_numero(text):
    numero = float(input(text))
    return numero

def limpar_tela():
    os.system('cls' if os.name == 'nt' else 'clear')

def menu():
    opcoes = "\n=================== RIFA DA BIANCA ====================\n"
    opcoes += '\n1 - Determinar valor do ponto da rifa'
    opcoes += '\n2 - Determinar taxa de administração'
    opcoes += '\n3 - Verificar valor arrecadado'
    opcoes += '\n4 - Determinar quantos prêmios serão rifados'
    opcoes += '\n5 - Mostrar quantidade de pontos disponíveis'
    opcoes += '\n6 - Mostrar quantidade de pontos vendidos'
    opcoes += '\n7 - Mostrar informações gerais'
    opcoes += '\n8 - Resetar'
    opcoes += '\n9 - Sortear'
    opcoes += '\n0 - SAIR\n'
    opcoes += '\n========================================================\n'
    return opcoes

def ler_arquivo():
    with open('rifa.txt', 'r') as arquivo:
        linhas = arquivo.readlines()
        linhas = [linha.strip() for linha in linhas]
    return linhas

def qtd_pessoas():
    linhas = ler_arquivo()
    qtd_pessoas = len(linhas)
    return qtd_pessoas

def definir_premios(num_premios):
    premios = []
    for _ in range(num_premios):
        valor = obter_numero(f'> Valor do prêmio {_ + 1} = ')
        premios.append(valor)

    print('\nValores dos prêmios:')
    for premio in premios:
        print(f'> R$ {premio}')
    return premios

def verificar_pontos_vendidos():
    linhas = ler_arquivo()
    vendido = []
    nao_vendido = []
    for linha in linhas:
        if '-' in linha:
            nao_vendido.append(linha)
        else:
            vendido.append(linha)
    return [vendido,nao_vendido]

def calcular_valor_arrecadado(pontos_vendidos, valor_ponto, taxa):
    valor_arrecadado =  pontos_vendidos * valor_ponto
    valor_da_taxa = valor_arrecadado * taxa/100
    valor_liquido = valor_arrecadado - valor_da_taxa
    return [valor_arrecadado,valor_liquido,valor_da_taxa]

def obter_numero_random(inicio,fim):
    numero_random = random.randint(inicio,fim)
    return numero_random

def sortear(premios,pontos_vendidos,compradores):
    ganhadores = []
    for _ in range(premios):
        index_ganhador =  obter_numero_random(0,pontos_vendidos - 1)
        ponto_ganhador = compradores[index_ganhador]
        if ponto_ganhador not in ganhadores:
            ganhadores.append(ponto_ganhador)

    print('\n> Ganhadores:')
    for ganhador in ganhadores:
        print(ganhador)
    

def listar_pessoas_pontos():
    pessoas = ler_arquivo()

    print('> Pontos vendidos: ')
    for i in range(len(pessoas)):
        if '-' in pessoas[i]:
            continue
        else:
            print(f'{i} - {pessoas[i]}')

def listar_pontos_disponiveis():
    pessoas = ler_arquivo()

    print('> Pontos disponiveis: ')
    for i in range(len(pessoas)):
        if '-' in pessoas[i]:
            print(f'{i}')

def goodbye():
    print('Tchau coração! <3')
     




    

    


