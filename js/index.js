// crtl + d para mudar  todas variaveis ao mesmo tempo

// Selecionar todos os elementos com a classe .title_about_us
var elements = document.querySelectorAll('.title_about_us');

// Iterar sobre os elementos
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  // Obter o texto do elemento
  var text = element.textContent;

  // Dividir o texto em palavras
  var words = text.split(' ');

  // Obter a última palavra
  var lastWord = words[words.length - 1];

  // Criar um novo elemento <span> para envolver a última palavra com a cor hexadecimal
  var span = document.createElement('span');
  span.style.color = '#D22020'; // Substitua '#FF0000' pelo seu código de cor hexadecimal

  // Definir o texto da última palavra dentro do novo elemento <span>
  span.textContent = lastWord;

  // Substituir a última palavra no texto original pelo novo elemento <span>
  words[words.length - 1] = span.outerHTML;

  // Atualizar o conteúdo do elemento com as palavras modificadas
  element.innerHTML = words.join(' ');
}


// ------------------------------------------------------------

function login() {
  var username = document.querySelector('.user input').value;
  var password = document.querySelector('.password input').value;

  // Verificar as credenciais de login
  if (username === 'admin' && password === 'senha') {
      // Credenciais corretas, redirecionar para a página de sucesso
      window.location.href = 'pagina_sucesso.html';
  } else {
      // Credenciais incorretas, exibir mensagem de erro
      var errorMessage = document.getElementById('error_message');
      
      errorMessage.textContent = 'Usuário ou senha incorretos.';
  }
}



//-----------


