def main():
    #Entrada
    numero = obter_inteiro()
    horas_trabalhadas = obter_inteiro()
    valor_hora = obter_float()

    #Processamento
    salario = obter_salario(horas_trabalhadas,valor_hora)

    #Saída
    print(f'NUMBER = {numero}')
    print(f'SALARY = U$ {salario:.2f}')

def obter_inteiro():
    return int(input())

def obter_float():
    return float(input())

def obter_salario(horas,valor_hora):
    return horas * valor_hora

main()