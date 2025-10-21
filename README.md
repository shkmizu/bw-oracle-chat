# Chatbot BW Oracle

Este projeto implementa uma interface de chatbot moderna e funcional
desenvolvida para oferecer uma experiência de conversação limpa,
responsiva e integrada ao backend do **BW Oracle**.\
A aplicação foi projetada com foco em **simplicidade visual**,
**usabilidade** e **princípios sólidos de design de interface (UI/UX)**.

------------------------------------------------------------------------

## 1. Visão Geral

O **Chatbot BW Oracle** é uma aplicação web que permite comunicação
direta com o backend via **webhook**, processando perguntas e respostas
em tempo real.\
O sistema foi desenvolvido para auxiliar usuários internos a obter
instruções, documentações e procedimentos técnicos de forma automatizada
e contextualizada.

Quando o servidor não está acessível, o chatbot exibe uma **mensagem de
erro simples e direta**, mantendo a coerência visual da interface.

A interface segue uma estrutura organizada e modular, garantindo
manutenção fácil, alta reutilização de componentes e possibilidade de
expansão futura.

------------------------------------------------------------------------

## 2. Estrutura e Arquitetura

A arquitetura do projeto é baseada em **três camadas principais**:

-   **Front-end:** responsável pela interface visual e interação com o
    usuário.\
-   **Back-end:** recebe as requisições via webhook e retorna respostas
    no formato JSON.\
-   **Serviços externos:** incluem integrações com documentação e fluxos
    automatizados orquestrados no servidor.

A comunicação ocorre através de um **webhook configurado**, que recebe o
input do usuário no formato JSON e retorna um array com o campo
`"output"`, exibido diretamente no chat.

------------------------------------------------------------------------

## 3. Interface Principal

A interface é composta por três áreas fundamentais:

-   **Cabeçalho:** exibe o título **BW Oracle**, o botão de **ajuda**
    que direciona à documentação oficial, e o botão para **alternância
    de tema (claro/escuro)**.\
-   **Área de Conversa:** zona central onde ocorre o diálogo entre o
    usuário e o chatbot.
    -   Mensagens do **usuário** aparecem à direita.\
    -   Respostas do **chatbot** aparecem à esquerda.\
-   **Rodapé:** contém o campo de entrada de texto e os **botões de
    ação** abaixo das respostas, que compartilham o mesmo estilo visual
    dos botões do topo.

Todos os elementos seguem uma **estrutura coerente e reutilizável**,
limitando a largura total da aplicação a **1000px** para manter a
legibilidade e foco.

------------------------------------------------------------------------

## 4. Funcionalidades Principais

-   **Interface Limpa e Moderna**\
    Layout simples, intuitivo e otimizado para leitura fluida.

-   **Botão de Ajuda (Topo Direito)**\
    Redireciona o usuário à **documentação oficial**:\
    [Documentação BW
    Oracle](https://drive.google.com/file/d/12JeBfMDv89EowxaS83qCubpBbpDSCAD2/view?usp=drive_link)

-   **Suporte a Tema Claro/Escuro**\
    Alternância de tema sem recarregar a página, mantendo contraste e
    legibilidade.

-   **Tratamento de Erros**\
    Caso o chatbot não consiga se conectar ao webhook, é exibida a
    mensagem simples:\
    `Erro: não foi possível conectar ao servidor.`

-   **Componentização Reutilizável**\
    Cada parte da interface (botões, cards, chat, cabeçalho) é
    implementada como um componente independente e reutilizável.

-   **Animações Leves**\
    Utiliza transições sutis para exibir novas mensagens e alternar
    entre temas.

------------------------------------------------------------------------

## 5. Tecnologias Utilizadas

-   **React + TypeScript** -- estrutura base da aplicação\
-   **Vite** -- ferramenta de build e desenvolvimento rápido\
-   **TailwindCSS** -- estilização e responsividade\
-   **Shadcn/UI** -- biblioteca de componentes visuais\
-   **Lucide React** -- ícones vetoriais otimizados\
-   **Framer Motion** -- animações leves e controladas\
-   **Axios** -- comunicação HTTP com o webhook

------------------------------------------------------------------------

## 6. Como Executar

### Pré-requisitos

-   Node.js 18+
-   npm ou yarn

### Instalação

``` bash
git clone https://github.com/shkmizu/bw-oracle-chat.git
cd chatbot-bw-oracle
npm install
```

### Execução

``` bash
npm run dev
```

O servidor local será iniciado e a aplicação poderá ser acessada via
navegador.

------------------------------------------------------------------------

## 7. Objetivo do Projeto

O **Chatbot BW Oracle** busca fornecer uma experiência de suporte
automatizada, clara e eficiente, centralizando a interação entre
usuários e fluxos internos.\
Com sua arquitetura modular, o sistema pode ser facilmente ampliado para
novos contextos e integrações futuras.
