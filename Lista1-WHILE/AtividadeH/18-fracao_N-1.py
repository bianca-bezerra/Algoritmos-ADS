from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite um número:')
    numerador = 1
    denominador = N
    
    mostrar_texto('S =>', end= ' ')

    while N >= 1:
        #Saída
        mostrar_texto(f'{numerador}/{denominador}', end=' + ')

        #Processamento
        subtraendo = 1
        denominador = N - subtraendo

        numerador += 1
        subtraendo += 1
        N -= 1

    mostrar_texto('FIM')    
    
main()