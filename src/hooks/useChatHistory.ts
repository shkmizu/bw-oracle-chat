import { useState, useEffect } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

const STORAGE_KEY = 'chatbw-history';

export const useChatHistory = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, message]);
    return message.id;
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { messages, addMessage, clearHistory };
};
