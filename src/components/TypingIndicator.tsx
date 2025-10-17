export const TypingIndicator = () => {
  return (
    <div className="py-6 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
            O
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Digitando</span>
            <div className="flex gap-1">
              <span className="animate-typing-dots" style={{ animationDelay: '0s' }}>•</span>
              <span className="animate-typing-dots" style={{ animationDelay: '0.2s' }}>•</span>
              <span className="animate-typing-dots" style={{ animationDelay: '0.4s' }}>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
