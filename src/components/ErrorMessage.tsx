interface ErrorMessageProps {
  onRetry: () => void;
}

export const ErrorMessage = ({ onRetry }: ErrorMessageProps) => {
  return (
    <div className="py-4 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-start">
          <div className="bg-muted rounded-2xl px-4 py-3 max-w-[80%]">
            <p className="text-[15px] text-foreground">
              Não foi possível conectar ao servidor. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
