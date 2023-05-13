from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite o número de fichas: ')

    boi_mais_gordo = - float('inf')
    boi_mais_magro =  float('inf')
    id_menor = 0
    id_maior = 0

    #Processamento
    while N > 0:
        
        peso = obter_num_int('Peso (kg): ')

        if peso > boi_mais_gordo:
            boi_mais_gordo = peso
            id_maior = N
        if peso < boi_mais_magro:
            boi_mais_magro = peso
            id_menor = N

        N -=1
    
    #Saída
    mostrar_texto(f'Boi de menor peso => ID: {id_menor} - {boi_mais_magro} kg')
    mostrar_texto(f'Boi de maior peso => ID: {id_maior} - {boi_mais_gordo} kg')
   
main()