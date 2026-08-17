import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutor-dialog-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Slide-over Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative z-10 w-full max-w-2xl bg-[#0a0f1e] border-l border-white/[0.12] h-full shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 md:p-6 border-b border-white/[0.08] bg-slate-900/80 backdrop-blur-xl flex items-start justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {subject?.code} • Unit {unitNumber}
                </span>
                <span className="badge-success text-[10px] py-0 px-2 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI Topic Tutor
                </span>
              </div>
              <h3 id="tutor-dialog-title" className="text-lg md:text-xl font-bold text-white truncate font-heading">
                {topic}
              </h3>
              <p className="text-xs text-slate-400 truncate">{subject?.name}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors flex items-center justify-center flex-shrink-0 focus-ring"
              title="Close Drawer (Esc)"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/[0.06] bg-slate-950/60 px-6 pt-2" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'guide'}
              onClick={() => setActiveTab('guide')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-2 focus-ring ${
                activeTab === 'guide'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>RTU Exam Blueprint Guide</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'chat'}
              onClick={() => setActiveTab('chat')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-2 focus-ring ${
                activeTab === 'chat'
                  ? 'border-violet-500 text-violet-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Interactive AI Chat {chatMessages.length > 0 && `(${chatMessages.length})`}</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
            {loadingLesson ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-3">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                <p className="text-xs text-slate-400 font-medium">Synthesizing RTU Kota lesson blueprint with Gemini...</p>
              </div>
            ) : activeTab === 'guide' && lesson ? (
              /* RTU Study Guide View */
              <div className="space-y-5">
                {/* Part A: 2-Mark Definition */}
                <div className="glass-card p-4 space-y-2 border-blue-500/30 bg-blue-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Part A Target (Compulsory 2 Marks)
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">≤ 25 Words Limit</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-100 font-medium leading-relaxed">
                    {lesson.part_a_definition}
                  </p>
                </div>

                {/* Part B: 5-Mark Analytical & Formulas */}
                <div className="glass-card p-4 space-y-2 border-violet-500/30 bg-violet-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                      Part B Target (Analytical 5 Marks)
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Derivations & Traces</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-normal">
                    {lesson.part_b_analytical}
                  </div>
                </div>

                {/* Part C: 10-Mark Comprehensive Strategy */}
                <div className="glass-card p-4 space-y-2 border-cyan-500/30 bg-cyan-950/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Part C Target (Comprehensive 10 Marks)
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Full-Length Answer Blueprint</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                    {lesson.part_c_comprehensive}
                  </p>
                </div>

                {/* Common RTU Exam Traps */}
                {lesson.exam_traps && lesson.exam_traps.length > 0 && (
                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 space-y-2">
                    <h5 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-300 flex-shrink-0" />
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
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      Typical RTU Exam Question
                    </span>
                    <p className="text-xs font-medium text-white italic">
                      "{lesson.sample_question}"
                    </p>
                  </div>
                )}

                {/* Quick Prompts to Launch Chat */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Ask Gemini Tutor Anything About This Topic
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className="px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 text-xs text-slate-200 hover:text-white transition-all text-left flex items-center gap-1.5 focus-ring"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
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
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Get instant explanations, formula derivations, code examples, or exam tips from your RTU Academic AI Professor.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 pt-3">
                      {quickPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          className="px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 text-xs text-slate-200 hover:text-white transition-all text-left flex items-center gap-1.5 focus-ring"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
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
                              : 'bg-slate-900 border border-white/[0.08] text-slate-200 whitespace-pre-line'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {sendingMessage && (
                      <div className="flex gap-3 items-center text-xs text-slate-400">
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
          <div className="p-4 border-t border-white/[0.08] bg-slate-950/90 backdrop-blur-xl">
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
                className="flex-1 bg-slate-900 border border-white/[0.1] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus-ring"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || sendingMessage}
                className={`btn-primary px-4 py-3 min-h-[44px] flex items-center justify-center gap-1.5 ${
                  !inputText.trim() || sendingMessage ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-semibold">Send</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
