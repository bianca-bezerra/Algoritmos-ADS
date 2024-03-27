'''
1. Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.
'''

from string_utils import inverter_string

def main():

    #Entrada
    frase = input('Digite uma frase:')

    #Processamento
    
    resultado_frase = obter_frase(frase)

    #Saída
    print(resultado_frase)

def obter_frase(frase):
    #Inverter
    nova_frase = inverter_string(frase)
    
    nova_frase_final = ''

    #Substituir consoantes por #
    for caractere in nova_frase:
        if caractere != 'a' and caractere != 'e' and caractere != 'i' and caractere != 'o' and caractere != 'u' and caractere != ' ':
            caractere = '#'
        nova_frase_final += caractere
        
    return nova_frase_final

main()