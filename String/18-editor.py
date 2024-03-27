'''
18. Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um
texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.
'''

from string_utils import replace

def main():
    #Entrada
    frase = input("Digite uma frase: ")
    subcadeia_antiga = input("Digite a subcadeia antiga: ")
    subcadeia_nova = input("Digite a subcadeia nova: ")

    #Processamento
    nova_frase = replace(frase, subcadeia_antiga, subcadeia_nova)

    #Saída
    print("Nova frase:", nova_frase)

main()
