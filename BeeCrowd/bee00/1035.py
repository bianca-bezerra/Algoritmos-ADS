def main():
    #Entrada
    A,B,C,D = list(map(int,input().split()))

    #Processamento
    validacao = obter_validacao(A,B,C,D)

    #Saída
    print(f'{validacao}')

def obter_validacao(a,b,c,d):
    if b > c and d > a and (c + d) > (a + b) and c >= 0 and d >= 0 and a % 2 == 0:
        validacao = 'Valores aceitos'
    else:
        validacao = 'Valores nao aceitos'
    return validacao

main()