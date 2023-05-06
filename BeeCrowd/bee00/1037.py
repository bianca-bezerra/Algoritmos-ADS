def main():
    #Entrada
    valor = float(input())

    #Processamento
    intervalo = obter_intervalo(valor)

    #Saída
    print(f'{intervalo}')

def obter_intervalo(valor):
    if valor >= 0 and valor <= 25.0000:
        intervalo = 'Intervalo [0,25]'
    elif valor > 25.000 and valor <= 50.0000:
        intervalo = 'Intervalo (25,50]'
    elif valor > 50 and valor <= 75.0000:
         intervalo = 'Intervalo (50,75]'
    elif valor > 75 and valor <= 100.0000:
         intervalo = 'Intervalo (75,100]'
    else:
        intervalo = 'Fora de intervalo'
    return intervalo

main()