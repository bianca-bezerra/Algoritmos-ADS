'''
Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto,
10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.
'''
from string_utils import substr

def main():
    #Entrada
    texto = input("Digite o texto: ")
    qtd_de_caracteres = int(input("Digite a quantidade de caracteres desejados: "))
    posicao_de_inicio = int(input("Digite a posição de início: "))

    #Processamento
    palavra_substr = substr(texto, qtd_de_caracteres, posicao_de_inicio)

    #Saída
    print(palavra_substr)
    
main()
