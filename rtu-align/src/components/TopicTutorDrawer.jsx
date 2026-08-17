import { useState, useEffect, useRef } from 'react';

import { Sparkles, X, Send, BookOpen, MessageSquare, AlertTriangle, Loader2, HelpCircle } from 'lucide-react';
import { fetchTopicLesson, sendTutorChatMessage } from '../services/geminiChatService';

export default function TopicTutorDrawer({ isOpen, onClose, topic, unitNumber, subject }) {
  const [activeTab, setActiveTab] = useState('guide'); // 'guide' | 'chat'
  const [lesson, setLesson] = useState(null);
  const [loadingLesson, setLoadingLesson] = useState(false);
  
  // Chat state
  const [chatMessages, setChatMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const messagesEndRef = useRef(null);

  // Load structured lesson on open or topic change
  useEffect(() => {
    if (isOpen && topic && subject) {
      setLoadingLesson(true);
      setLesson(null);
      setChatMessages([]);
      setActiveTab('guide');

      fetchTopicLesson(subject, unitNumber, topic)
        .then(data => {
          setLesson(data);
          setLoadingLesson(false);
        })
        .catch(err => {
          console.error(err);
          setLoadingLesson(false);
        });
    }
  }, [isOpen, topic, unitNumber, subject]);

  // Scroll chat to bottom
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, activeTab]);

  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || inputText;
    if (!textToSend || !textToSend.trim() || sendingMessage) return;

    const userMsg = { role: 'user', text: textToSend.trim() };
    const updatedHistory = [...chatMessages, userMsg];
    setChatMessages(updatedHistory);
    setInputText('');
    setSendingMessage(true);

    if (activeTab !== 'chat') {
      setActiveTab('chat');
    }

    try {
      const reply = await sendTutorChatMessage(subject, unitNumber, topic, updatedHistory, textToSend);
      setChatMessages([...updatedHistory, { role: 'model', text: reply }]);
    } catch (err) {
      console.error(err);
      setChatMessages([...updatedHistory, { role: 'model', text: 'Sorry, I ran into an issue answering. Please try again.' }]);
    } finally {
      setSendingMessage(false);
    }
  };

  const quickPrompts = [
    "Give a 10M sample question with answer outline",
    "Show step-by-step derivation & formulas",
    "Explain with a simple real-world analogy",
    "What are key Part A (2-Mark) keywords?"
  ];

  if (!isOpen) return null;

  return (
    
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <div className="slide-up fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* Slide-over Drawer Panel */}
        <div className="slide-up relative z-10 w-full sm:max-w-2xl bg-[#0a0f1e] border-l border-white/[0.12] h-full shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-slate-900/80 backdrop-blur-xl flex items-start justify-between gap-3">
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {subject?.code} • Unit {unitNumber}
                </span>
                <span className="badge-success text-[10px] py-0 px-2 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI Topic Tutor
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white leading-snug font-heading break-words">
                {topic}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400 truncate">{subject?.name}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors flex-shrink-0"
              title="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/[0.06] bg-slate-950/40 px-4 sm:px-6 pt-2 gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('guide')}
              className={`pb-2.5 px-3 sm:px-4 text-[11px] sm:text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>RTU Exam Blueprint Guide</span>
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`pb-2.5 px-3 sm:px-4 text-[11px] sm:text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'chat'
                  ? 'border-violet-500 text-violet-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Interactive AI Chat {chatMessages.length > 0 && `(${chatMessages.length})`}</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {loadingLesson ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-3">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                <p className="text-xs text-gray-400 font-medium">Synthesizing RTU Kota lesson blueprint with Gemini...</p>
              </div>
            ) : activeTab === 'guide' && lesson ? (
              /* RTU Study Guide View */
              <div className="space-y-5">
                {/* Part A: 2-Mark Definition */}
                <div className="glass-card p-4 space-y-2 border-blue-500/30 bg-blue-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Part A Target (Compulsory 2 Marks)
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">≤ 25 Words Limit</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-100 font-medium leading-relaxed">
                    {lesson.part_a_definition}
                  </p>
                </div>

                {/* Part B: 5-Mark Analytical & Formulas */}
                <div className="glass-card p-4 space-y-2 border-violet-500/30 bg-violet-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                      Part B Target (Analytical 5 Marks)
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Derivations & Traces</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                    {lesson.part_b_analytical}
                  </div>
                </div>

                {/* Part C: 10-Mark Comprehensive Strategy */}
                <div className="glass-card p-4 space-y-2 border-cyan-500/30 bg-cyan-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Part C Target (Comprehensive 10 Marks)
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Full-Length Answer Blueprint</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                    {lesson.part_c_comprehensive}
                  </p>
                </div>

                {/* Common RTU Exam Traps */}
                {lesson.exam_traps && lesson.exam_traps.length > 0 && (
                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 space-y-2">
                    <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      Critical RTU Exam Traps to Avoid
                    </h5>
                    <ul className="space-y-1.5">
                      {lesson.exam_traps.map((trap, idx) => (
                        <li key={idx} className="text-xs text-rose-200 flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{trap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sample Question */}
                {lesson.sample_question && (
                  <div className="bg-slate-900 border border-white/[0.08] rounded-2xl p-4 space-y-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                      Typical RTU Exam Question
                    </span>
                    <p className="text-xs font-medium text-white italic">
                      "{lesson.sample_question}"
                    </p>
                  </div>
                )}

                {/* Quick Prompts to Launch Chat */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                    Ask Gemini Tutor Anything About This Topic
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 text-xs text-gray-300 hover:text-white transition-all text-left flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        <span>{prompt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Chat View */
              <div className="space-y-4">
                {chatMessages.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      Ask Any Question on {topic}
                    </h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                      Get instant explanations, formula derivations, code examples, or exam tips from your RTU Academic AI Professor.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 pt-3">
                      {quickPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 text-xs text-gray-300 hover:text-white transition-all text-left flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3 h-3 text-violet-400 flex-shrink-0" />
                          <span>{prompt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.role !== 'user' && (
                          <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                        )}

                        <div
                          className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed max-w-[85%] ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                              : 'bg-slate-900 border border-white/[0.08] text-gray-200 whitespace-pre-line'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {sendingMessage && (
                      <div className="flex gap-3 items-center text-xs text-gray-400">
                        <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0">
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </div>
                        <span>Professor is typing response...</span>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Input Bar */}
          <div className="p-4 border-t border-white/[0.08] bg-slate-950/80 backdrop-blur-xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Ask about ${topic || 'this topic'}...`}
                className="flex-1 bg-slate-900 border border-white/[0.1] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || sendingMessage}
                className={`btn-primary px-4 py-3 flex items-center justify-center gap-1.5 ${
                  !inputText.trim() || sendingMessage ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-semibold">Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
}
