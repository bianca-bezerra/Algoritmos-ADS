
def main():
    #Entrada
    A,B,C = list(map(int,input().split()))

    #Processamento
    maior_AB = (A + B + abs(A - B))/2
    maior_final = int((maior_AB + C + abs(maior_AB - C))/2)

    #Saida
    print(f'{maior_final} eh o maior')

main()

