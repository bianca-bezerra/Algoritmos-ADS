from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite um número:')
    numero_inicial = 1

   
    #Processamento e saída
    mostrar_texto('S =>', end= ' ')
    while N > 0:
        numero = numero_inicial
        mostrar_texto(f'1/{numero}', end=' + ')
        
        numero_inicial += 1
        N -= 1
    mostrar_texto('FIM')    
    
main()