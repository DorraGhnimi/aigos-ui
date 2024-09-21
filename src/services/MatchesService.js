const MATCHES_URL = "http://localhost:8080/matches";

export async function getAllMatches() {
    try{
        const matchesResponse = await fetch(MATCHES_URL);
        return matchesResponse.json();
    } catch(error) {
        console.error("Error while fetching matches list:" + error);
    }
}

export async function createNewMatch(profileId) {
    try{
        const response  = await fetch(MATCHES_URL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ profileId })
            }
        );
        if (!response.ok) {
            throw new Error('Failed to save swipe');
          }
    } catch(error) {
        console.error("Error while fetching matches list:" + error);
    }
}
