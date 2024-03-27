from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite um número:')

    numerador = 1
    denominador_positivo = 1
    denominador_negativo = 2

    while N >= 1:
        #Saída
        mostrar_texto(f'+ {numerador}/{denominador_positivo}',end=' ')
        mostrar_texto(f'- {numerador}/{denominador_negativo}',end=' ')

        denominador_positivo += 2
        denominador_negativo += 2
        N -= 1
        
main()