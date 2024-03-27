'''
11. Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de
palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.
'''

from string_utils import qtd_palavras
from string_utils import partir


def main():
    #Entrada
    texto = partir(input('Digite uma frase:'))

    #Processamento
    numero_de_palavras = qtd_palavras(texto)

    #Saída
    print(f'Há {numero_de_palavras} palavra(s)')

main()
