def main():
    #Entrada
    codigo_peca1,num__de_pecas1,valor_uni_peca1 = list(map(float,input().split()))
    codigo_peca2,num__de_pecas2,valor_uni_peca2 = list(map(float,input().split()))

    #Processamento
    valor_peca1 = obter_saldo(num__de_pecas1,valor_uni_peca1)
    valor_peca2 = obter_saldo(num__de_pecas2,valor_uni_peca2)
    valor_total_a_pagar = valor_peca1 + valor_peca2

    #Saída
    print(f'VALOR A PAGAR: R$ {valor_total_a_pagar:.2f}')

def obter_saldo(num_de_pecas,valor_por_peca):
    return num_de_pecas * valor_por_peca

main()