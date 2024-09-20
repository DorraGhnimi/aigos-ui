import React from "react";
import { useState } from "react";

const Chat = ({firstName, lastname}) => {

    const [message,setMessage] = useState("");

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        if(message.trim()) {
            console.log(message);
            setMessage("");
        }
    }

    return (
        <div className='w-full rounded-lg shadow-lg p-4'>
            <h2 className="text-2xl font-bold mb-4">Chat with {firstName} {lastname}</h2>       
            <div className="h-[75vh] border rounded overflow-y-auto mb-4 p-2  shadow-lg">
                {
                    [
                        "Hi",
                        "how are you",
                        "good, you?",
                        "not bad",
                        "cool",
                        "nice"
                    ].map((msg, index) => (
                        <div key={index}>
                            <div className="mb-4 p-2 bg-gray-100 rounded shadow-md">{msg}</div>
                        </div>
                    ))
                }
            </div>
             <div className="flex">
                <input type="text"
                    placeholder="type something ..."
                    value={message}
                    className="border rounded w-full shadow-lg p-3"
                    name="messageInput" onChange={(e)=> onChangeMessage(e)} 
                />
                <button
                    className="bg-blue-500 rounded px-5 py-3 mx-4  shadow-lg"
                    onClick={(e) => sendMessage(e)}
                 > <p className="bold">Send</p></button>
            </div>
        </div>
    )
}

export default Chat;