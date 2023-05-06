def main():
    #Entrada
    numA = obter_inteiro()
    numB = obter_inteiro()
    numC = obter_inteiro()
    numD = obter_inteiro()

    #Processamento
    diferenca = obter_diferenca_entre_prod(numA,numB,numC,numD)

    #Saida
    print(f'DIFERENCA = {diferenca}')


def obter_inteiro():
    return int(input())

def obter_diferenca_entre_prod(n1,n2,n3,n4):
    return (n1 * n2 - n3 * n4)

main()