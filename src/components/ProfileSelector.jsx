import {HeartCrack, Heart} from 'lucide-react'
import { useEffect, useState } from 'react';
import {fetchRandomProfile , PROFILE_IMAGES_URL} from '../services/ProfileService';
import {createNewMatch } from '../services/MatchesService';

const ProfileSelector = () => {

    const [profile, setProfile] = useState({});

    const loadRandomProfile = async() => {
        const randomProfile = await fetchRandomProfile();
        setProfile(randomProfile);
    };

    const handleNewMatch = async () => {
        await createNewMatch(profile.id);
        loadRandomProfile();
        // TODO: instead or reloading, redirect to chat with new match
    }
    useEffect(() => { 
        loadRandomProfile();
    }, []);

    return (
        profile ? (
            <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white ">
            <div className="relative">
                <img src={PROFILE_IMAGES_URL + profile.imageUrl} className='w-full'/>
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
                    <h2 className="text-3xl font-bold ">{profile.firstname} {profile.lastname},  {profile.age} {profile.mtbi}</h2>
                </div>
            </div>
            <div className="p-4">
                    <h2 className="text-gray-500 mb-5">{profile.bio}</h2>
                </div>
            <div className="p-4 flex justify-between">
                <button className='bg-red-600 rounded-full p-4 hover:bg-red-700 text-white'
                    onClick={()=> loadRandomProfile()}
                >
                    <HeartCrack size={40}/>
                </button>
                <button  className='bg-green-600 rounded-full p-4 hover:bg-green-700 text-white'
                    onClick={()=> handleNewMatch()}
                >
                    <Heart size={40}/>
                </button>
            </div>
        </div>
        ) : (<div> Loading ...</div>)
    )
}

export default ProfileSelector;
