
        // Usuários válidos //
var usuarios = [
        { 'user': 'joao@joao.com', 'senha' : 123},
        { 'user': 'joao@paulo.com', 'senha' : 123},
        {'user': 'joao@gardiano.com', 'senha' : 123}
]
        function logIn() {
           
            var done = 0;    
                // usuário html 
            var login = document.getElementById("email").value;
                // senha html
            var password = document.getElementById("password").value;   
                // loop
            for (a = 0; a < usuarios.length; a++) {
                // Se login = usuários válidos e password = senhas válidas = logar
        if (login == usuarios[a].user && password == usuarios[a].senha)
                {
                // Redirecionar o usuário válido para a próxima página //
                 window.location="C:/Users/Joao Paulo/Desktop/loginjs/home.html"; done = 1; 
                 alert(login + ' Bem-Vindo!')
                // 
                 return;
                }            
    }
    alert('Senha ou Usuário Inválidos')
}   