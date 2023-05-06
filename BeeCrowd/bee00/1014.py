def main():
    #Entrada
    distancia = int(input())
    combustivel = float(input())

    #Processamento
    consumo_medio = obter_consumo_medio(distancia,combustivel)

    #Saída
    print(f'{consumo_medio:.3f} km/l')

def obter_consumo_medio(km,litro):
    return km/litro

main()