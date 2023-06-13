import { useEffect, useState, createRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSongData } from '../services/getSongData';
import transformList from '../services/transformList';
import './appearAnimation.css'
import './progress.css'
import './MediaQueries.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Arrow from '../assets/arrow.svg'
import Play from '../assets/Play.svg'
import Ir from '../assets/Ir.svg'
import Voltar from '../assets/Voltar.svg'
import Pause from '../assets/Pause.svg'
import Volume from '../assets/Volume.svg'
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getSongAudio } from '../services/getSongAudio';

export default function Player() {

    const { song } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [artists, setArt] = useState<string>()
    const [audio, setAudio] = useState<string>()
    const [volume, setVolume] = useState(0.3);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = createRef<HTMLAudioElement>();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
          if (isPlaying) {
            audioElement.pause();
          } else {
            audioElement.play();
          }
          setIsPlaying(!isPlaying);
        }
    };
    
    const handleSkipForward = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
          audioElement.currentTime += 10;
        }
      };
    
    const handleSkipBackward = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
        audioElement.currentTime -= 10;
    }
    };

    const handleTimeUpdate = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
          setCurrentTime(audioElement.currentTime);
        }
      };
      
    const handleLoadedMetadata = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
        setDuration(audioElement.duration);
    }
    };
    
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressBarClick = (event: React.MouseEvent<HTMLProgressElement>) => {
        const progressBar = event.target as HTMLProgressElement;
        const boundingRect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - boundingRect.left;
        const percentage = offsetX / boundingRect.width;
        const newTime = duration * percentage;
      
        const audioElement = audioRef.current;
        if (audioElement) {
          audioElement.currentTime = newTime;
        }
    };
    
    const handleEnded = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
          audioElement.currentTime = 0;
          audioElement.pause();
          setIsPlaying(false);
        }
      };

    useEffect(() => {
        const run = async () => {
            const song_data_list = await getSongData(song!)
            if (song_data_list) { 
                const song_data = song_data_list[0]
                console.log(song_data)
                const song_audio = await getSongAudio(song_data.url)
                console.log(song_audio)
                setImage(song_data.image)
                setTitle(song_data.title)
                const transformed_artists = transformList(song_data.artists)
                setArt(transformed_artists)
                if (song_audio) {
                    setAudio(URL.createObjectURL(song_audio))
                }
            }
        }
        run()
    }, [])

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume;
        }
      }, [volume]);

    const handleVolumeClick = (event: React.MouseEvent<HTMLProgressElement>) => {
        const progressBar = event.currentTarget;
        const boundingRect = progressBar.getBoundingClientRect();
        const clickPosition = event.clientX - boundingRect.left;
        const progressWidth = boundingRect.width;
        const newVolume = clickPosition / progressWidth;
    
        setVolume(newVolume);
    
        if (audioRef.current) {
          audioRef.current.volume = newVolume;
        }
      };

    useEffect(() => {
        const audioElement = audioRef.current;
        console.log(audioElement)
        if (audioElement) {
        console.log('dentro')
        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.addEventListener('ended', handleEnded);
        audioRef.current.volume = volume;
        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.removeEventListener('ended', handleEnded);
        };
        }
    },[audio])

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <main className="pageComponent flex flex-col items-center w-screen h-screen justify-center">
            <section className="bg-black_transparent h-3/4 w-4/5 rounded-[25px] flex flex-col p-5 min-w-[270px] min-h-[500px]">
                <img
                    onClick={() => navigate('/')}
                    className='hover:scale-125 transition-all hover:cursor-pointer'
                    width={20}
                    src={Arrow} />
                {audio ?
                <div className='flex flex-col items-center h-full justify-between pt-6 pb-10'>
                    <div className='flex flex-col items-center '>
                        <img
                            className='songImage object-contain rounded-[10px] bg-cover'
                            width={180}
                            height={180}
                            src={image} />
                        <h1 className='font-bold mt-3 text-[19px] text-center'>{title}</h1>
                        <h3 className='text-[11px]'>{artists}</h3>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <div className='self-start mb-2 flex flex-row items-center gap-2'>
                            <img src={Volume} width={20} height={20}/>
                            <progress value={volume} onClick={handleVolumeClick} className='w-[80px] h-[5px]'/>
                        </div>
                        <div className='flex mb-4 items-center gap-3 w-full'>
                            <p className='absolute left-0 -translate-x-12 max-[450px]:hidden'>{formatTime(currentTime)}</p>
                            <progress className='bg-gray-200 hover:cursor-pointer w-[220px] rounded min-[450px]:w-[40vw] transition-all' value={currentTime} max={duration} onClick={handleProgressBarClick}/>
                            <p className='absolute right-0 translate-x-12 max-[450px]:hidden'>{formatTime(duration)}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button
                                className='bg-white rounded-[100%] w-10 h-10 grid place-items-center cursor-pointer'
                                onClick={handleSkipBackward}>
                                <img src={Voltar} width={24}/>
                            </button>
                            <button
                                className='bg-white rounded-[100%] w-12 h-12 grid place-items-center cursor-pointer'
                                onClick={togglePlay}>
                                {isPlaying ? <img
                                    width={20}
                                    src={Pause} /> : <img className='ml-1' src={Play} />}
                            </button>
                            <button
                                className='bg-white rounded-[100%] w-10 h-10 grid place-items-center cursor-pointer'
                                onClick={handleSkipForward}>
                                <img src={Ir} width={18}/>
                            </button>
                        </div>
                    </div>
                    <audio ref={audioRef} src={audio} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleEnded}/>
                </div>        
                :
                <div className='flex flex-col items-center h-full justify-between pt-10 pb-10'>
                    <div className='flex flex-col items-center '>
                        <Skeleton count={1} className='songImage w-[180px] h-[180px] object-contain rounded-[10px]'/>
                                <Skeleton count={1} className='songImage mt-3 w-[120px] h-[40px] rounded-[10px]' />
                                <Skeleton count={1} className='songImage mt-1 w-[80px] h-[20px] rounded-[10px]'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Skeleton count={1} className='songImage w-[180px] h-[40px] object-contain rounded-[10px]'/>
                    </div>
                </div>
                }
            </section>
        </main>
        </SkeletonTheme>
    )
}