import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Mic, Volume2, VolumeX } from 'lucide-react';

// Character data with their specializations
const characters = [
  {
    id: 'salim',
    nameEn: 'Salim',
    nameAr: 'سالم',
    roleEn: 'Senior Advisor',
    roleAr: 'المستشار الأول',
    image: '/mascots/salim-final.png',
    specialties: ['weddings', 'government', 'banking', 'condolences'],
    greetingEn: "Ahlan wa sahlan! I'm Salim, your senior advisor. How can I help you plan your event today?",
    greetingAr: "أهلاً وسهلاً! أنا سالم، مستشارك الأول. كيف يمكنني مساعدتك في تخطيط فعاليتك اليوم؟",
    color: '#1B4332'
  },
  {
    id: 'noor',
    nameEn: 'Noor',
    nameAr: 'نور',
    roleEn: 'Creative Director',
    roleAr: 'المديرة الإبداعية',
    image: '/mascots/noor-final.png',
    specialties: ['corporate', 'ngo', 'education'],
    greetingEn: "Marhaba! I'm Noor, your creative director. Let me help you design an unforgettable event!",
    greetingAr: "مرحباً! أنا نور، مديرتك الإبداعية. دعني أساعدك في تصميم فعالية لا تُنسى!",
    color: '#7B2CBF'
  },
  {
    id: 'faris',
    nameEn: 'Faris',
    nameAr: 'فارس',
    roleEn: 'Operations Manager',
    roleAr: 'مدير العمليات',
    image: '/mascots/faris-final.png',
    specialties: ['healthcare', 'construction', 'energy', 'travel'],
    greetingEn: "Kayf halak! I'm Faris, your operations manager. Ready to make your event a success!",
    greetingAr: "كيف حالك! أنا فارس، مدير العمليات. جاهز لجعل فعاليتك ناجحة!",
    color: '#0077B6'
  },
  {
    id: 'yasmin',
    nameEn: 'Yasmin',
    nameAr: 'ياسمين',
    roleEn: 'Kids Events Specialist',
    roleAr: 'أخصائية فعاليات الأطفال',
    image: '/mascots/yasmin-final.png',
    specialties: ['kids', 'entertainment'],
    greetingEn: "Hello! I'm Yasmin, your kids events specialist. Let's create magical moments for the little ones!",
    greetingAr: "مرحباً! أنا ياسمين، أخصائية فعاليات الأطفال. لنصنع لحظات سحرية للصغار!",
    color: '#FF6B6B'
  },
  {
    id: 'little-aden',
    nameEn: 'Little Aden',
    nameAr: 'عدن الصغير',
    roleEn: 'Brand Ambassador',
    roleAr: 'سفير العلامة',
    image: '/mascots/little-aden-final.png',
    specialties: ['general'],
    greetingEn: "Hi there! I'm Little Aden, your friendly guide to Greenists Events!",
    greetingAr: "أهلاً! أنا عدن الصغير، دليلك الودود لفعاليات جرينستس!",
    color: '#2D7A4A'
  }
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AICharacterAssistant() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = isRTL ? selectedCharacter.greetingAr : selectedCharacter.greetingEn;
      setMessages([{
        id: '1',
        role: 'assistant',
        content: greeting,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, selectedCharacter, isRTL]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response (in production, this would call the backend AI)
    setTimeout(() => {
      const responses = isRTL ? [
        `شكراً لسؤالك! بصفتي ${selectedCharacter.nameAr}، يمكنني مساعدتك في تخطيط فعاليتك. هل تريد معرفة المزيد عن باقاتنا أو حساب التكلفة؟`,
        `أهلاً بك! نحن في جرينستس نقدم خدمات متميزة للفعاليات. دعني أساعدك في اختيار الباقة المناسبة.`,
        `ممتاز! يمكنني مساعدتك في ذلك. هل تفضل فعالية في قاعة فندق جولد موهر أو في مكان آخر في عدن؟`
      ] : [
        `Thank you for your question! As ${selectedCharacter.nameEn}, I can help you plan your event. Would you like to know more about our packages or calculate the cost?`,
        `Welcome! At Greenists, we offer premium event services. Let me help you choose the right package.`,
        `Excellent! I can help you with that. Would you prefer an event at Gold Mohur Hotel or another venue in Aden?`
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCharacterSelect = (character: typeof characters[0]) => {
    setSelectedCharacter(character);
    const greeting = isRTL ? character.greetingAr : character.greetingEn;
    setMessages([{
      id: Date.now().toString(),
      role: 'assistant',
      content: greeting,
      timestamp: new Date()
    }]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300 ${isOpen ? 'hidden' : ''}`}
      >
        <img 
          src={selectedCharacter.image} 
          alt={selectedCharacter.nameEn}
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50 w-96 h-[600px] bg-gray-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden`}>
          {/* Header */}
          <div 
            className="p-4 flex items-center gap-3 border-b border-white/10"
            style={{ background: `linear-gradient(135deg, ${selectedCharacter.color}, ${selectedCharacter.color}88)` }}
          >
            <img 
              src={selectedCharacter.image} 
              alt={selectedCharacter.nameEn}
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div className="flex-1">
              <h3 className="text-white font-bold">
                {isRTL ? selectedCharacter.nameAr : selectedCharacter.nameEn}
              </h3>
              <p className="text-white/70 text-sm">
                {isRTL ? selectedCharacter.roleAr : selectedCharacter.roleEn}
              </p>
            </div>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Character Selector */}
          <div className="p-2 flex gap-2 overflow-x-auto border-b border-white/10 bg-gray-800/50">
            {characters.map(char => (
              <button
                key={char.id}
                onClick={() => handleCharacterSelect(char)}
                className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                  selectedCharacter.id === char.id 
                    ? 'border-amber-400 scale-110' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={char.image} 
                  alt={char.nameEn}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-gray-800/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isRTL ? 'اكتب رسالتك...' : 'Type your message...'}
                className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AICharacterAssistant;
