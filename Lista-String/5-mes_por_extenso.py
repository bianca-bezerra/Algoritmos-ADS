'''
5. Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).
'''
from string_utils import partir

def main():
    #Entrada
    data = (input('Digite um data: '))

    while data[2] != '/' or data[5] != '/':
        data = (input('Digite uma data em formato válido (DD/MM/AAAA): '))

    #Processamento
    dia = data[0] + data[1]
    mes = data[3] + data[4]
    ano = data[6] + data[7] + data[8] + data[9]

    if mes == '01':
        mes = 'Janeiro'
    if mes == '02':
        mes = 'Fevereiro'
    if mes == '03':
        mes = 'Março'
    if mes == '04':
        mes = 'Abril'
    if mes == '05':
        mes = 'Maio'
    if mes == '06':
        mes = 'Junho'
    if mes == '07':
        mes = 'Julho'
    if mes == '08':
        mes = 'Agosto'
    if mes == '09':
        mes = 'Setembro'
    if mes == '10':
        mes = 'Outubro'
    if mes == '11':
        mes = 'Novembro'
    if mes == '12':
        mes = 'Dezembro'

    #Saída
    print(f'{dia} de {mes} de {ano}')
main()