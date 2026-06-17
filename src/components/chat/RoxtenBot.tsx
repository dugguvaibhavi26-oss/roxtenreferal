import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

type RoxtenBotProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RoxtenBot({ isOpen, onClose }: RoxtenBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hello! I am the Roxten Studios Partner Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('commission') || input.includes('percentage') || input.includes('how much')) {
      return "You earn a massive 15% recurring commission on the lifetime value of every client you refer to us.";
    }
    if (input.includes('payout') || input.includes('paid') || input.includes('when')) {
      return "Referral amounts are paid out after the client successfully completes their payment to Roxten Studios. Make sure your Bank Account or UPI ID is saved in the Payouts section.";
    }
    if (input.includes('cancel') || input.includes('lost') || input.includes('deal')) {
      return "If a deal is canceled or lost before signing, it will show as 'deal canceled' and no commission is generated.";
    }
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('human')) {
      return "You can reach our team at support@roxtenstudios.in or call us at +91 98765 43210 during business hours (Mon-Fri, 9am to 6pm IST).";
    }
    if (input.includes('bank') || input.includes('upi') || input.includes('account')) {
      return "You can add or manage your bank accounts and UPI IDs directly in the Payouts section of your dashboard.";
    }
    if (input.includes('hello') || input.includes('hi')) {
      return "Hi there! How can I assist you with your Roxten Studios partnership today?";
    }
    if (input.includes('services') || input.includes('what do you do')) {
      return "Roxten Studios is an elite venture builder. We specialize in web apps, mobile apps, SaaS, and full-scale digital transformations.";
    }
    
    return "I'm a simulated assistant, so my knowledge is limited right now. If you need help with something specific, please raise a support ticket or email us at support@roxtenstudios.in!";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network delay
    setTimeout(() => {
      const responseText = getBotResponse(newUserMsg.text);
      const newBotMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: responseText };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] max-h-[80vh] flex flex-col glass-card border-white/20 shadow-2xl z-50 overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
            <Bot size={18} />
          </div>
          <div>
            <div className="font-heading font-bold text-sm">Partner Assistant</div>
            <div className="text-[10px] text-green-400 font-mono tracking-widest uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={18} className="text-white/60" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'bot' ? 'bg-white/10 text-white' : 'bg-white text-black'}`}>
              {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-white text-black rounded-tr-sm' : 'bg-white/10 text-white/90 rounded-tl-sm border border-white/5'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center shrink-0">
              <Bot size={14} />
            </div>
            <div className="p-4 rounded-2xl bg-white/10 rounded-tl-sm border border-white/5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-white/[0.02] flex gap-2">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
        />
        <button 
          type="submit" 
          disabled={!inputValue.trim() || isTyping}
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
        >
          <Send size={16} className="ml-1" />
        </button>
      </form>
    </div>
  );
}
