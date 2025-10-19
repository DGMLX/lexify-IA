'use client'

import React from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageAvatar, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Fragment, useState } from 'react';
// import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';
import { CopyIcon, GlobeIcon, RefreshCcwIcon } from 'lucide-react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import { Loader } from '@/components/ai-elements/loader';
import EmptyConversations from '@/components/chatTraductor/EmptyConversations';

const models = [
  {
    name: 'GPT 4o',
    value: 'openai/gpt-4o',
  },
  
];

const messages: { key: number; value: string; name: string; avatar: string,from:"user" | "assistant" }[] =
  [
    {
      key: 1,
      value: 'Hello, how are you?',
      name: 'Diego Altamirano',
      avatar: 'https://github.com/haydenbleasel.png',
      from:"user"
    },
    {
      key: 2,
      value: "I'm good, thank you! How can I assist you today?",
      name: "AI Assistant",
      avatar: '/logo.png',
      from:"assistant"
    },
    {
      key: 3,
      value: "I'm looking for information about your services.",
      name: 'Diego Altamirano',
      avatar: 'https://github.com/haydenbleasel.png',
      from:"user"
    },
    {
      key: 4,
      value:
        'Sure! We offer a variety of AI solutions. What are you interested in?',
      name: 'AI Assistant',
      avatar: '/logo.png',
      from:"assistant"
    },
    {
      key: 5,
      value: "I'm interested in natural language processing tools.",
      name: 'Diego Altamirano',
      avatar: 'https://github.com/haydenbleasel.png',
      from:"user"
    },
    {
      key: 6,
      value: 'Great choice! We have several NLP APIs. Would you like a demo?',
      name: 'AI Assistant',
      avatar: '/logo.png',
      from:"assistant"
    }
  ];


const TraductorPage = () => {

  const conversaciones = false;

  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(models[0].value);
  const [output,setOutput] = useState("")

  const handleSubmit = async(message: string) => {
    const resp = await fetch("/api/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message})
    })
    const data = await resp.json()
    setOutput(data.message)
    console.log(data)
    setInput("")
    // const hasText = Boolean(message.text);
    // const hasAttachments = Boolean(message.files?.length);

    // if (!(hasText || hasAttachments)) {
    //   return;
    
  
    
  }

  return (
    <>
    
       <div className="max-w-4xl mx-auto pr-6 pl-6 pt-6 pb-1 relative size-full  h-[calc(100vh-100px)] ">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent className=''>
                  {messages.length === 0 ? (
                    <EmptyConversations/>
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

        <PromptInput  onSubmit={()=>{handleSubmit(input)}}  className="mt-4 cursor-pointer "  globalDrop multiple>
          <PromptInputBody>
          
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder='¿Que te gustaría traducir?'
            />
          </PromptInputBody>
          <PromptInputToolbar>
            <PromptInputTools>
            </PromptInputTools>
            <PromptInputSubmit className='cursor-pointer  transition'/>
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
    
    </>
  )
}

export default TraductorPage