import {PROFILE_API_BASE_URL} from './ProfileService';


const MATCHES = "/matches";

export async function getAllMatches() {
    try{
        const matchesResponse = await fetch(PROFILE_API_BASE_URL + MATCHES);
        return matchesResponse.json();
    } catch(error) {
        console.error("Error while fetching matches list:" + error);
    }
}

export async function createNewMatch(profileId) {
    try{
        const response  = await fetch(PROFILE_API_BASE_URL + MATCHES,{
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
        console.log(JSON.stringify(response));
        console.log(response);
    } catch(error) {
        console.error("Error while fetching matches list:" + error);
    }
}
