from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():
    #Entrada
    N = obter_num_int('Digite um número: ')

    numerador = 1
    denominador = 1

    #Processamento
    while N > 0:
        #Saída
        mostrar_texto(f'+ {numerador}/{denominador}', end=' ')
        
        numerador += 2
        denominador += 1
        N -= 1
    
    mostrar_texto('=> FIM')
        
main()