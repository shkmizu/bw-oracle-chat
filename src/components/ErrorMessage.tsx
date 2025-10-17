import { AlertCircle, RotateCw, ExternalLink, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ErrorMessageProps {
  onRetry: () => void;
}

export const ErrorMessage = ({ onRetry }: ErrorMessageProps) => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Não consegui acessar a base de dados agora. Tente novamente em alguns segundos.
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-wrap gap-2">
          <Button onClick={onRetry} variant="outline" size="sm">
            <RotateCw className="h-4 w-4 mr-2" />
            Tentar novamente
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver status do sistema
          </Button>
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-2" />
            Ajuda sobre indisponibilidade
          </Button>
        </div>
      </div>
    </div>
  );
};
