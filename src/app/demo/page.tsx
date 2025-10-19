

'use client'

import React, { useState } from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageAvatar, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Shimmer } from '@/components/ai-elements/shimmer';
import { Loader } from '@/components/ai-elements/loader';
import EmptyConversations from '@/components/chatTraductor/EmptyConversations';
import { EmptyContent } from '@/components/ui/empty';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { ScrollArea } from "@/components/ui/scroll-area"

const models = [{ name: 'GPT 4o', value: 'openai/gpt-4o' }];

const messages:{ key: number; value: string; name: string; avatar: string,from:"user" | "assistant" }[] = [
  { key: 1, value: 'Hello, how are you?', name: 'Diego Altamirano', avatar: 'https://github.com/haydenbleasel.png', from: 'user' },
  { key: 2, value: "I'm good, thank you! How can I assist you today?", name: 'AI Assistant', avatar: '/logo.png', from: 'assistant' },
  { key: 3, value: "I'm looking for information about your services.", name: 'Diego Altamirano', avatar: 'https://github.com/haydenbleasel.png', from: 'user' },
  { key: 4, value: 'Sure! We offer a variety of AI solutions. What are you interested in?', name: 'AI Assistant', avatar: '/logo.png', from: 'assistant' },
  { key: 5, value: "I'm interested in natural language processing tools.", name: 'Diego Altamirano', avatar: 'https://github.com/haydenbleasel.png', from: 'user' },
  { key: 6, value: 'Great choice! We have several NLP APIs. Would you like a demo?', name: 'AI Assistant', avatar: '/logo.png', from: 'assistant' }
];

const cargandoSugerencias = false

const TraductorPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (message: string) => {
    const resp = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await resp.json();
    setOutput(data.message);
    setInput("");
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full min-h-screen">
      {/* Columna izquierda: Chat */}
      <div className="flex-1 max-w-4xl mx-auto px-6 pt-6 pb-2 relative h-[calc(100vh-100px)]">
        <div className="flex flex-col h-full">
          <Conversation className="h-full">
            <ConversationContent>
              {messages.length === 0 ? (
                <EmptyConversations />
              ) : (
                messages.map((message) => (
                  <Message from={message.from} key={message.key}>
                    <MessageContent>{message.value}</MessageContent>
                    <MessageAvatar name={message.name} src={message.avatar} />
                  </Message>
                ))
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput onSubmit={() => handleSubmit(input)} className="mt-4 cursor-pointer" globalDrop multiple>
            <PromptInputBody>
              <PromptInputTextarea
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="¿Qué te gustaría traducir?"
              />
            </PromptInputBody>
            <PromptInputToolbar>
              <PromptInputTools />
              <PromptInputSubmit className="cursor-pointer transition" />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>

      {/* Columna derecha: Loader + Shimmer */}
      <div className="flex flex-col lg:flex-row  gap-3 p-4 lg:w-[400px] w-full border-t lg:border-t-0 lg:border-l border-border/30 bg-muted/10">
         <div className='w-full'>
          {
            cargandoSugerencias ? (
              <div className='mt-5'>
                <Loader className="mr-0 lg:mr-3" />
                <Shimmer className="text-center text-sm lg:text-base">
                  Cargando sugerencias y correcciones...
                </Shimmer>
              </div>
            ) :
            <>
            <h2 className='text-lg'>Sugerencias y correcciones.</h2>
            <hr className='mt-2'/>
            <ScrollArea className='h-[300px] md:h-[550px]'>

              <Card className='w-full mt-3'>
                <CardHeader>
                  <CardTitle>Lorem, ipsum dolor.</CardTitle>
                  <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia culpa impedit aperiam veniam aut. Labore adipisci ipsum maxime esse!</CardDescription>
                </CardHeader>
              </Card>

              <Card className='w-full mt-3'>
                <CardHeader>
                  <CardTitle>Lorem, ipsum dolor.</CardTitle>
                  <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia culpa impedit aperiam veniam aut. Labore adipisci ipsum maxime esse!</CardDescription>
                </CardHeader>
              </Card>

              <Card className='w-full mt-3'>
                <CardHeader>
                  <CardTitle>Lorem, ipsum dolor.</CardTitle>
                  <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia culpa impedit aperiam veniam aut. Labore adipisci ipsum maxime esse!</CardDescription>
                </CardHeader>
              </Card>

              <Card className='w-full mt-3'>
                <CardHeader>
                  <CardTitle>Lorem, ipsum dolor.</CardTitle>
                  <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia culpa impedit aperiam veniam aut. Labore adipisci ipsum maxime esse!</CardDescription>
                </CardHeader>
              </Card>
            </ScrollArea>
            
            </>
          }
      
        
      
         </div>
      </div>
    </div>
  );
};

export default TraductorPage;
