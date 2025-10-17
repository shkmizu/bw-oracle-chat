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
    <div className={`py-6 px-4 ${role === 'assistant' ? 'bg-muted/30' : ''}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
            {role === 'user' ? 'U' : 'O'}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className={`prose prose-sm max-w-none dark:prose-invert ${shouldTruncate ? 'line-clamp-6' : ''}`}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            
            {isLongMessage && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 text-primary hover:text-primary"
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
              <div className="flex gap-2 mt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-muted-foreground hover:text-foreground"
                  onClick={handleCopy}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                {onRegenerate && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-muted-foreground hover:text-foreground"
                    onClick={onRegenerate}
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-2 ${feedback === 'up' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => handleFeedback('up')}
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 px-2 ${feedback === 'down' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => handleFeedback('down')}
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
