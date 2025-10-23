import { useState } from "react";
import { Copy, RotateCw, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  onRegenerate?: () => void;
}

export const ChatMessage = ({ role, content, onRegenerate }: ChatMessageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  
  const isLongMessage = content.length > 500;
  const shouldTruncate = isLongMessage && !isExpanded;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast.success("Copiado para a área de transferência");
  };

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    toast.success(type === 'up' ? "Obrigado pelo feedback positivo!" : "Obrigado pelo feedback!");
  };

  return (
    <div className="py-6 px-4 animate-fade-in">
      <div className={`flex gap-4 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[85%] ${role === 'user' ? 'order-2' : 'order-1'}`}>
            <div className={`rounded-2xl px-5 py-4 ${
              role === 'user' 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-card border border-border'
            }`}>
              <div className={`prose prose-sm max-w-none ${
                role === 'user' ? 'prose-invert' : 'dark:prose-invert'
              } ${shouldTruncate ? 'line-clamp-6' : ''}`}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            
            {isLongMessage && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-1" />
                    Ver menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-1" />
                    Ver detalhes
                  </>
                )}
              </Button>
            )}
            
            {role === 'assistant' && (
              <div className="flex gap-1 mt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                  onClick={handleCopy}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                {onRegenerate && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-lg"
                    onClick={onRegenerate}
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-2 transition-colors rounded-lg ${feedback === 'up' ? 'text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                  onClick={() => handleFeedback('up')}
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-2 transition-colors rounded-lg ${feedback === 'down' ? 'text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                  onClick={() => handleFeedback('down')}
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};
