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
- **/sobre** - Informações sobre o BW Oracle
- **/dani** - Ativar modo especial

Digite qualquer comando para executá-lo!`;
};

export const getAboutInfo = (): string => {
  return `**BW Oracle**

**Versão:** 1.0 (Out 20)

**Sobre:**
BW Oracle é um assistente de conhecimento que conecta você às informações da sua base de dados através de uma interface de chat intuitiva.

**Recursos:**
- Integração webhook em tempo real
- Suporte a comandos rápidos
- Temas claro e escuro
- Histórico de conversas
- Feedback e regeneração de respostas

Desenvolvido com React, TypeScript e Tailwind CSS.`;
};
