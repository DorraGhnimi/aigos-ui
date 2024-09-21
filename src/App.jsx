import './App.css'
import {User, MessageCircle} from 'lucide-react'
import ProfileSelector from './components/ProfileSelector';
import MatchesList from './components/MatchesList';
import Chat from './components/Chat';
import { useState } from 'react';

function App() {

  const [currentView, setCurrentView] = useState('ProfileSelector');
  const [conversationId, setConversationId] = useState(null);

  const openChat= (conversationId) => {
    setConversationId(conversationId);
    setCurrentView("Chat");
    console.log("conversationId=");
    console.log(conversationId);
  }

  return (
    <div className='max-w-screen-md mx-auto p-9' >
      <nav className='flex justify-between mb-4'>
        <div className="p-4 flex justify-center space-x-4">
          
        <User onClick={()=>setCurrentView("ProfileSelector")}/>
        </div>
       <div  className="p-4 flex justify-center space-x-4">
       <MessageCircle  onClick={()=>setCurrentView("MatchesList")}/>
       </div>
      </nav>
      {currentView == "ProfileSelector" &&
        <ProfileSelector/>
      }
      {currentView == "MatchesList" &&
        <MatchesList openChat={openChat}/>
      }
      {currentView == "Chat" &&
        <Chat conversationId={conversationId}/>
      }
    </div>
  )
}

export default App
