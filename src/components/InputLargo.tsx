import Spotext from '../Spotext'
import Lupta from '../assets/Lupta.svg'
import { useContext } from 'react';

export default function InputLargo() {

    const {setSongInput} = useContext(Spotext)

    return (
        <div className='flex relative items-center'>
            <input
                onChange={e => setSongInput(e.target.value)}
                className="outline-none rounded-[10px] h-12 max-[500px]:w-[265px] min-[500px]:w-[80vw] pr-12 pl-3 text-[19px] bg-white text-primary placeholder-primary font-medium"
                placeholder="Sua música favorita..." />
            <img className='absolute right-3 w-7 h-7'  src={Lupta}/>
        </div>
    )
}