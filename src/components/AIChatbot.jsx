import { useState, useRef, useEffect } from 'react'
import {
  Send,
  X,
  RefreshCw,
  MessageSquare,
  FileText,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { sendChatMessage } from '../services/aiService'
import { siteConfig } from '../data/site'
import logo from '../assets/logo.jpeg'

const INITIAL_MESSAGES = [
  {
    role: 'model',
    content: `👋 **Welcome! I'm Prof. Mohd. Sharim's AI Career & Admission Assistant.**

How can I help you today?
• 🎓 **College & Course Mapping** (JEECUP, CUET, NEET, B.Pharm, D.Pharm)
• 💼 **Placement Packages & ATS CV Optimization**
• 🧪 **Pharma QA/QC Industrial Skill Certification**
• 💰 **Transparent Fee Structure & Packages**

You can type, speak using the **Mic 🎤**, or switch to the **Fast Flow Form** tab to submit your details directly!`,
  },
]

const QUICK_PROMPTS = [
  '🎓 Admission Guidance & Cutoffs',
  '💰 Package Fees & Pricing',
  '💼 CV Review & Placement Process',
  '🧪 Pharma QA/QC Training Details',
  '📞 How to reach Prof. Sharim?',
]

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('chat') // 'chat' | 'flow'
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // Voice States
  const [isListening, setIsListening] = useState(false)
  const [speakingIndex, setSpeakingIndex] = useState(null)
  const recognitionRef = useRef(null)

  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading, activeTab])

  // Stop speech when closing or changing tabs
  useEffect(() => {
    if (!isOpen || activeTab !== 'chat') {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setSpeakingIndex(null)
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop()
        setIsListening(false)
      }
    }
  }, [isOpen, activeTab, isListening])

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || input.trim()
    if (!text || loading) return

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }

    const newMessages = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const responseText = await sendChatMessage(newMessages)
      setMessages([...newMessages, { role: 'model', content: responseText }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages([
        ...newMessages,
        {
          role: 'model',
          content:
            'I encountered a minor issue processing your request. Please try again or feel free to call Prof. Sharim directly at **+91 82183 22073**.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleResetChat = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
    setSpeakingIndex(null)
    setMessages(INITIAL_MESSAGES)
  }

  // Voice Input (Speech Recognition)
  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.')
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    try {
      const recognition = new SpeechRecognition()
      recognition.lang = 'en-IN'
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInput((prev) => (prev ? `${prev} ${transcript}` : transcript))
        setIsListening(false)
      }

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognitionRef.current = recognition
      recognition.start()
    } catch (err) {
      console.error('Failed to start speech recognition:', err)
      setIsListening(false)
    }
  }

  // Voice Output (Speech Synthesis / Read Aloud)
  const handleSpeak = (text, index) => {
    if (!window.speechSynthesis) {
      alert('Speech synthesis is not supported on your browser.')
      return
    }

    if (speakingIndex === index) {
      window.speechSynthesis.cancel()
      setSpeakingIndex(null)
      return
    }

    window.speechSynthesis.cancel()

    // Clean markdown characters for pleasant pronunciation
    const cleanText = text
      .replace(/[*#_`•-]/g, ' ')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.rate = 1.0
    utterance.pitch = 1.0
    utterance.lang = 'en-IN'

    utterance.onend = () => setSpeakingIndex(null)
    utterance.onerror = () => setSpeakingIndex(null)

    setSpeakingIndex(index)
    window.speechSynthesis.speak(utterance)
  }

  // Simple parser to format markdown bold and lists
  const renderFormattedMessage = (content) => {
    const lines = content.split('\n')
    return lines.map((line, idx) => {
      const boldParts = line.split(/(\*\*.*?\*\*)/g)

      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'leading-relaxed'}>
          {boldParts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-[#090e24]">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            if (part.startsWith('*') && part.endsWith('*')) {
              return (
                <em key={pIdx} className="italic">
                  {part.slice(1, -1)}
                </em>
              )
            }
            return part
          })}
        </p>
      )
    })
  }

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center group">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-2xl bg-[#090e24]/95 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-slate-700/60 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>AI Career Counselor</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#2f6bfd]/40 ${
            isOpen
              ? 'bg-[#090e24] hover:bg-[#141e3d] shadow-slate-900/30 rotate-90'
              : 'bg-gradient-to-tr from-[#2f6bfd] via-[#1b53e8] to-[#6366f1] shadow-[#2f6bfd]/40 hover:shadow-2xl hover:shadow-[#2f6bfd]/60 hover:scale-110 active:scale-95'
          }`}
          aria-label={isOpen ? 'Close AI Counselor' : 'Open AI Career Counselor'}
          title="Prof. Sharim AI Counselor"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <span className="absolute -inset-1 rounded-full bg-[#2f6bfd]/30 animate-pulse -z-10" />
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white p-0.5 shadow-inner flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Main Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] h-[600px] flex flex-col rounded-3xl bg-white shadow-2xl shadow-[#090e24]/25 border border-slate-200/80 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          data-lenis-prevent="true"
        >
          {/* Header */}
          <div className="bg-[#090e24] text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white p-1 shadow-md shadow-[#2f6bfd]/30 overflow-hidden flex-shrink-0">
                <img src={logo} alt="Nexdisha Logo" className="w-full h-full object-contain" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#090e24]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm tracking-tight text-white">Prof. Sharim AI</h3>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[#2f6bfd]/25 text-[#598cff] px-1.5 py-0.5 rounded-md border border-[#2f6bfd]/30">
                    Voice &amp; Chat
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admissions, Placements &amp; Careers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Restart Chat"
                aria-label="Restart Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close Window"
                aria-label="Close Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex bg-[#0f1738] text-xs font-bold border-b border-slate-800 p-1">
            <button
              type="button"
              onClick={() => setActiveTab('chat')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-[#2f6bfd] text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AI Chat Assistant</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('flow')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'flow'
                  ? 'bg-[#2f6bfd] text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Fast Flow Form</span>
            </button>
          </div>

          {/* Tab Views */}
          {activeTab === 'flow' ? (
            /* Fast Flow Form View with Official FlowConnect Widget */
            <div className="flex-1 p-3 overflow-y-auto bg-slate-50 flex flex-col">
              <div className="rounded-2xl bg-white p-2 border border-slate-200 shadow-sm flex-1 flex flex-col">
                <div className="px-2 py-1.5 border-b border-slate-100 mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Official Fast Connect Form
                  </span>
                  <span className="text-[9.5px] font-semibold text-[#2f6bfd] bg-blue-50 px-2 py-0.5 rounded-full">
                    FlowConnect AI
                  </span>
                </div>
                <div className="flex-1 w-full rounded-xl overflow-hidden min-h-[420px]">
                  <iframe
                    src="https://login.flowconnect.ai/widget/form/6a8b2c472ee32"
                    style={{ width: '100%', height: '440px', border: 'none', borderRadius: '8px' }}
                    id="inline-6a8b2c472ee32-bot"
                    data-form-name="Enquiry Form"
                    data-layout-iframe-id="inline-6a8b2c472ee32-bot"
                    data-form-id="6a8b2c472ee32"
                    data-height="440"
                    title="Enquiry Form Bot"
                  />
                </div>
              </div>

              {/* Direct call footer strip */}
              <div className="mt-2 pt-2 border-t border-slate-200 text-center text-[11px] text-slate-500">
                <span>Or speak directly: </span>
                <a href={`tel:${siteConfig.phone}`} className="font-bold text-[#2f6bfd] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          ) : (
            /* AI Chat View */
            <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/50">
              {/* Message List */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
                {messages.map((msg, index) => {
                  const isModel = msg.role === 'model'
                  const isSpeakingThis = speakingIndex === index

                  return (
                    <div
                      key={index}
                      className={`flex gap-2.5 ${isModel ? 'justify-start' : 'justify-end'}`}
                    >
                      {isModel && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-sm border border-slate-200 overflow-hidden">
                          <img src={logo} alt="Nexdisha" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div
                        className={`group relative max-w-[85%] rounded-2xl p-3.5 text-xs shadow-sm ${
                          isModel
                            ? 'bg-white text-slate-800 border border-slate-100'
                            : 'bg-gradient-to-r from-[#2f6bfd] to-[#1b53e8] text-white'
                        }`}
                      >
                        {isModel ? renderFormattedMessage(msg.content) : msg.content}

                        {/* Read Aloud Voice Button for Assistant Responses */}
                        {isModel && (
                          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-end">
                            <button
                              type="button"
                              onClick={() => handleSpeak(msg.content, index)}
                              className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                                isSpeakingThis
                                  ? 'bg-[#2f6bfd] text-white animate-pulse'
                                  : 'text-slate-400 hover:text-[#2f6bfd] hover:bg-slate-100'
                              }`}
                              title={isSpeakingThis ? 'Stop Voice' : 'Listen with Voice'}
                              aria-label={isSpeakingThis ? 'Stop Voice' : 'Listen with Voice'}
                            >
                              {isSpeakingThis ? (
                                <>
                                  <VolumeX className="w-3 h-3" />
                                  <span>Stop</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3 h-3" />
                                  <span>Listen</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {loading && (
                  <div className="flex gap-2.5 justify-start">
                    <div className="w-7 h-7 rounded-xl bg-white p-0.5 border border-slate-200 flex items-center justify-center overflow-hidden animate-pulse">
                      <img src={logo} alt="Loading" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-white rounded-2xl p-3.5 border border-slate-100 flex items-center gap-1.5 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f6bfd] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f6bfd] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2f6bfd] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick suggestion prompt chips */}
              <div className="px-3 py-1.5 border-t border-slate-100 bg-white flex gap-1.5 overflow-x-auto no-scrollbar">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="flex-shrink-0 text-[10px] font-semibold text-slate-600 bg-slate-100 hover:bg-[#eef4ff] hover:text-[#2f6bfd] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Voice & Text Input Area */}
              <div className="p-3 bg-white border-t border-slate-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder={
                        isListening
                          ? '🎙️ Listening... please speak now...'
                          : 'Ask about admissions, cutoffs, placements...'
                      }
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={loading}
                      className={`w-full rounded-xl border-none px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none transition-all ${
                        isListening
                          ? 'bg-rose-50 ring-2 ring-rose-400 placeholder:text-rose-500 placeholder:font-semibold animate-pulse'
                          : 'bg-slate-100 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#2f6bfd]/30'
                      }`}
                    />
                  </div>

                  {/* Microphone Voice Input Button */}
                  <button
                    type="button"
                    onClick={toggleVoiceInput}
                    className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all cursor-pointer shadow-sm ${
                      isListening
                        ? 'bg-rose-600 text-white shadow-rose-500/40 animate-bounce'
                        : 'bg-slate-100 text-slate-600 hover:bg-[#eef4ff] hover:text-[#2f6bfd]'
                    }`}
                    title={isListening ? 'Stop Recording' : 'Voice Typing (Speak in English/Hindi)'}
                    aria-label={isListening ? 'Stop Recording' : 'Voice Typing'}
                  >
                    {isListening ? (
                      <MicOff className="w-4 h-4" />
                    ) : (
                      <Mic className="w-4 h-4" />
                    )}
                  </button>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-[#2f6bfd] to-[#1b53e8] text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default AIChatbot
