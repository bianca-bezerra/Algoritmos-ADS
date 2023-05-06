import math
def main():
    #Entrada
    idade_dias = int(input())

    #Processamento
    anos = math.floor(idade_dias/365)
    resto_anos = (idade_dias % 365)
    meses = math.floor(resto_anos/30)
    dias = math.floor(resto_anos % 30)

    #Saída
    print(f'{anos} ano(s)')
    print(f'{meses} mes(es)')
    print(f'{dias} dia(s)')

main()