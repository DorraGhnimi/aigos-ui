import { useEffect } from 'react';
import { useState } from 'react';
import {getAllMatches} from '../services/MatchesService'
import { PROFILE_IMAGES_URL} from '../services/ProfileService';


const MatchesList = ({setCurrentView}) => {

    const [matches, setMatches] = useState([]);

    const loadAllMatches = async () => {
        const matchesList = await getAllMatches();
        setMatches(matchesList);
    }

    useEffect(()=> {
        loadAllMatches();
    }, []);

    return(
        <div className='w-full rounded-lg shadow-lg p-4'>
            <h2 className='font-bold text-2xl mb-4'>matches List</h2>
            <ul>
                {
                    matches.map(match => (
                        <li key={match.id} className="mb-3">
                            <button 
                            onClick={() => setCurrentView("Chat")}
                            className='flex w-full hover:bg-gray-100 rounded-lg items-center'
                            >
                                <img src={PROFILE_IMAGES_URL + match.profile.imageUrl} className="w-20 h-20 rounded-full mr-3" />
                                <span>
                                    <h3>{match.profile.firstname} {match.profile.lastName}</h3>
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default MatchesList