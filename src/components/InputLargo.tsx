import Lupta from '../assets/Lupta.svg'

export default function InputLargo() {
    return (
        <div className='flex relative items-center'>
            <input
                className="rounded-[10px] h-12 w-[265px] pr-12 pl-3 text-[19px] bg-white text-primary placeholder-primary font-medium"
                placeholder="Sua música favorita..." />
            <img className='relative right-10 w-7 h-7'  src={Lupta}/>
        </div>
    )
}