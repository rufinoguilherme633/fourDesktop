"use strict";

document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function() {
    // Coloque aqui o código que deseja executar quando o botão for clicado
    var username = document.querySelector('.user input').value;
    var email = document.querySelector('.email input').value;
    var password = document.querySelector('.password input').value;

    // Exemplo: exibir os valores no console
    console.log("Usuário:", username);
    console.log("E-mail:", email);
    console.log("Senha:", password);

    console.log("O botão 'Salvar' foi clicado!");

    
    function createCadastroAdm(adm) {
      const url = 'http://localhost:8080/v1/educ_four/adm/post';
      const options = {
        method: 'POST',
        body: JSON.stringify(adm),
        headers:{
          "Content-Type": "application/json"
        }
      };
      fetch(url, options )
      // console.log(options)
    }
    const adm = {
      "titulo": username,
      "descricao": email,
      "senha": password
    };

    createCadastroAdm(adm);
  });

});
