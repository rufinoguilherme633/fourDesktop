"use strict";

document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("saveButtonnews");

  saveButton.addEventListener("click", function() {
    // Coloque aqui o código que deseja executar quando o botão for clicado
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var autor = document.getElementById("autor").value;
    var data = document.getElementById("data").value;
    var tema = document.getElementById("tema").value;

    var inputImagem = document.getElementById("imagem");
    var nomeArquivo = inputImagem.value;
    var corpo_noticia = document.getElementById("corpo_noticia").value;
// var arquivo = inputImagem.files[0];

// if (arquivo) {
//   // O usuário selecionou um arquivo
//   console.log("Nome do arquivo:", arquivo.name);
//   console.log("Tipo do arquivo:", arquivo.type);
//   console.log("Tamanho do arquivo:", arquivo.size, "bytes");
// } else {
//   // O usuário não selecionou um arquivo
//   console.log("Nenhum arquivo selecionado");
// }



    console.log(titulo)
    
    console.log(descricao)
    
    console.log(autor)
    
    console.log(data)

    console.log( nomeArquivo)

    console.log( tema)
    console.log(corpo_noticia)
    
    
    
    function createNews(news) {
        const url = 'http://localhost:8080/v1/educ_four/news/post';
        const options = {
          method: 'POST',
          body: JSON.stringify(news),
          headers:{
            "Content-Type": "application/json"
          }
         
          
        };
        fetch(url, options )
        // console.log(options)
      }


      const news = {
        "titulo": titulo,
        "descricao": descricao,
        "autor": autor,
        "data":data,
        "nomeArquivo":nomeArquivo,
        "tema":tema,
        "corpo_noticia":corpo_noticia
      };

      createNews(news)


  });
});