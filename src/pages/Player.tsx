import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongData } from '../services/getSongData';
import transformList from '../services/transformList';
import './appearAnimation.css'

export default function Player() {

    const { song } = useParams();

    const [image, setImage] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [artists, setArt] = useState<string>()
    const [audio, setAudio] = useState<string>()

    useEffect(() => {
        const run = async () => {
            const song_data_list = await getSongData(song!)
            if (song_data_list) { 
                const song_data = song_data_list[0]
                console.log(song_data)
                setImage(song_data.image)
                setTitle(song_data.title)
                const transformed_artists = transformList(song_data.artists)
                setArt(transformed_artists)
                setAudio(song_data.audio_preview)
            }
        }
        run()
    }, [])
    

    return (
        <main className="pageComponent flex flex-col items-center w-screen h-screen justify-center">
            <section className="bg-black h-3/4 w-4/5 opacity-80 rounded-[25px]">
                
            </section>
        </main>
    )
}