const RANDOM_PROFILE_URL = "/profiles/random";

export const PROFILE_API_BASE_URL = "http://localhost:8080";

export async function fetchRandomProfile () {
    try {
        const profileResponse = await fetch(PROFILE_API_BASE_URL + RANDOM_PROFILE_URL );
        if(profileResponse.ok) {
            return profileResponse.json()
        }
        console.error(`Error deserializing profile reesponse ${profileResponse}`);
        return null;
    } catch (error) {
        console.error("error fetching random profile" + error);
    }
}
