import React from 'react'

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';

const TraductorPage = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
            <ConversationContent>
                mesan
            </ConversationContent>
        </Conversation>
    </div>
    </div>
   
    </>
  )
}

export default TraductorPage