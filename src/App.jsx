import './App.css'
import {User, MessageCircle} from 'lucide-react'
import ProfileSelector from './components/ProfileSelector';

function App() {
  return (
    <>
    <div className='max-w-max mx-auto p-9'>
      <nav className='flex justify-between mb-4'>
        <div className="p-4 flex justify-center space-x-4">
        <User/>
        </div>
       <div  className="p-4 flex justify-center space-x-4">
       <MessageCircle/>
       </div>
      </nav>
      <ProfileSelector/>

    </div>
    </>
  )
}

export default App
