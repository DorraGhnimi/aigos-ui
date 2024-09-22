import React, { useState, useEffect } from "react";
import { fetchConversation, addMessageToConvo } from '../services/ConversationService';
import { User } from 'lucide-react';
import {PROFILE_IMAGES_URL} from '../services/ProfileService';

const Chat = ({match, openProfile}) => {

    const [newMessage,setNewMessage] = useState("");
    const [conversation, setConversation] = useState(null);

    const onChangeMessage = (e) => {
        setNewMessage(e.target.value);
    }

    const sendMessage = async (e) => {
        if(newMessage.trim()) {
            console.log(newMessage);
            await addMessageToConvo(conversation.id, newMessage, 'user');
            setNewMessage("");
            loadConversation(conversation.id);
        }
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
                                            <User  className="w-11 h-11  bg-sky-300 rounded-full m-1 p-2"/>
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
                                        ? 'bg-blue-500 text-white'
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
                    className="border rounded w-full shadow-lg p-3"
                    name="messageInput" onChange={(e)=> onChangeMessage(e)} 
                />
                <button
                    className="bg-blue-500 rounded px-5 py-3 mx-4  shadow-lg"
                    onClick={(e) => sendMessage(e)}
                 > <p className="bold">Send</p></button>
            </div>
        </div>
        ) : (<div> Loading ...</div>)
    )
}

export default Chat;