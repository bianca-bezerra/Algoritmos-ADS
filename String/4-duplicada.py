'''
4. Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.
'''

from string_utils import obter_frase_caracter_duplicado

def main():
    #Entrada
    frase = input('Digite uma frase: ')

    #Processamento
    resultado = obter_frase_caracter_duplicado(frase)

    #Saída
    print(resultado)

main()