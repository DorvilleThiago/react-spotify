import axios from 'axios';

export async function getSongData(song_id: string) {
    try {
        const response = await axios.get(`https://api.thiago-dorville.tech/getsong/${song_id}`);
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (err) { 
        console.log(err);
    }
}