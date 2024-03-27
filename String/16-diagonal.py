'''
Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:
diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.
'''
from string_utils import diagonal

def main():
    #Entrada
    texto = input()

    #Saída
    nome_em_diagonal = diagonal(texto)

main()