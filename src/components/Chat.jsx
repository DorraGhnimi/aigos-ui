import React, { useEffect } from "react";
import { useState } from "react";
import {fetchConversation, addMessageToConvo} from '../services/ConversationService'

const Chat = ({conversationId}) => {

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
        loadConversation(conversationId);
    }, [conversationId]);

    return (
        conversation ? (
            <div className='w-full rounded-lg shadow-lg p-4'>
            <h2 className="text-2xl font-bold mb-4">Chat with {conversation.profileId}</h2>       
            <div className="h-[75vh] border rounded overflow-y-auto mb-4 p-2  shadow-lg">
                {
                    conversation.messages.map((msg, index) => (
                        <div key={index}>
                            <div className="mb-4 p-2 bg-gray-100 rounded shadow-md">{msg.messageText}</div>
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