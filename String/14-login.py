'''
14. Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte
regra: o login é composto pelas letras iniciais do nome do usuário.
'''
from string_utils import partir

def main():
    #Entrada
    nome_do_usuario = partir(input('Digite seu nome: '))

    #Processamento
    senha = obter_senha_com_iniciais(nome_do_usuario)

    #Saída
    print(f'Senha = {senha}')


def obter_senha_com_iniciais(nome_do_usuario):
    iniciais = []
    for nome in nome_do_usuario:
        iniciais.append(nome[0])

    senha = ''
    for letra in iniciais:
        senha += letra
    
    return senha

main()