# Case Bank of America

CaseBankOfAmerica é uma aplicação web simples que exibe dados financeiros em formato de tabela. Os usuários podem pesquisar dados específicos inserindo um termo de pesquisa na caixa de busca.

Tecnologias usadas:
- React
- Material-UI V.5


Overview:

Esta é uma aplicação React que usa a biblioteca Material-UI para estilização. Ela importa vários componentes do Material-UI, incluindo Card, CardContent, Typography, Box e Container. Também importa vários componentes do React Router, incluindo Routes, Route e BrowserRouter.

O componente App configura uma conexão de socket com um servidor usando socket.io-client e escuta dois eventos: "client-connected" e "market-data". Quando o evento "client-connected" é recebido, as informações do cliente são definidas usando setClient. Quando o evento "market-data" é recebido, os dados do mercado são adicionados a uma matriz usando setMarketData.

O componente App também renderiza uma NavBar, que inclui links para a página inicial, uma página de informações pessoais (componente Card) e uma página de transações financeiras (componente Table). Os componentes Card e Table são renderizados usando os componentes Routes e Route do React Router.


Features:
- Tabela de transações financeiras: 

O componente Table exibe dados financeiros em um formato de tabela e permite que os usuários pesquisem por dados específicos por meio de uma caixa de pesquisa.

Este componente recebe uma prop data que é um array contendo os dados financeiros a serem exibidos. Ele utiliza o estado do React para controlar o valor de uma caixa de pesquisa, permitindo que o usuário filtre os dados conforme o termo pesquisado é inserido.

O componente exibe os dados em uma tabela usando a biblioteca Material-UI. Ele possui recursos de estilo responsivos e amigáveis ao usuário, como uma barra de pesquisa e uma tabela com cabeçalho fixo que permanece no topo da página enquanto o usuário rola para baixo.

- Card com informação pessoal:

O StyledCard é um componente React que exibe informações de um cliente em um cartão. Ele é construído com base no componente Card do Material-UI e contém informações sobre o ID do cliente, nome, trabalho e descrição do trabalho.
