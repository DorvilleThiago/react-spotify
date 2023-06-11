import axios from 'axios';

export async function getSongs(song: string) {
    try {
        song = song.replace(' ', '%20')
        const response = await axios.get(`https://api.thiago-dorville.tech/search/${song}`);
        if (response.status === 200) {
            return response.data;
        }
        return false;
    } catch (err) { 
        console.log(err);
    }
}