def main():
    #Entrada
    numero = float(input('Digite um número:'))
    multiplicador = 1
    tabuada = 0

    #Saída
    print('------- TABUADA -------')
    while multiplicador <= 10:
      tabuada = numero * multiplicador

      multiplicador += 1

      print(tabuada)
print('-----------------------')

main()