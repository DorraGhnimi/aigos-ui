import React, { useState, useEffect } from "react";
import { fetchConversation, addMessageToConvo } from '../services/ConversationService';
import { User, LoaderCircle} from 'lucide-react';
import {PROFILE_IMAGES_URL} from '../services/ProfileService';

const Chat = ({match, openProfile}) => {

    const [newMessage,setNewMessage] = useState("");
    const [conversation, setConversation] = useState(null);
    const [isLoadingFlag, setIsLoading] = useState(false);

    const onChangeMessage = (e) => {
        setNewMessage(e.target.value);
    }

    const sendMessage = async (e) => {
        setIsLoading(true);
        if(newMessage.trim()) {
            await addMessageToConvo(conversation.id, newMessage, 'user');
            setNewMessage("");
            loadConversation(conversation.id);
        }
        setIsLoading(false);
    }

    const loadConversation = async (conversationId) => {
        const conversationResponse = await fetchConversation(conversationId);
        setConversation(conversationResponse);
    }

    useEffect(() => {
        loadConversation(match.conversationId);
    }, [match]);

    return (
        conversation ? (
            <div className='w-full rounded-lg shadow-lg p-4'>
            <h2 className="text-2xl font-bold mb-4">Chat with {match.profile.firstname}  {match.profile.lastname}</h2>       
            <div className="h-[75vh] border rounded overflow-y-auto mb-4 p-2  shadow-lg">
                {
                    conversation.messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.authorId === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-end ${msg.authorId === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                {msg.authorId === 'user' ?
                                    (<button 
                                        onClick={() => openProfile(true)}>
                                            <User  className="w-11 h-11  bg-blue-400 rounded-full m-1 p-2"/>
                                    </button>)
                                :
                                    (<button 
                                        onClick={() => openProfile(false)}>
                                            <img
                                        src={`${PROFILE_IMAGES_URL}${match.profile.imageUrl}`}
                                        className="w-11 h-11 rounded-full m-1"
                                        
                                    />
                                    </button>
                                    )
                                }
                                <div
                                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                                        msg.authorId === 'user'
                                        ? 'bg-blue-400 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                    }  m-1`}
                                >
                                    {msg.messageText}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
             <div className="flex">
                <input type="text"
                    placeholder="type something ..."
                    value={newMessage}
                    disabled={isLoadingFlag === true ? true : false}
                    className={`border rounded w-full shadow-lg p-3 disabled:opacity-30`}
                    name="messageInput" onChange={(e)=> onChangeMessage(e)} 
                />
                <button
                    className={` w-36 rounded px-2  mx-4 flex justify-center shadow-lg ${isLoadingFlag ?  'disabled bg-gray-400' : 'hover:bg-blue-500 bg-blue-400' }`}
                    onClick={(e) => sendMessage(e)}
                 > {isLoadingFlag ? 
                    < div  class="self-center">
                        <svg class="animate-spin h-8"  viewBox="0 0 24 24"><LoaderCircle/></svg>
                  </div>:
                    <p className="bold text-xl self-center ">Send</p>
                    }
                 </button>
            </div>
        </div>
        ) : (<div> Loading ...</div>)
    )
}

export default Chat;