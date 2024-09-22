 const RANDOM_PROFILE_URL = "http://localhost:8080/profiles/random";
 const PROFILE_URL = "http://localhost:8080/profiles/";
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

export async function fetchProfile(profileId) {
    try {
        const profileResponse = await fetch(PROFILE_URL +  profileId);
        if(profileResponse.ok) {
            return profileResponse.json()
        }
        console.error(`Error deserializing profile reesponse ${profileResponse}`);
        return null;
    } catch (error) {
        console.error("error fetching profile" + error);
    }
}
