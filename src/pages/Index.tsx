import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HomeScreen } from "@/components/HomeScreen";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { ErrorMessage } from "@/components/ErrorMessage";
import { useTheme } from "@/hooks/useTheme";
import { useChatHistory } from "@/hooks/useChatHistory";
import { sendToWebhook } from "@/lib/webhook";
import { isSlashCommand, parseCommand, getCommandHelp, getAboutInfo } from "@/lib/commands";
import { toast } from "sonner";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const { messages, addMessage, clearHistory } = useChatHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [lastUserMessage, setLastUserMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const scrollToBottom = () => {
    if (shouldAutoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, showError]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
    setShouldAutoScroll(isAtBottom);
  };

  const handleCommand = (command: string): boolean => {
    switch (command) {
      case 'limpar':
      case 'clear':
        clearHistory();
        toast.success("Histórico limpo com sucesso");
        return true;
      case 'tema':
        toggleTheme();
        toast.success(`Tema alterado para ${theme === 'light' ? 'escuro' : 'claro'}`);
        return true;
      case 'ajuda':
      case 'command':
        addMessage('user', `/${command}`);
        addMessage('assistant', getCommandHelp());
        return true;
      case 'sobre':
        addMessage('user', `/${command}`);
        addMessage('assistant', getAboutInfo());
        return true;
      case 'dani':
        document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 15s ease infinite';
        const style = document.createElement('style');
        style.textContent = '@keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }';
        document.head.appendChild(style);
        toast.success("Modo Dani ativado! 🌈");
        return true;
      default:
        toast.error(`Comando desconhecido: /${command}. Digite /command para ver comandos disponíveis.`);
        return false;
    }
  };

  const sendMessage = async (message: string) => {
    if (isSlashCommand(message)) {
      const command = parseCommand(message);
      if (command) {
        handleCommand(command);
      }
      return;
    }

    addMessage('user', message);
    setLastUserMessage(message);
    setIsLoading(true);
    setShowError(false);

    try {
      const response = await sendToWebhook(message);
      addMessage('assistant', response);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (lastUserMessage) {
      setIsLoading(true);
      setShowError(false);
      
      try {
        const response = await sendToWebhook(lastUserMessage);
        addMessage('assistant', response);
      } catch (error) {
        setShowError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const showHome = messages.length === 0 && !isLoading && !showError;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      
      {showHome ? (
        <HomeScreen onCardClick={sendMessage} />
      ) : (
        <div className="flex-1 overflow-y-auto" onScroll={handleScroll}>
          <div className="pb-32">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                onRegenerate={message.role === 'assistant' ? handleRegenerate : undefined}
              />
            ))}
            {isLoading && <TypingIndicator />}
            {showError && <ErrorMessage onRetry={() => {}} />}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
      
      <div className="fixed bottom-0 left-0 right-0">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;
