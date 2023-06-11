from string_utils import *

#Print
def mostrar_texto(conteudo='',sep='',end='\n'):
    print(conteudo,sep,end)

#Print na mesma linha
def mostrar_texto_inline(conteudo):
    mostrar_texto(conteudo, end='')

#Mostrar o conteudo do print em caixa alta
def mostrar_texto_caixa_alta(contexto):
    return mostrar_texto(gerar_texto_caixa_alta(contexto))

#Mostrar o conteudo do print em caixa baixa
def mostrar_texto_caixa_baixa(contexto):
    return mostrar_texto(gerar_texto_caixa_baixa(contexto))

#Input
def obter_texto(label='Digite um texto: '):
    texto = input(label)
    if texto == '':
        return obter_texto(label='Digite novamente um texto válido: ')
    return texto

#Obter input de tamanho mín
def obter_texto_tam_minimo(label,minimo):
    while len(label) < minimo:
        label = obter_texto(f'Digite um texto de tamanho {minimo}: ')
    return label

#Obter input de tamanho máx
def obter_texto_tam_maximo(label,maximo):
    while len(label) > maximo:
        label = obter_texto(f'Digite um texto de tamanho {maximo}: ')
    return label

#Obter input na faixa min e maxima
def obter_texto_min_max(label,minimo,maximo):
    while len(label) < minimo or len(label) > maximo:
        label = obter_texto(f'Digite um texto de tamanho {minimo} a {maximo}: ')

#Obter numero
def obter_numero(label):
    numero = float(input(label))
    return numero

#Obter numero positivo
def obter_numero_positivo(label):
    numero = float(input(label))

    while numero < 0:
        print('Digite um número válido!')
        numero = float(input(label))
    return numero

#Obter numero negativo
def obter_numero_negativo(label):
    numero = float(input(label))

    while numero >= 0:
        print('Digite um número válido!')
        numero = float(input(label))
    return numero

#Obter numero mínimo
def obter_numero_minimo(label,minimo):
    numero = float(input(label))

    while numero < minimo:
        print('Digite um número válido!')
        numero = float(input(label))
    return numero

#Obter numero máximo
def obter_numero_maximo(label,maximo):
    numero = float(input(label))

    while numero < maximo:
        print('Digite um número válido!')
        numero = float(input(label))
    return numero

#Obter numero entre faixa min e max
def obter_numero_faixa(label,min,max):
    numero = float(input(label))

    while numero < min or numero > max:
        print('Digite um número válido!')
        numero = float(input(label))
    return numero
        

