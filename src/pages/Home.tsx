import './appearAnimation.css'
import Botao from "../components/Botao";
import InputLargo from "../components/InputLargo";
import Modal from '../components/Modal';
import { useState, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getUserData } from '../services/getUserData';
import 'react-loading-skeleton/dist/skeleton.css'
import transformList from '../services/transformList';
import Spotext from '../Spotext';
import { getSongs } from '../services/getSongs';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [modal, setModal] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [songs, setSongs] = useState<song[]>([])
    const close = () => setModal(false)
    const open = () => songInput === '' ? setModal(false) : setModal(true)

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [userLoad, setUserLoad] = useState(false)

    const { songInput } = useContext(Spotext)

    function navigateToSong(song:string) {
        let string = `/spotify/${song}`
        navigate(string)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(songInput);
        if (songInput === '') {
            return
        } else {
            setLoaded(false);
            const request_songs = await getSongs(songInput);
            if (request_songs) {
            setSongs(request_songs);
            console.log(request_songs[0].image);
            setLoaded(true);
            }
        }
      }
    
    useEffect(() => {
        const getUser = async() => {
            const request_user = await getUserData()
            const username = request_user.username
            if (username) {
                setUsername(username)
                setUserLoad(true)
            }
        }
        getUser();
    }, [])

    interface song {
        track_id: string;
        image: image;
        name: string;
        artists: string[];
    }
    interface image {
        url: string
        width: number
        height: number
    }
    
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <main className="pageComponent flex flex-col min-[360px]:items-center justify-center w-screen h-screen pl-6 pr-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start min-[500px]:items-center justify-center gap-12">
                    {userLoad ?
                        (<h1 className="min-[900px]:text-[50px] leading-[61px] font-bold text-[42px] max-[500px]:w-[290px] min-[500px]:text-center">{username.charAt(0).toUpperCase() + username.slice(1)}, O que você quer ouvir hoje?</h1>)
                        :
                        (<div>
                            <Skeleton count={1} className='h-12 w-[70vw]' />
                        </div>
                        )
                    }
                    <InputLargo/>
                    <Botao
                        onClick={() => open()}
                        text="Pesquisar" />
                </form>
                {modal &&
                    <Modal
                        modalOpen={modal} handleClose={close}>
                        {loaded ? (
                        <ul className='flex flex-col gap-3 p-2'>
                            {songs.map((song, index) => (
                                <li
                                    onClick={() => navigateToSong(song.track_id)}
                                    key={index}
                                    className='flex gap-4 hover:bg-neutral-800 hover:cursor-pointer rounded-[10px]'>
                                    <img
                                        className='h-20 w-20'
                                        src={song.image.url} />
                                    <div className='flex flex-col'>
                                        <h1 className='text-[25px] font-bold leading-7 max-[500px]:text-[18px]'>{song.name}</h1>
                                        <p className='max-[500px]:text-[13px]'>{transformList(song.artists)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        ) : 
                        (<div>
                            <Skeleton className='h-10 w-3/4'/>
                            <Skeleton className='h-5 w-1/2 mt-4'/>
                            <Skeleton className='h-5 w-1/2 mt-2'/>
                        </div>)}
                    </Modal>
                }
                <AnimatePresence
                    initial={false}
                    mode="wait">
                </AnimatePresence>
                </main>
            </SkeletonTheme>
    )
}