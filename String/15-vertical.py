'''
15. Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.
'''
from string_utils import contar_qtd_caracteres
from string_utils import vertical

def main():
    #Entrada
    palavra = input('Digite uma palavra: ')

    #Processamento
    num_de_caracteres = contar_qtd_caracteres(palavra)

    palavra_vertical = vertical(num_de_caracteres,palavra)

main()