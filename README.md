
# Chatbot BW Oracle

Este projeto implementa uma interface de chatbot moderna e funcional desenvolvida para oferecer uma experiência de conversação limpa, responsiva e integrada ao backend do BW Oracle.  
A aplicação foi projetada com foco em simplicidade visual, usabilidade e princípios sólidos de design de interface (UI/UX).

---

## Visão Geral

O **Chatbot BW Oracle** é uma interface web que se conecta a um backend via **webhook** para processar perguntas e respostas em tempo real.  
Quando o servidor não está acessível, o sistema retorna uma mensagem de erro simples e direta, mantendo a consistência visual da interface.

---

## Principais Funcionalidades

- **Interface Limpa e Moderna**  

- **Organização Visual**  

- **Botão de Ajuda (Topo Direito)**  
  - Redireciona o usuário para a **documentação oficial**:  
    [Documentação BW Oracle](https://docs.google.com/document/d/1-oADp8KV-uubUdUZA4IHD-rMsxEkwPks/edit?usp=drive_link&ouid=115649894980612759848&rtpof=true&sd=true)

- **Suporte a Tema Claro/Escuro**  
  - Botão para alternar entre **modo claro e escuro**, mantendo contraste e legibilidade.  

- **Tratamento de Erros**  
  - Caso o chatbot não consiga se conectar ao webhook, exibe uma mensagem simples:  
    `Erro: não foi possível conectar ao servidor.`  

---

## Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/seu-repositorio/chatbot-bw-oracle.git
cd chatbot-bw-oracle
npm install
```

### Executar o projeto

```bash
npm run dev
```

O servidor local será iniciado (geralmente em `http://localhost:5173`).

---

## Padrões de Design

- **Fonte:** Inter Family  
- **Cores:** preto, branco e tons neutros de cinza  
- **Espaçamento:** consistente (mínimo de 8px entre elementos)  
- **Bordas e sombras suaves** para melhor legibilidade  
- **Feedback visual claro** em botões e transições de tema  

---

## Tecnologias Utilizadas

- **React + TypeScript**
- **TailwindCSS**
- **Vite**
- **Lucide React** (ícones)
- **Shadcn/UI** (componentes de interface)
- **Framer Motion** (animações leves)

---
