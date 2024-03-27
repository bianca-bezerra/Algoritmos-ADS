#Mostrar caracteres por linha
def mostrar_caracteres_por_linha(string):
    for caractere in string:
        print(caractere)

#Buscar se existe um elemento em uma lista
def contem_caractere(item,lista):
    for elemento in lista:
        if item == elemento:
            return True
    return False

#Contar a quantidade de caracteres
def contar_qtd_caracteres(texto):
    contador = 0
    for caractere in texto:
        contador += 1
    return contador

#Substituir caracteres
def substituir_caractere(string, caractere, substituto):
    nova_string = ""
    for caractere in string:
        if caractere == caractere:
            nova_string += substituto
        else:
            nova_string += caractere
    return nova_string

#Remover caractere de lista
def remover_caractere(texto,caractere):
    texto.remove(caractere)

#Definir se determinado caractere é uma letra
def eh_letra(caractere):
    alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return contem_caractere(caractere,alfabeto)

#Inverter palavra
def inverter_string(palavra):
    invertida = ''
    for caractere in palavra:
        invertida = caractere + invertida
    
    return invertida

#Tirar espaços da frase
def obter_frase_sem_espaco(frase):
    nova_frase= ''

    for caractere in frase:
        if caractere == ' ':
            continue

        nova_frase += caractere
        
    return nova_frase

#Duplicar cada caractere
def obter_frase_caracter_duplicado(frase):
    nova_frase = ''
    for caractere in frase:
        nova_frase += caractere * 2

    return nova_frase

#Quantificar palavras em um texto
def qtd_palavras(lista):
    contador_de_palavras = 0
    for palavra in lista:
        contador_de_palavras += 1

    return contador_de_palavras

#Quantificador caracteres em uma palavra
def contar_ocorrencias_caractere(texto, caractere_buscado):
    ocorrencias = 0
    for char in texto:
        if char == para_caixa_alta(caractere_buscado) or char == para_caixa_baixa(caractere_buscado):
            ocorrencias += 1
    return ocorrencias

#Join
def juntar(string, separador=' '):
    nova_string = ''
    for caractere in string:
         if caractere != separador:
            nova_string += caractere
    return nova_string

#Splitar frase
def partir(stringa, separador=' '):
    nova_string = ''
    string = stringa + separador
    lista = []
    for caractere in string:
        if caractere != separador:
            nova_string += caractere
        else:
            lista.append(nova_string)
            nova_string = ''
    return lista

#Splitar palavra
def partir_palavra(string):
    letras = []
    for caractere in string:
        letras.append(caractere)
    return letras

#Mapear
def mapear(funcao,iteravel):
    #Mapear lista
    if type(iteravel) == list:
        lista_modificada = []
        for item in iteravel:
            lista_modificada.append(funcao(item))
        return lista_modificada

    #Mapear string
    elif type(iteravel) == str:
        string_modificada = ''
        for caractere in iteravel:
            string_modificada += funcao(caractere)
        return string_modificada
    else:
        return iteravel

#Filtrar
def filtrar(funcao_criterio,lista):
    filtrados = []
    for item in lista:
        if funcao_criterio(item):
            filtrados.append(item)
    return filtrados

#Transformar tudo para MAIÚSCULO
def para_caixa_alta(caractere):
    if 97 <= ord(caractere) <= 122:
        return chr(ord(caractere) - 32)
    return caractere

#Transformar tudo para MINÚSCULO
def para_caixa_baixa(caractere):
    if 65 <= ord(caractere) <= 90:
        return chr(ord(caractere) + 32)
    return caractere

#Transformar texto para caixa alta
def gerar_texto_caixa_alta(string):
    return mapear(para_caixa_alta,string)

#Transformar texto para caixa baixa
def gerar_texto_caixa_baixa(string):
    return mapear(para_caixa_baixa,string)

#Pegar pedaço da string
def substring(texto,inicio,fim):
    return texto[inicio:fim]

#Pegar substring com inicio e tam definido
def substr(texto, qtd_de_caracteres, posicao_de_inicio):
    subcadeia = texto[posicao_de_inicio:posicao_de_inicio-1+qtd_de_caracteres]
    return subcadeia

#Diz se há a substring ou não
def contem_substring(texto,substring):
    if substring in texto:
        return True
    else:
        return False
    
#Contar ocorrencias da substring
def contar_qtd_ocorrencias_substring(texto,substring):
    ocorrencias = 0
    for elemento in texto:
        if substring in elemento:
            ocorrencias += 1
        return ocorrencias
    
#Substituir substring
def substituir_caractere(texto, substring, susbtring_substituta):
    nova_string = ""
    for subcadeia in texto:
        if subcadeia == substring:
            nova_string += susbtring_substituta
        else:
            nova_string += subcadeia
    return nova_string

#Remover substring
def remover_substring(texto, substring):
    if substring in texto:

        nova_string = texto.replace(substring, ' ')
        return nova_string
    
    else:
        return texto
    
#Remover substring por faixa
def remover_substring_por_faixa(texto, index_inicio, index_fim):
    
    if index_inicio >= 0 and index_fim <= len(texto):
        nova_string = texto[:index_inicio] + texto[index_fim+1:]

        return nova_string
    
    else:
        return texto


       



