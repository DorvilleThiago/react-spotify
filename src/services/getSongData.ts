import axios from 'axios';

export async function getSongData(song_id: string) {
    try {
        const response = await axios.get(`http://thiagodorville.ddns.net:25565/getsong/${song_id}`);
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (err) { 
        console.log(err);
    }
}