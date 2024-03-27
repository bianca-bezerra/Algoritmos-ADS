'''
10. Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.
'''

from string_utils import inverter_string


def main():
    #Entrada
    palavra = input('Digite uma palavra:')

    #Processamento
    verificacao = 'É palíndroma' if (eh_palindroma(palavra)) else 'Não é palíndroma'

    #Saída
    print(verificacao)


def eh_palindroma(palavra):
    palavra_invertida = inverter_string(palavra)

    if palavra == palavra_invertida:
        return True
    else:
        return False

main()