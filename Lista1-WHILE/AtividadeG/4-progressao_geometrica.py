def main():
    #Entrada
    termo0 = float(input('Digite um valor:'))
    limite = float(input('Digite um limite para a sequência:'))
    razao = float(input('Digite uma razão:'))
    
    #Saída
    while termo0 < limite:
     print(termo0)

     termo0 *= razao

main()
    