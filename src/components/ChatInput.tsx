import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  isHomeScreen?: boolean;
}

export const ChatInput = ({ onSend, disabled, isHomeScreen }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (isHomeScreen) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 pb-8">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pergunte qualquer coisa..."
              disabled={disabled}
              className="flex-1 min-h-[60px] px-6 py-4 bg-transparent border-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
              rows={1}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || disabled}
              className="m-2 h-10 w-10 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="border-t border-border bg-background">
      <div className="px-4 py-4">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            disabled={disabled}
            className="min-h-[60px] pr-12 resize-none rounded-xl bg-card text-foreground"
            rows={2}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || disabled}
            className="absolute right-2 bottom-2 h-8 w-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
