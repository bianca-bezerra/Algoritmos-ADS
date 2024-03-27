'''
12. As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último
sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por
Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.
'''

from string_utils import partir

def main():
    #Entrada
    nome_do_passageiro = partir(input('Digite seu nome completo: '))

    #Processamento
    nome_formatado = obter_formatacao(nome_do_passageiro)
    
    #Saída
    print(nome_formatado)

def obter_formatacao(nome_completo):
    return nome_completo[-1] + '/' + nome_completo[0]

main()