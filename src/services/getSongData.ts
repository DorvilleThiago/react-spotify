import axios from 'axios';

export async function getSongData(song_id: string) {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/getsong/${song_id}`);
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (err) { 
        console.log(err);
    }
}