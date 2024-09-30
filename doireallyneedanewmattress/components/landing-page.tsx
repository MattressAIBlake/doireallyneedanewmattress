'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Moon, ShieldCheck, ThumbsUp } from "lucide-react"

export function LandingPage() {
  const [messages, setMessages] = useState([
    { role: 'system', content: "Welcome to the No-Pressure Zone! I'm your friendly neighborhood AI, here to chat about your mattress without trying to sell you one. It's like talking to a friend who's really into sleep, but won't judge your pillow fort building skills. What's on your mind about your current mattress?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      // Here you would typically call an API to get the AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'system', content: "Thanks for sharing! Remember, I'm here to help, not to judge (unless you sleep on a bed of nails, then I might have questions). How long have you and your mattress been in this relationship? Is it time for couples counseling or a clean break?" }])
      }, 1000)
    }
  }

  useEffect(() => {
    const scrollArea = document.querySelector('.scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-blue-100">
        <div className="flex items-center space-x-2 text-indigo-600">
          <Moon className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Do I really need a new mattress?</h1>
        </div>
        <div className="flex items-center text-green-600">
          <ShieldCheck className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">100% Sales-Pitch Free Zone</span>
        </div>
      </header>
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-indigo-900">Welcome to the No-Pressure Mattress Zone</h2>
            <p className="text-xl text-indigo-600">Where we're more interested in your sleep than your wallet.</p>
            <div className="flex justify-center items-center space-x-2 text-green-600">
              <ThumbsUp className="h-6 w-6" />
              <p className="text-lg font-medium">Zero sales pitches, 100% honest advice</p>
              <ThumbsUp className="h-6 w-6" />
            </div>
            <p className="text-lg text-indigo-500 italic">"We're like a fortune cookie for your bedroom, minus the cookie and the vague predictions."</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="A peaceful sleep scene (our AI counted zero sheep in this image)"
                className="relative z-10 rounded-lg shadow-lg"
                width="400"
                height="400"
              />
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100">
              <ScrollArea className="h-[400px] p-4 scroll-area">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div 
                      className={`inline-block p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-indigo-100 text-indigo-800' 
                          : 'bg-blue-50 text-blue-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="p-4 border-t border-blue-100 flex items-center">
                <Input
                  placeholder="Tell us about your mattress (no salesperson will contact you, we promise)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 mr-2 border-blue-200 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Button onClick={handleSend} className="bg-indigo-600 hover:bg-indigo-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-indigo-600">
        © 2023 Mattress Advisor. All rights reserved. We're so anti-sales, we won't even try to sell you this copyright notice.
      </footer>
    </div>
  )
}