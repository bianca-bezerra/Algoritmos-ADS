'''
Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal
de numeração.
'''

from string_utils import contar_qtd_caracteres

def main():
    #Entrada
    binario = (input('Digite um número em binário: '))

    #Processamento
    numero_convertido_decimal = binario_para_decimal(binario)
    
    #Saída
    print('Número em decimal:', numero_convertido_decimal)


def binario_para_decimal(binario):
    expoente = contar_qtd_caracteres(binario) - 1
    num_decimal = 0

    for numero in binario:
        num_decimal += int(numero) * (2 ** expoente)
        expoente -= 1

    return num_decimal

main()