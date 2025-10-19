'use client'

import React from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
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

const TraductorPage = () => {

  const conversaciones = false;

  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(models[0].value);


  const handleSubmit = (message: string) => {
    // const hasText = Boolean(message.text);
    // const hasAttachments = Boolean(message.files?.length);

    // if (!(hasText || hasAttachments)) {
    //   return;
    
      console.log(`${message} enviado...`)
    
  }

  return (
    <>
    
       <div className="max-w-4xl mx-auto pr-6 pl-6 pt-6 pb-1 relative size-full  h-[calc(100vh-100px)] ">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent className=''>
        
            <EmptyConversations/>
       
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