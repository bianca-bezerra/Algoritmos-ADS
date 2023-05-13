from lib_utils import *

def main():
    #Entrada
    N = obter_num_int('Digite o número de habitantes questionados:')
    mostrar_texto('\n')

    contador_salario = 0
    contador_filhos = 0
    contador_salario_ate_mil = 0
    habitantes = N

    #Processamento
    while N != 0:
        salario = obter_num_float('Salário:')
        qtd_filhos = obter_num_float('Quantidade de filhos:')

        contador_salario += salario
        contador_filhos += qtd_filhos

        if salario <= 1000:
            contador_salario_ate_mil += 1
            
        N -= 1

    media_salarial = obter_media(contador_salario,habitantes)
    media_filhos = obter_media(contador_filhos,habitantes)
    percentual_salario = obter_percentual(contador_salario_ate_mil,habitantes)

    #Saída
    mostrar_texto('\n')
    mostrar_texto(f'> Média de salário da população: R$ {media_salarial}')
    mostrar_texto(f'> Média de filhos: {media_filhos}')
    mostrar_texto(f'> Percentual de pessoas que ganham até R$ 1000: {percentual_salario}%')

main()