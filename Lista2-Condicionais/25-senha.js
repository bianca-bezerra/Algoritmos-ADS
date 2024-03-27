/*25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/

import  {question} from "readline-sync";

function main(){
    const senha = '1234'
    const solicitar = question('Senha:')

    if (solicitar === '1234'){
        console.log('Acesso permitido!')
    }else{
        console.log('Acesso negado!')
    }
}
main()