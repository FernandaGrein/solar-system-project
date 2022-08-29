O projeto solar-system foi o primeiro projeto da trybe que realizamos utilizando o React
Este projeto foi feito com a utilização do JSX no React, o método render, o import, foram
criados componentes de classe, e utilizado props e as validações com PropTypes.

para acessar o projeto, clone o repositório, entre na página, instale as dependências e rode a aplicação com o comando start
- git clone git@github.com:FernandaGrein/solar-system-project.git
- cd solar-system-project
- npm install 
- npm start

Foram cumpridos os seguintes requisitos:
 - criado um componente Header, que possui um título e é renderizado dentro do componente principal App
 - Foi criado um componente Solar-System que é renderizado abaixo do header, dentro deste há um
 componente Título que renderiza o texto recebido por meio de props
 - Depois, foi criado um novo componente chamado de Planet-Card, este recebe as informações por props e deve renderizar o nome e a imagem de um planeta, cada card recebe um planeta e todos eles são renderizados na tela dentro do componente Solar-system
 - Na sequencia, foi criado um componente missions, este é renderizado abaixo do componente Solar-System e possui um título e missions-cards, que recebem as informações por props e renderizam os dados de cada missao espacial por card. 
