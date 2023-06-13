import axios from 'axios';

export async function getSongAudio(url: string) {
    try {
        const response = await axios.post(`https://api.thiago-dorville.tech/audio`, {
            video_url: url
        }, { responseType: 'blob',
        timeout: 400000 });
        if (response.status === 200) {
            const blob = new Blob([response.data], { type: 'audio/mp3' });
            console.log(blob)
            return blob;
        }
        return false;
    } catch (err) { 
        console.log(err);
    }
}