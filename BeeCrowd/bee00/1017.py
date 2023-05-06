def main():
    #Entrada
    tempo_gasto = int(input())
    km_por_hora = int(input())

    #Processamento
    distancia_percorrida = tempo_gasto * km_por_hora
    combustivel_necessario = distancia_percorrida/12

    #Saída
    print(f'{combustivel_necessario:.3f}')

main()