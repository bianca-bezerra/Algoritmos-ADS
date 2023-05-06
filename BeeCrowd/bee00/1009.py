def main():
    #Entrada
    nome = obter_string()
    salario_fixo = obter_float()
    total_vendas_mensais = obter_float()

    #Processamento
    comissao = obter_comissao(total_vendas_mensais)
    salario_final = salario_fixo + comissao
     
    #Saída
    print(f'TOTAL = R$ {salario_final:.2f}')


def obter_string():
    return input()

def obter_float():
    return float(input())

def obter_comissao(vendas):
    return (vendas * 0.15)

main()