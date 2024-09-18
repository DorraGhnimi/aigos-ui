import './App.css'
import {User, MessageCircle} from 'lucide-react'
import ProfileSelector from './components/ProfileSelector';
import MatchesList from './components/MatchesList';
import { useState } from 'react';

function App() {

const [currentView, setCurrentView] = useState('ProfileSelector');

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
        <MatchesList/>
      }
    </div>
  )
}

export default App
