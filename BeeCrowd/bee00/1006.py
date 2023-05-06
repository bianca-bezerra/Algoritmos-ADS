def main():
    #Entrada
    notaA = obter_float()
    notaB = obter_float()
    notaC = obter_float()

    #Processamento
    media = obter_media_ponderada(notaA,notaB,notaC)

    #Saida
    print(f'MEDIA = {media:.1f}')

def obter_float():
    return float(input())

def obter_media_ponderada(n1,n2,n3):
    return (n1 * 2 + n2 * 3 + n3 * 5)/10

main()