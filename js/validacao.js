//UMA CLASSE COM, FUNÇÕES DE VALIDAÇÃO
class Usuario{

    constructor(){
        
    }
    
    enviar(){
        let usuario = this.lerDados()
        if (this.validaCampos(usuario)) {
            return true
        }else{
            return false
        }
    }
    lerDados(){
        
        let usuario ={}
        usuario.nome = document.getElementById('fnome').value
        usuario.email = document.getElementById('fmail').value
        usuario.mensagem = document.getElementById('fmsg').value
        return usuario
    }

    validaCampos(usuario){
        let msg=''

        if (usuario.nome =='') {
           msg+='-Insira o seu nome\n' 
        }
        if(usuario.email==''){
            msg+='-Insira o seu e-mail\n'
        }
        if (usuario.mensagem=='') {
            msg+='-Deixe a sua mensagem\n'
        }
        if (msg!=''){
            alert(msg)
            return false
        } 
        return true
       

    }
}

var usuario = new Usuario()