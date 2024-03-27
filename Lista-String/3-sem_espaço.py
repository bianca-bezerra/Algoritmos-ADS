'''
3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.
'''

from string_utils import obter_frase_sem_espaco


def main():

    #Entrada
    frase = input('Digite uma frase: ')
    
    #Processamento
    resultado_frase = obter_frase_sem_espaco(frase)

    #Saída
    print(resultado_frase)
               
main()