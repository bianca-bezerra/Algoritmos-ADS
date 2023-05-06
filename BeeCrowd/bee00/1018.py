def main():
    #Entrada
    valor =int(input())
    notas = [100, 50, 20, 10, 5, 2, 1]
    
    #Saída
    print(valor)
    for nota in notas:
     qtd_notas = int(valor/nota)
     print('{} nota(s) de R$ {:.0f},00'.format(qtd_notas,nota))
     valor -= qtd_notas * nota

main()