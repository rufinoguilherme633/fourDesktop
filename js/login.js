"use strict";

async function getadm() {
  const urlnewspaper = "http://localhost:8080/v1/educ_four/adm/get";
  const response = await fetch(urlnewspaper);
  const data = await response.json();
  return data;
}

var button = document.getElementById("test");
button.addEventListener("click", handleLogin);

function handleLogin() {
  var username = document.getElementById("username_input").value;
  var password = document.getElementById("password_input").value;

  // Chame a função getadm() para obter os dados do banco de dados
  getadm().then(function (data) {
    var adms = data.adms;
    var match = false;

    // Itere sobre os adms do banco de dados
    for (var i = 0; i < adms.length; i++) {
      var adm = adms[i];

      // Verifique se os valores digitados pelo usuário correspondem aos valores do banco de dados
      if (username === adm.email && password === adm.senha) {
        match = true;
        break;
      }
    }

    if (match) {
      console.log("Credenciais corretas. Acesso permitido.");
    } else {
      console.log("Credenciais incorretas. Acesso negado.");
    }
  });

  // Ou você pode enviar os valores para um servidor, fazer uma validação, etc.
}
