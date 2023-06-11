from entrada_saida import *

#Lista os divisores do número
def divisores(num):
    lista_divisores = []

    for i in range(1, num+1):
        if num % i == 0:
            lista_divisores.append(i)

    return lista_divisores

#Calcula MMC
def mmc(a,b):
    mmc = a
    while not(mmc % b == 0 and mmc % a == 0):
        mmc += 1
    return mmc

#Calcula MDC
def mdc(a,b):
    mdc = a
    while not(a % mdc == 0 and b % mdc == 0):
        emedc -= 1
    return mdc

#Diz se é par
def eh_par(num):
    if num % 2 == 0:
        return True
    return False

#Diz se é ímpar
def eh_impar(num):
    if num % 2 == 1:
        return True
    return False

#Diz se é primo
def eh_primo(num):
    if num < 0:
        return False
    if num == 0 or num == 1 or num == 2 or num == 3 or num == 5 or num == 7:
        return True
    elif (num % 2 == 0 or num % 3 == 0 or num % 5 == 0 or num % 7 == 0):
        return False
    return True

#Diz se o número é igual a soma de seus divisores
def eh_numero_perfeito(numero):
    soma_divisores = 0

    for i in range(1, numero):
        if numero % i == 0:
            soma_divisores += i
            
    if soma_divisores == numero:
        return True
    else:
        return False

#Calcula a raiz quadrada
def raiz_quadrada(num):
    return num ** (1/2)

#Calcula raiz cúbica
def raiz_cubica(num):
    return num ** (1/3)

#Calcula qualquer raiz
def raiz(num,indice):
    return num ** (1/indice)