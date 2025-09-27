


import React, { useState, useRef, useEffect } from 'react';
import NextArrow from '../svg/Next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

// Site data (can be imported from external file later)
const siteData = {
  companyName: "Esty",
  services: [
    "Selling properties",
    "Buying properties",
    "Renting properties",
    "Real estate consultations"
  ],
  featuredProperties: [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      price: "2,500,000 $",
      location: "USA"
    },
    {
      id: 2,
      title: "Rustic Retreat Cottage",
      price: "850,000 $",
      location: "USA"
    }
  ],
  contact: {
    phone: "+966112345678",
    email: "info@esty.com",
  }
};

// Suggested questions
const suggestedQuestions = [
  "What services do you offer?",
  "I want to buy a property",
  "How can I sell my property?",
  "What are your featured properties?",
  "How can I contact you?",
  "How can I search for a property?",
  "How can I contact you?"
];

// Keyword system with predefined responses
const keywordResponses: { keywords: string[], response: string }[] = [
  {
    keywords: ["services", "what you offer", "offerings", "what do you do"],
    response: `At ${siteData.companyName}, we offer a comprehensive range of real estate services including:\n- ${siteData.services.join("\n- ")}\n\nHow can I assist you more specifically?`
  },
  {
    keywords: ["buy", "want to buy", "property for sale", "buy property", "purchase"],
    response: `We have a variety of properties available for sale. You can:\n1. Browse the Properties section on our website\n2. Use filters to search by location and price\n3. Contact one of our consultants at ${siteData.contact.phone}\n\nIs there a specific type of property you're looking for?`
  },
  {
    keywords: ["sell", "want to sell", "sell my property", "how to sell"],
    response: `We help you sell your property at the best price with minimal effort. We offer:\n- Free property valuation\n- Customized marketing campaigns\n- Follow-up with potential clients\n- Complete sales process management\n\nTo start the selling process, please contact us at ${siteData.contact.phone}`
  },
  {
    keywords: ["properties", "featured", "property", "real estate", "listings"],
    response: `Some of our featured properties include:\n\n1. ${siteData.featuredProperties[0].title} - ${siteData.featuredProperties[0].price} - ${siteData.featuredProperties[0].location}\n2. ${siteData.featuredProperties[1].title} - ${siteData.featuredProperties[1].price} - ${siteData.featuredProperties[1].location}\n\nYou can browse more properties on our website. Would you like information about a specific property?`
  },
  {
    keywords: ["contact", "get in touch", "phone", "number", "email", "address", "how to contact"],
    response: `You can contact us through:\n📞 Phone: ${siteData.contact.phone}\n✉️ Email: ${siteData.contact.email}\n🏢 `
  },
  {
    keywords: ["search", "find property", "look for", "browse", "how to search"],
    response: `To search for a property:\n\n1. Go to the Properties page\n2. You'll find a search field where you can search for properties that suit you by location, cost, area, etc.\n3. You can also browse our property gallery to find what you're looking for\n4. Each property has detailed information you can review\n\nWould you like help with a specific search?`
  },
  {
    keywords: ["thank", "thanks", "appreciate", "thank you"],
    response: "You're welcome! We're always happy to help. Is there anything else you need?"
  }
];

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_KEY = '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';
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Find predefined response based on keywords
  const findKeywordResponse = (userInput: string): string | null => {
    const inputLower = userInput.toLowerCase();
    for (const item of keywordResponses) {
      for (const keyword of item.keywords) {
        if (inputLower.includes(keyword.toLowerCase())) {
          return item.response;
        }
      }
    }
    return null;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check first for predefined keyword responses
    const keywordResponse = findKeywordResponse(input);
    
    if (keywordResponse) {
      // Use predefined response if found
      setTimeout(() => {
        const assistantMessage: Message = {
          role: 'assistant',
          content: keywordResponse,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } else {
      // If no predefined response, use API
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat",
            messages: [
              {
                role: 'system',
                content: `You are an assistant for the real estate company "${siteData.companyName}". 
                Company services: ${siteData.services.join(', ')}.
                Featured properties: ${siteData.featuredProperties.map(p => p.title).join(', ')}.
                Contact information: phone ${siteData.contact.phone}, email ${siteData.contact.email}.
                Respond in a helpful and friendly manner.`
              },
              ...messages.map(msg => ({ role: msg.role, content: msg.content })),
              { role: 'user', content: input }
            ],
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
          role: 'assistant',
          content: 'Sorry, there was a connection error. Please try again.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
    // Auto-send if it's a suggested question
    setTimeout(() => sendMessage(), 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-[#fcfcfd] rounded-2xl shadow-2xl border border-[#ede7fe] flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="bg-[#703bf7] text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <h3 className="font-semibold text-lg">Ask Esty</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-[#dbcefd] transition-colors p-1 rounded-full hover:bg-[#8254f8]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f4f0fe]">
        {messages.length === 0 ? (
          <div className="text-center text-[#4d4d4d] mt-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#ede7fe] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#703bf7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="font-medium">Hello! How can I help you?</p>
            <p className="text-sm mt-1 text-[#666666] mb-4">Ask me about our services or properties</p>
            
            {/* Suggested questions */}
            <div className="w-full space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(question)}
                  className="w-full text-sm bg-white text-[#703bf7] border border-[#dbcefd] rounded-xl p-2 hover:bg-[#ede7fe] transition-colors"
                > 
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs rounded-2xl p-3 ${message.role === 'user'
                  ? 'bg-[#703bf7] text-white rounded-br-md'
                  : 'bg-white text-[#1a1a1a] rounded-bl-md border border-[#dbcefd] shadow-sm'
                  }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-[#dbcefd]' : 'text-[#666666]'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-[#1a1a1a] rounded-2xl rounded-bl-md p-3 border border-[#dbcefd] shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#703bf7] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#8254f8] rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-[#946cf9] rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[#dbcefd] p-3 bg-white">
        <div className="flex items-center">
          <input
            className="flex-1 border text-[#1a1a1a] border-[#dbcefd] rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#703bf7] text-sm bg-[#fcfcfd]"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            className="ml-2 bg-[#703bf7] text-white rounded-xl p-2 hover:bg-[#8254f8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#946cf9] disabled:opacity-50"
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
          >
            <NextArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;