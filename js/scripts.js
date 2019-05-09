
        // Usuários válidos //
var usuarios = [
        { 'user': 'joao@joao.com', 'senha' : 123},
        { 'user': 'joao@paulo.com', 'senha' : 123},
        {'user': 'joao@gardiano.com', 'senha' : 123}
]
        function logIn() {
                // usuário html 
            var login = document.getElementById("email").value;
                // senha html
            var password = document.getElementById("password").value;   
                // loop
            for (a = 0; a < usuarios.length; a++) {
                // Se login = usuários válidos e password = senhas válidas = logar
        if (login == usuarios[a].user && password == usuarios[a].senha)
        {
          alert(login + ' Bem-Vindo!!')
          return;  
        }       
      } 
               // caso o usuario e senha não sejam válidos retornar um alerta       
         alert('Usuário(a) ou senha inválida.')
    }
