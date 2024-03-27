'''
13. As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro,
texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das
primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio
Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o
escreva no formato de bibliografia.
'''
from string_utils import partir

def main():
    #Entrada
    nome = input('Digite o nome: ')

    #Processamento
    nome_formatado = formatar_nome_bibliografia(nome)

    #Saída
    print(nome_formatado)

def formatar_nome_bibliografia(nome_completo):
    partes_do_nome = nome_completo.split()
    sobrenome = partes_do_nome[-1]
    iniciais = [parte[0] + '.' for parte in partes_do_nome[:-1]]
    nome_formatado = sobrenome + ', ' + ' '.join(iniciais)
    
    return nome_formatado


main()
