import {MessageCircle} from 'lucide-react'
import {PROFILE_IMAGES_URL, fetchProfile} from '../services/ProfileService';
import React, { useState, useEffect } from "react";

const Profile = ({match, openChat, isUserProfile}) => {

    const [profile, setProfile] = useState({});

    const loadUserProfile = async () => {
        if(isUserProfile === true) {
            const userProfile = await fetchProfile('user');
            setProfile(userProfile);
        } else {
            setProfile(match.profile)
        }
    };

    useEffect(() => { 
        loadUserProfile();
    }, []);

    return (
        match ? (
            <div className="w-full rounded-lg shadow-sm overflow-hidden bg-white ">
            <div className="relative">
                <img src={PROFILE_IMAGES_URL + profile.imageUrl} className='w-full'/>
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
                    <h2 className="text-3xl font-bold ">{profile.firstname} {profile.lastname}</h2>
                    <h4 className="text-3xl font-bold ">{profile.age} - {profile.mtbi}</h4>
                    <h4 className="text-3xl font-bold ">{profile.ethnicity} - {profile.profession} - {profile.religion}</h4>
                </div>
            </div>
            <div className="p-4">
                    <h2 className="text-gray-500 mb-5">{profile.bio}</h2>
                </div>
            <div className="p-4 flex justify-center">
                <button className='bg-blue-500 rounded-full p-4 hover:bg-blue-600 text-white'
                    onClick={()=> openChat(match)}
                >
                    <MessageCircle className='w-64 h-24'/>
                </button>
               
            </div>
        </div>
        ) : (<div> Loading ...</div>)
    )
}

export default Profile;
