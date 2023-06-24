import math
import random
import os
from termcolor import colored
from time import *

def bubble_sort(vetor_recebido):
    vetor = vetor_recebido[:]
    for i in range(len(vetor)):
        for i in range(len(vetor) - 1):
            if vetor[i] > vetor[i + 1]:
                atual = vetor[i]
                proximo = vetor[i + 1]
                vetor[i] = proximo
                vetor[i+1] = atual
    return vetor

def show_vetor(vetor):
    mostrar_texto_inline('[')
    for item in vetor:
        mostrar_texto_inline(f' {item}')
    print(' ]')

def mostrar_texto_inline(label='',sep=''):
    print(label,sep,end='')

def show_matriz(matriz):
    for linha in matriz:
        show_vetor(linha)

def obter_numero(label):
    numero = int(input(label))
    return numero

def menu():
    opcoes = colored('==================== PATROBET ====================','light_magenta')
    opcoes += '\n1 - Vender bilhete(s)'
    opcoes += '\n2 - Mostrar valor arrecadado'
    opcoes += '\n3 - Realizar sorteio'
    opcoes += '\n4 - Mostrar resultados'
    opcoes += '\n5 - Mostrar distribuição dos prêmios'
    opcoes += '\n6 - Mostrar bilhetes'
    opcoes += '\n7 - Zerar sistema'
    opcoes += colored('\n0 - Sair','magenta')
    opcoes += '\n\n>>>: '

    return opcoes

def menu_resultados():
    opcoes = colored('########## RESULTADOS ##########\n','blue')
    opcoes += '\n1 - Mostrar resultado da Quadra'
    opcoes += '\n2 - Mostrar resultado da Quina'
    opcoes += '\n3 - Mostrar resultado da Sena'
    opcoes += colored('\n0 - Voltar ao menu principal\n','light_blue')
    opcoes += colored('\n###############################','blue')
    opcoes += '\n\n>>>: '
    return opcoes

def limpar_tela():
    input(colored('\n<Press enter to continue>','light_green'))
    os.system('cls' if os.name == 'nt' else 'clear')

def vender_bilhetes(bilhetes):
    quantidade = obter_numero('> Quantidade de bilhetes desejados: ')

    for _ in range(quantidade):
        novo_bilhete = gerar_surpresinha()
        bilhetes.append(novo_bilhete)

    print(f'\nForam gerados {quantidade} bilhetes!')

def gerar_surpresinha():
    bilhete = []

    while len(bilhete) < 6:
        numero_randomico = obter_dezena_valida()

        if numero_randomico not in bilhete:
            bilhete.append(numero_randomico)

    return bubble_sort(bilhete)

def gerar_manual():
    bilhete = []

    while len(bilhete) < 6:
        numero = obter_numero(f'Informe um número: ')
        
        if numero not in bilhete:
            bilhete.append(numero)

    return bubble_sort(bilhete)

def menu_venda():
    opcoes = colored('\n########## VENDA DE BILHETES ##########\n','blue')
    opcoes += '\n1 - Gerar bilhete aleatório'
    opcoes += '\n2 - Gerar bilhete manual'
    opcoes += colored('\n0 - Voltar ao menu principal\n','light_blue')
    opcoes += colored('\n#######################################','blue')
    opcoes += '\n\n>>>: '
    return opcoes

def vender_bilhetes_manual(bilhetes):
    quantidade = obter_numero('> Quantidade de bilhetes desejados: \n')

    for _ in range(quantidade):
        print(f'Bilhete {_ + 1}')
        novo_bilhete = gerar_manual()
        bilhetes.append(novo_bilhete)
        print('\n')
    

    print(f'\nForam gerados {quantidade} bilhetes manuais!')


def obter_dezena_valida():
    return math.floor(random.random() * 60 + 1)

def show_bilhetes(bilhetes):
    print(colored('========== Bilhetes PatroBET ==========\n','light_blue'))
    
    bilhetes = bubble_sort(bilhetes)
    if len(bilhetes) < 1:
        
        print(colored('> Não há bilhetes ainda','light_red'))
        return
    show_matriz(bilhetes)

def obter_valor_arrecadado(bilhetes):
    valor_arrecadado = len(bilhetes) * 4.5
    return valor_arrecadado

def gerar_random(inicio,fim):
    numero = random.randint(inicio,fim)
    return numero

def maior_que_0(numero):
    if numero > 0:
        return True
    else:
        return False

def definir_valor_premios(arrecadado,ganhadores_sena,ganhadores_quina,ganhadores_quadra):
    premio_total = math.floor(arrecadado * 0.4335)

    if maior_que_0(ganhadores_sena):
        premio_sena = (premio_total * 0.35)/ganhadores_sena
    else:
        premio_sena = 0

    if maior_que_0(ganhadores_quina):
        premio_quina = (premio_total * 0.19)/ganhadores_quina
    else:
        premio_quina = 0

    if maior_que_0(ganhadores_quadra):
        premio_quadra = math.floor(premio_total * 0.19)/ganhadores_quadra
    else:
        premio_quadra = 0

    return [premio_quadra,premio_quina,premio_sena]


def gerar_numeros_sorteados():
    sorteados = []
  
    while len(sorteados) < 6:
        sorteado = random.randint(1, 60)
        if sorteado not in sorteados:
            sorteados.append(sorteado)
           
    return sorteados

def printar_numeros_sorteados(sorteados):
    print(colored('\n> Números sorteados','yellow'))
    print('[', end=' ')
    for sorteado in sorteados:
        sorteado_colorful = colored(sorteado,'light_yellow')
        sleep(1)
        print(sorteado_colorful, end=' ', flush=True)
    print(']')

def verificar_acertos_senas(bilhetes, sorteados):
    senas = []

    for bilhete in bilhetes:
        bilhete_colorido = []
        acertos = 0 
        for numero in bilhete:
            if numero in sorteados:
                bilhete_colorido.append(colored(numero,'light_green'))
                acertos += 1
            else:
                bilhete_colorido.append(numero)

        if acertos == 6:
            senas.append(bilhete_colorido)

    return senas

def verificar_acertos_quadra(bilhetes, sorteados):
    quadras = []

    for bilhete in bilhetes:
        bilhete_colorido = []
        acertos = 0 
        for numero in bilhete:
            if numero in sorteados:
                bilhete_colorido.append(colored(numero,'light_green'))
                acertos += 1
            else:
                bilhete_colorido.append(numero)

        if acertos == 4:
            quadras.append(bilhete_colorido)

    return quadras

def verificar_acertos_quinas(bilhetes, sorteados):
    quinas = []

    for bilhete in bilhetes:
        bilhete_colorido = []
        acertos = 0 
        for numero in bilhete:
            if numero in sorteados:
                bilhete_colorido.append(colored(numero,'light_green'))
                acertos += 1
            else:
                bilhete_colorido.append(numero)

        if acertos == 5:
            quinas.append(bilhete_colorido)

    return quinas




    
    
    


    


