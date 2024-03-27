'''
7. Leia um verbo regular terminado em ER e mostre sua conjugação no presente.
'''
from string_utils import partir

def main():
    #Entrada
    frase = input('Escreva uma frase: ')
    
    #Processamento
    frase_sem_radical = frase[:-2]

    conjugacao_dict = {'eu': frase_sem_radical + 'o'}
    
    #Saída
    print(conjugacao_dict['eu'])
        
main()
