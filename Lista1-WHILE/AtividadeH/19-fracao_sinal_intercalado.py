from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite um número:')

    subtraendo1 = 2
    subtraendo2 = 1
    numerador_positivo = 1
    denominador_positivo = N
    denominador_negativo = 2
    
    #Processamento
    while N != 0:
        numerador_negativo = N - subtraendo2

        #Saída
        mostrar_texto(f'+ {numerador_positivo}/{denominador_positivo}',end=' ')
        mostrar_texto(f'- {numerador_negativo}/{denominador_negativo}',end=' ')

        #Numero positivo
        numerador_positivo += 2
        denominador_positivo = N - subtraendo1
        subtraendo1 += 1
        
        #Numero negativo
        subtraendo2 += 1
        denominador_negativo += 2

        
        N -= 1
        
main()