from lib_utils import obter_num_int
from lib_utils import mostrar_texto

def main():

    #Entrada
    N = obter_num_int('Digite a quantidade de funcionários: ')
    mostrar_texto('\n')

    desconto_INSS = 0.085
    desconto_IR = 0.05

    #Processamento
    while N != 0:
        mostrar_texto('='*30)
    
        horas_trabalhadas = obter_num_int('Número de horas trabalhadas: ')
        num_dependentes = obter_num_int('Número de dependentes do funcionário: ')

        salario_bruto = obter_salario_bruto(horas_trabalhadas,num_dependentes)
        salario_final = obter_salario_final(salario_bruto,desconto_INSS,desconto_IR)
        INSS = 0.085 * salario_bruto
        IR = 0.05 * salario_bruto
        
        #Saída
        mostrar_texto(f'Desconto INSS -> R$ {INSS}')
        mostrar_texto(f'Desconto IR -> R$ {IR}')
        mostrar_texto(f'Salário liquido -> R$ {salario_final}')

        N -= 1
    

def obter_salario_bruto(horas,dependentes):
    return 12 * horas + 40 * dependentes

def obter_salario_final(salario,INSS,IR):
    return salario - ((salario * INSS) + (salario * IR))

main()