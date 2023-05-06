def main():
    #Entrada
    notaA = obter_float()
    notaB = obter_float()

    #Processamento
    media = (notaA * 3.5 + notaB * 7.5)/11

    #Saída
    print(f'MEDIA = {media:.5f}')

def obter_float():
    return float(input())

main()