'''
9. Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é
correta ou não.
'''

def main():

    senha_digitada = input("Digite sua senha: ")

    if verificar_senha(senha_digitada):
        print("Senha correta")
    else:
        print("Senha incorreta")

def verificar_senha(senha):

        senha_correta = "senhacorreta"
    
        if senha == senha_correta:
            return True
        else:
            return False
main()