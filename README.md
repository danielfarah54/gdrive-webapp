# Google Drive Project - Semana JS Expert 5.0

Projeto realizado na Semana Javascript Expert ([Erick Wendel](https://github.com/ErickWendel)), partindo do [template inicial](https://github.com/ErickWendel/semanajsexpert-gdrive-template/tree/89f528a09fef8bf71f9cded3041c2cbb3ebfc773).

## Preview

### Página principal

![Imagem final da página inicial do projeto](./demo.png)

## Checklist Features

- Web API

  - [x] Deve listar arquivos baixados
  - [] Deve receber stream de arquivos e salvar em disco
  - [] Deve notificar sobre progresso de armazenamento de arquivos em disco
  - [] Deve permitir upload de arquivos em formato imagem, vídeo ou áudio
  - [] Deve atingir 100% de cobertura de código em testes

- Web App
  - [] Deve listar arquivos baixados
  - [] Deve permitir fazer upload de arquivos de qualquer tamanho
  - [] Deve ter função de upload via botão
  - [] Deve exibir progresso de upload
  - [] Deve ter função de upload via drag and drop

## Desafios pós projeto

1. _Backend_: Salvar o arquivo na AWS ou qualquer serviço de storage
   - O projeto hoje armazena arquivos em disco. O desafio é fazer upload para algum serviço na núvem
   - Manter 100% de code coverage, ou seja, criar testes para a nova feature
2. _Frontend_: Adicionar testes no frontend e alcançar 100% de code coverage
   - Usar o mesmo processo feito no backend para criar testes unitários no frontend com Jest ([exemplo](https://github.com/ErickWendel/tdd-frontend-example))
3. _Infraestrutura_: Publicar aplicação com SSL customizado em máquina virtual
   - No projeto, foi gerado SSL local, o desafio é criar um certificado (pode ser com o _Let's Encrypt_) e adicionar na aplicação
