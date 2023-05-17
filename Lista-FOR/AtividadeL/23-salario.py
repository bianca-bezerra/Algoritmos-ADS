def main():
    #Entrada
    N = int(input('Digite o número de funcionários: '))

    #Processamento
    for i in range(N):
        horas_trabalhadas = int(input('Horas trabalhadas: '))
        num_dependentes = int(input('Dependentes: '))

        salario_bruto = obter_salario(horas_trabalhadas,num_dependentes)
        descontoINSS = obter_INSS(salario_bruto)
        descontoIR = obter_IR(salario_bruto)
        salario_liquido = salario_bruto - descontoINSS - descontoIR
        
        #Saída
        print(f'Desconto INSS => R$ {descontoINSS:.2f}')
        print(f'Desconto IR => R$ {descontoIR:.2f}')
        print(f'Salário líquido => R$ {salario_liquido:.2f}')


def obter_salario(horas,dependentes):
    return (12 * horas + 40 * dependentes)
    
def obter_INSS(salario):
    return salario * 0.085
    
def obter_IR(salario):
    return salario * 0.05

main()