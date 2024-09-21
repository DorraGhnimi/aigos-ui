 const RANDOM_PROFILE_URL = "http://localhost:8080/profiles/random";
 export const PROFILE_IMAGES_URL = "http://localhost:8080/images/";

export async function fetchRandomProfile () {
    try {
        const profileResponse = await fetch(RANDOM_PROFILE_URL );
        if(profileResponse.ok) {
            return profileResponse.json()
        }
        console.error(`Error deserializing profile reesponse ${profileResponse}`);
        return null;
    } catch (error) {
        console.error("error fetching random profile" + error);
    }
}
