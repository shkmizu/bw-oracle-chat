export type CommandHandler = () => void;

export const isSlashCommand = (message: string): boolean => {
  return message.startsWith('/');
};

export const parseCommand = (message: string): string | null => {
  const match = message.match(/^\/(\w+)/);
  return match ? match[1].toLowerCase() : null;
};

export const getCommandHelp = (): string => {
  return `**Comandos Disponíveis:**

- **/clear** - Limpar histórico do chat
- **/tema** - Alternar entre tema claro e escuro
- **/command** - Mostrar esta mensagem de ajuda
- **/sobre** - Informações sobre o BW Oráculo

Digite qualquer comando para executá-lo!`;
};

export const getAboutInfo = (): string => {
  return `**BW Oráculo: Assistente de Conhecimento Interno RAG**

**Versão:** 1.0 

**Sobre:** BW Oráculo é um assistente de conhecimento interno da BW Soluções, construído sobre a robusta arquitetura RAG (Retrieval-Augmented Generation). Ele conecta os usuários diretamente à base de dados documental (Google Drive), transformando o conteúdo em conhecimento pesquisável via processamento semântico. O sistema garante respostas contextuais e precisas através de uma interface de chat intuitiva e responsiva.

**Arquitetura e Recursos Chave:**

- **Motor RAG (Backend):** Orquestrado via n8n, o fluxo gerencia a ingestão de documentos (Google Drive), a indexação vetorial (Supabase) e a geração de texto contextual (Google Gemini), com memória de conversação via Postgres.

- **Integração Webhook em Tempo Real:** Comunicação ágil e direta entre o Frontend (hospedado no Netlify) e o Backend/n8n (exposto via ngrok).

- **Interface Otimizada:** Layout limpo e responsivo com alternância entre temas claro e escuro.

- **Interação e Qualidade:** Suporte a comandos rápidos, histórico de conversas e ferramentas de Feedback e Regeneração de Respostas para aprimoramento contínuo da IA.

Desenvolvido com React, TypeScript e Tailwind CSS.`;
};
