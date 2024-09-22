import './App.css'
import {User, MessageCircle} from 'lucide-react'
import ProfileSelector from './components/ProfileSelector';
import MatchesList from './components/MatchesList';
import Chat from './components/Chat';
import { useState } from 'react';

function App() {

  const [currentView, setCurrentView] = useState('ProfileSelector');
  const [conversationId, setConversationId] = useState(null);
  const [match, setMatch] = useState(null);

  const openChat= (match) => {
    setConversationId(match.conversationId);
    setCurrentView("Chat");
    setMatch(match);
    console.log("conversationId=");
    console.log(match.conversationId);
  }

  return (
    <div className='max-w-screen-md mx-auto p-5' >
      <nav className='flex justify-between'>
        <div className="p-4 flex justify-center space-x-4">
          <User  size={35}  onClick={()=>setCurrentView("ProfileSelector")}/>
        </div>
       <div  className="p-4 flex justify-center space-x-4">
          <MessageCircle size={35} onClick={()=>setCurrentView("MatchesList")}/>
       </div>
      </nav>
      {currentView == "ProfileSelector" &&
        <ProfileSelector/>
      }
      {currentView == "MatchesList" &&
        <MatchesList openChat={openChat}/>
      }
      {currentView == "Chat" &&
        <Chat conversationId={conversationId} match={match}/>
      }
    </div>
  )
}

export default App
