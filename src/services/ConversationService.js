const CONVERSATION_URL = "http://localhost:8080/conversations/";

export async function fetchConversation(conversationId) {
    try {
        console.log("fetching conversation by id" + conversationId)
        const response = await fetch(CONVERSATION_URL + conversationId)
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error while fetching conversation (" + conversationId+ ") - " + error);
    }
}

export async function addMessageToConvo (conversationId, message, authorId) {

    try{
        const response  = await fetch(CONVERSATION_URL + conversationId ,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ authorId,  "messageText": message})
            }
        );
        if (!response.ok) {
            throw new Error('Failed to send message!');
          }
    } catch(error) {
        console.error("Error while sending message:" + error);
    }
}