def main():
    #Entrada
    N = int(input('Digite o número de habitantes: '))
    salario_da_populacao = 0
    qtd_filhos_populacao = 0
    qtd_salarios_superior_a_mil = 0

    #Processamento
    for i in range(N):
        salario = float(input('Salário: '))
        num_filhos = float(input('Qtd de filhos: '))

        salario_da_populacao += salario
        qtd_filhos_populacao += num_filhos

        if salario > 1000:
            qtd_salarios_superior_a_mil += 1

    media_salario = obter_media(salario_da_populacao,N)
    media_filhos = obter_media(qtd_filhos_populacao,N)
    percentual = obter_media(qtd_salarios_superior_a_mil,N) * 100

    #Saída
    print('\n')
    print(f'Média salarial: R$ {media_salario}')
    print(f'Média de filhos: R$ {media_filhos}')
    print(f'Percentual de pessoas com salário superior a 1k: R$ {percentual}%')


def obter_media(salario,pessoas):
    return salario/pessoas


main()