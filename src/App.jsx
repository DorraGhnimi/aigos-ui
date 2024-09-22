import './App.css'
import {User, MessageCircle} from 'lucide-react'
import ProfileSelector from './components/ProfileSelector';
import Profile from './components/Profile';
import MatchesList from './components/MatchesList';
import Chat from './components/Chat';
import { useState } from 'react';

function App() {

  const [currentView, setCurrentView] = useState('ProfileSelector');
  const [match, setMatch] = useState(null);
  const [isUserProfile, setIsUserProfile] = useState(false);

  const openChat= (match) => {
    setCurrentView("Chat");
    setMatch(match);
  }

  const openProfile = (isUser) => {
    setCurrentView("Profile");
    setIsUserProfile(isUser);
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
        <Chat match={match} openProfile={openProfile}/>
      }
      {currentView == "Profile" &&
        <Profile match={match} openChat={openChat} isUserProfile={isUserProfile}/>
      }
    </div>
  )
}

export default App
